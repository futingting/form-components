// rollup.config.js
import { name } from '../package.json'
import vuePlugin from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'
// 如果依赖模块中存在 es 模块，需要使用 @rollup/plugin-node-resolve 插件进行转换
import nodeResolve from '@rollup/plugin-node-resolve'

const file = (type) => `lib/${name}.${type}.js`

export { // 这里将 file 方法 和 name 导出
  file,
  name
}

export default {
  input: './src/main.js',
  output: 
  {
    name,
    file: file('esm'),
    format: 'es' // 编译模式
  },
  plugins: [nodeResolve(), vuePlugin(), css({ output: 'bundle.css' })],
  external: ['vue'] // 依赖模块
}
