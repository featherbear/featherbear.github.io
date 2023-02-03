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

const sirv = require('sirv')
const polka = require('polka')
const path = require('path')
const process = require('process')
const puppeteer = require('puppeteer')
const queue = require('queue')
const PDFMerger = require('pdf-merger-js')

// Change CWD to parent directory of script
process.chdir(path.join(path.dirname(require.main.filename), '..'))

const PORT = process.env['PORT'] || 3000
const BASE_HOST = `http://localhost:${PORT}/`

let server = polka()
  .use(sirv('./__sapper__/export'))
  .listen(PORT, async () => {
    console.log("Web server running")
    const browser = await puppeteer.launch({ headless: true })

    let pages = {}

    for (let key of Object.keys(FILES)) {
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
              }, 60*1000)
            })
            
            await Promise.any([
              page.goto(address, { waitUntil: 'networkidle0' }),
              navigationTimeoutPromise
            ])
            clearTimeout(navigationTimeout)

            resolve(
              (pages[address] = await page.pdf({
                format: 'A4',
                margin: {
                  top: 45,
                  bottom: 45,
                  left: 45,
                  right: 45
                },
                ...OPTIONS[address]
              }))
            )
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
          for (let pagePath of pagePaths) merger.add(pages[pagePath])
          await merger.save(path.join('./__sapper__/export', filePath))
        } catch (e) {
          errors[address] = e
        }
      }

      for (let [filePath, error] of Object.entries(errors)) {
        console.error(filePath, error)
      }

      console.log('Done!')
      server.server.close()
    })
  })
