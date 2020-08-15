const get = () => localStorage.getItem('site-theme') || ''

const set = theme => {
  document.body.dataset.theme = theme
  localStorage.setItem('site-theme', theme)
}

const init = () => (document.body.dataset.theme = get())

export default { init, get, set }
