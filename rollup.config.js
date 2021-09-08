import resolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import commonjs from '@rollup/plugin-commonjs'
import svelte from 'rollup-plugin-svelte'
import babel from '@rollup/plugin-babel'
import json from '@rollup/plugin-json'
import HJSON from 'hjson'
import { terser } from 'rollup-plugin-terser'
import { mdsvex } from 'mdsvex'
import config from 'sapper/config/rollup.js'
import sveltePreprocess from 'svelte-preprocess'
import pkg from './package.json'

const mode = process.env.NODE_ENV
const dev = mode === 'development'
const legacy = !!process.env.SAPPER_LEGACY_BUILD

let json_plugin = json({ compact: true })
let hjson_plugin = {
  name: 'hjson',
  transform(hjson, id) {
    if (id.slice(-6) !== '.hjson') return null;
    return json_plugin.transform(JSON.stringify(HJSON.parse(hjson)), id + ".json" )
  }
}

const onwarn = (warning, onwarn) => {
  if (
    warning.code === 'CIRCULAR_DEPENDENCY' &&
    /[/\\]@sapper[/\\]/.test(warning.message)
  ) {
    return true
  }
  
  if (
    warning.plugin === 'svelte' &&
    warning.pluginCode === 'css-unused-selector'
  ) {
    return true
  }

  onwarn(warning)
}

const SCSSpreprocess = sveltePreprocess({
  scss: {
    includePaths: ['src']
  },
  postcss: {
    plugins: [require('autoprefixer')]
  }
})

module.exports = {
  client: {
    input: config.client.input(),
    output: config.client.output(),
    plugins: [
      replace({
        values: {
          'process.browser': true,
          'process.env.NODE_ENV': JSON.stringify(mode)
        },
        preventAssignment: true
      }),
      hjson_plugin,     
      json_plugin,
      svelte({
        compilerOptions: {
          dev,
          hydratable: true
        },
        emitCss: true,
        extensions: ['.svelte', '.svx'],
        preprocess: [SCSSpreprocess, mdsvex()]
      }),
      resolve({
        browser: true,
        dedupe: ['svelte']
      }),
      commonjs(),

      legacy &&
        babel({
          extensions: ['.js', '.mjs', '.html', '.svelte'],
          babelHelpers: 'runtime',
          exclude: ['node_modules/@babel/**'],
          presets: [
            [
              '@babel/preset-env',
              {
                targets: '> 0.25%, not dead'
              }
            ]
          ],
          plugins: [
            '@babel/plugin-syntax-dynamic-import',
            [
              '@babel/plugin-transform-runtime',
              {
                useESModules: true
              }
            ]
          ]
        }),

      !dev &&
        terser({
          module: true
        })
    ],

    preserveEntrySignatures: false,
    onwarn
  },

  server: {
    input: config.server.input(),
    output: config.server.output(),
    plugins: [
      replace({
        values: {
          'process.browser': false,
          'process.env.NODE_ENV': JSON.stringify(mode)
        },
        preventAssignment: true
      }),
      hjson_plugin,     
      json_plugin,
      svelte({
        compilerOptions: { dev, generate: 'ssr' },
        extensions: ['.svelte', '.svx'],
        preprocess: [SCSSpreprocess, mdsvex()]
      }),
      resolve({
        dedupe: ['svelte']
      }),
      commonjs()
    ],
    external: Object.keys(pkg.dependencies).concat(
      require('module').builtinModules ||
        Object.keys(process.binding('natives'))
    ),

    preserveEntrySignatures: 'strict',
    onwarn
  },

  serviceworker: {
    input: config.serviceworker.input(),
    output: config.serviceworker.output(),
    plugins: [
      resolve(),
      replace({
        values: {
          'process.browser': true,
          'process.env.NODE_ENV': JSON.stringify(mode)
        },
        preventAssignment: true
      }),
      commonjs(),
      !dev && terser()
    ],

    preserveEntrySignatures: false,
    onwarn
  }
}
