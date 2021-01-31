import { babel } from '@rollup/plugin-babel'
import vue from 'rollup-plugin-vue'

export default {
  input: 'src/index.js',
  output: {
    name: 'test-vue-jsx',
    file: 'dist/test-vue-jsx.esm.js',
    format: 'es',
    sourcemap: true,
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
      presets: [
        '@vue/babel-preset-jsx',
        [
          '@babel/env', {
            'modules': false,
          },
        ],
      ],
    }),
    vue({
      css: false,
    }),
  ],
  watch: {
    include: 'src/**',
  }
}
