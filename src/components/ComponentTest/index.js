import ComponentTest from './index.vue'

ComponentTest.install = (Vue) => { // 组件本身添加一个 install 方法, 方便独立导出
  Vue.component(ComponentTest.name, ComponentTest)
}

export default ComponentTest
