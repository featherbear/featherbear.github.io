export default function backgroundImageLoad(elem: HTMLElement, url?: string) {
    if (!url) return
    let img = document.createElement('img')

    img.addEventListener('load', () => {
        elem.style.backgroundImage = `url(${url})`
        elem.dispatchEvent(new CustomEvent("load"))
    })
    img.src = url
}