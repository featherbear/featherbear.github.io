export default function backgroundImageLoad(elem: HTMLElement, url?: string) {
    if (!url) return
    let img = document.createElement('img')

    const dispatch = () => elem.dispatchEvent(new CustomEvent("load"))
    let failTimeout = setTimeout(dispatch, 10000)
    
    img.addEventListener('load', () => {
        clearTimeout(failTimeout)
        elem.style.backgroundImage = `url(${url})`
        dispatch()
    })
    img.src = url
}