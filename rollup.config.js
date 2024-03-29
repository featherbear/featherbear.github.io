import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import svelte from 'rollup-plugin-svelte';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import sveltePreprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';
import config from 'sapper/config/rollup.js';
import json from '@rollup/plugin-json'

import pkg from './package.json';
import HJSON from 'hjson'
import { mdsvex } from 'mdsvex'

const mode = process.env.NODE_ENV;
const dev = mode === 'development';
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

let json_plugin = json({ compact: true })

let hjson_plugin = {
  name: 'hjson',
  transform(hjson, id) {
    if (id.slice(-6) !== '.hjson') return null;
    return json_plugin.transform(JSON.stringify(HJSON.parse(hjson)), id + ".json")
  }
}

const onwarn = (warning, onwarn) =>
  (warning.code === 'MISSING_EXPORT' && /'preload'/.test(warning.message)) ||
  (warning.code === 'CIRCULAR_DEPENDENCY' && /[/\\]@sapper[/\\]/.test(warning.message)) ||
  (warning.plugin === 'svelte' && warning.pluginCode === 'css-unused-selector') ||
  (warning.code === 'THIS_IS_UNDEFINED') ||
  onwarn(warning);

export default {
  client: {
    input: config.client.input().replace(/\.js$/, '.ts'),
    output: config.client.output(),
    plugins: [
      replace({
        preventAssignment: true,
        values: {
          'process.browser': true,
          'process.env.NODE_ENV': JSON.stringify(mode)
        },
      }),
      hjson_plugin,
      json_plugin,
      svelte({
        //         emitCss: true,
        extensions: ['.svelte', '.svx'],
        preprocess: [sveltePreprocess({
          sourceMap: dev,
          postcss: {
            plugins: [require('autoprefixer')]
          }
        }), mdsvex()],
        compilerOptions: {
          dev,
          hydratable: true
        }
      }),
      resolve({
        browser: true,
        dedupe: ['svelte']
      }),
      commonjs(),
      typescript({ sourceMap: dev }),

      legacy && babel({
        extensions: ['.js', '.mjs', '.html', '.svelte'],
        babelHelpers: 'runtime',
        exclude: ['node_modules/@babel/**'],
        presets: [
          ['@babel/preset-env', {
            targets: '> 0.25%, not dead'
          }]
        ],
        plugins: [
          '@babel/plugin-syntax-dynamic-import',
          ['@babel/plugin-transform-runtime', {
            useESModules: true
          }]
        ]
      }),

      !dev && terser({
        module: true
      })
    ],

    preserveEntrySignatures: false,
    onwarn,
  },

  server: {
    input: { server: config.server.input().server.replace(/\.js$/, ".ts") },
    output: config.server.output(),
    plugins: [
      replace({
        preventAssignment: true,
        values: {
          'process.browser': false,
          'process.env.NODE_ENV': JSON.stringify(mode)
        },
      }),
      hjson_plugin,
      json_plugin,
      svelte({
        preprocess: [sveltePreprocess({
          sourceMap: dev, postcss: {
            plugins: [require('autoprefixer')]
          }
        }), mdsvex()],
        extensions: ['.svelte', '.svx'],
        compilerOptions: {
          dev,
          generate: 'ssr',
          hydratable: true
        },
        emitCss: false
      }),
      resolve({
        dedupe: ['svelte']
      }),
      commonjs(),
      typescript({ sourceMap: dev })
    ],
    external: Object.keys(pkg.dependencies).concat(require('module').builtinModules),
    preserveEntrySignatures: 'strict',
    onwarn,
  },

  serviceworker: {
    input: config.serviceworker.input().replace(/\.js$/, '.ts'),
    output: config.serviceworker.output(),
    plugins: [
      resolve(),
      replace({
        preventAssignment: true,
        values: {
          'process.browser': true,
          'process.env.NODE_ENV': JSON.stringify(mode)
        },
      }),
      commonjs(),
      typescript({ sourceMap: dev }),
      !dev && terser()
    ],
    preserveEntrySignatures: false,
    onwarn,
  }
};
