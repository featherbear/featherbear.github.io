import ColorThief from 'colorthief'

let thief = ((!import.meta.env.SSR) ? new ColorThief() : ColorThief) as ColorThief
function getAsImage(url: string) {
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

export default async function (urlOrElem: string | HTMLImageElement) {
    if (!import.meta.env.SSR) return []
    let elem = ((typeof urlOrElem === 'string') ? await getAsImage(urlOrElem) : urlOrElem) as HTMLImageElement
    return Array.from(new Set(
        [thief.getColor(elem)].map(p => `rgb(${p.join(",")})`)
    ))
}