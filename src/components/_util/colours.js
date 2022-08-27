import ColorThief from 'colorthief'

let thief = (process.browser) ? new ColorThief() : ColorThief

function getAsImage(url) {
    return new Promise((resolve, reject) => {
        let img = document.createElement('img')
        img.addEventListener('load', () => resolve(img))

        fetch(url)
            .then(r => r.blob())
            .then(b =>
                img.src = (window.URL || window.webkitURL).createObjectURL(b)
            )
    })
}

export default async function (urlOrElem) {
    if (!process.browser) return []
    let elem = (typeof urlOrElem === 'string') ? await getAsImage(urlOrElem) : urlOrElem
    return Array.from(new Set(
        [thief.getColor(elem)].map(p => `rgb(${p.join(",")})`)
    ))
}