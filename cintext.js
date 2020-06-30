import Vue from 'vue'

/**
 *directory:要扫描的目录
 *useSudirectories:是否扫描文件下的所有子文件夹
 *regExp:正则匹配要扫描的文件
 */

const context = require.context('./', false, /\.vue$/)

/**
 *context.keys()返回所有匹配文件的路径
 */
context.keys().forEach(key=>{
  //context(key)获取到的对应的文件 .default  文件export default对应导出的内容
  let component = context(key).default
  //组件名为组件name属性的值
  Vue.component(component.name,component)
})
