const FILES = {
  'Andrew Jin-Meng Wong - Resume.pdf': ['resume'],
  'Andrew Jin-Meng Wong - Resume (Complete).pdf': ['resume/full'],
  'Andrew Jin-Meng Wong - Resume (Combined).pdf': ['resume', 'resume/full']
}

let OPTIONS = {
  resume: {
    scale: 0.96,
    printBackground: true,
    pageRanges: '1'
  },
  'resume/full': {
    printBackground: true
  }
}
////////////////////////////////

import sirv from 'sirv'
import polka from 'polka'
import path from 'path'
import process from 'process'
import puppeteer from 'puppeteer'
import queue from 'queue'
import PDFMerger from 'pdf-merger-js'

process.chdir(path.join(import.meta.dirname, '..'))

const PORT = process.env['PORT'] || 3000
const BASE_HOST = `http://localhost:${PORT}/`

console.log("Starting PDF exporter")
let server = polka()
  .use(sirv('./build/'))
  .listen(PORT, async () => {
    console.log("Web server spawned")
    const browser = await puppeteer.launch({ headless: true })

    let pages = {}

    for (let key of Object.keys(FILES)) {
      console.log('Discovered target file: ' + key);
      // Convert non-arrays to arrays
      if (!Array.isArray(FILES[key])) FILES[key] = [FILES[key]]

      // Prepend base path if address not absolute
      FILES[key] = FILES[key].map(addr =>
        /https?:\/\//gi.test(addr) ? addr : BASE_HOST + addr
      )
      OPTIONS = Object.fromEntries(
        Object.entries(OPTIONS).map(([key, val]) => [
          /https?:\/\//gi.test(key) ? key : BASE_HOST + key,
          val
        ])
      )

      // Prepare fetcher
      for (let address of FILES[key]) pages[address] = null
    }

    let q = queue({
      concurrency: 5
    })
    for (let address of Object.keys(pages)) {
      q.push(
        () =>
          new Promise(async function (resolve, reject) {
            console.log('Fetching page >> ' + address)
            const page = await browser.newPage()

            let navigationTimeout;
            let navigationTimeoutPromise = new Promise((resolve) => {
              navigationTimeout = setTimeout(() => {
                console.log("Navigation to", address, "timed out")
                resolve(null)
              }, 60 * 1000)
            })

            await Promise.any([
              page.goto(address, { waitUntil: 'networkidle0' }),
              navigationTimeoutPromise
            ])
            clearTimeout(navigationTimeout)

            const content = await page.pdf({
              format: 'A4',
              margin: {
                top: 45,
                bottom: 45,
                left: 45,
                right: 45
              },
              ...OPTIONS[address]
            })
            pages[address] = content
            resolve(content)
          })
      )
    }

    q.start(async function (err) {
      if (err) throw err
      await browser.close()

      Object.values(pages).forEach(e => {
        if (!e) throw 'Not all pages saved'
      })

      // now assemble pages
      let errors = {}
      for (let [filePath, pagePaths] of Object.entries(FILES)) {
        try {
          console.log('Assembling ' + filePath)
          let merger = new PDFMerger()
          for (let pagePath of pagePaths) {
            await merger.add(pages[pagePath])
          }
          await merger.save(path.join('./build/', filePath))
        } catch (e) {
          console.log("Error when assembling " + filePath, e)
          errors[filePath] = e
        }
      }

      for (let [filePath, error] of Object.entries(errors)) {
        console.error(filePath, error)
      }

      console.log('Done!')
      server.server.close()
    })
  })
