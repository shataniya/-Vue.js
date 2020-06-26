// 初始化所有的属性
const initArray = require("./initArray")
const initData = require("./initData")
const initMethods = require("./initMethods")
const initComputed = require("./initComputed")
// 对所有属性进行绑定
function initState(vm, options){
    // 监听数组
    initArray(vm)
    // 对数据进行双向绑定
    initData(vm, options)
    // 绑定所有的方法
    initMethods(vm, options)
    // 监听所有的计算属性
    initComputed(vm, options)
}

module.exports = initState