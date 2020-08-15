const sveltePreprocess = require('svelte-preprocess')
const { mdsvex } = require('mdsvex')

module.exports = {
  preprocess: [sveltePreprocess({
    scss: {
      includePaths: ['src']
    },
    postcss: {
      plugins: [require('autoprefixer')]
    }
  }), mdsvex()]
}
