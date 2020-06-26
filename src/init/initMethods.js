// 初始化所有的方法
function initMethods(vm, options){
    // 绑定所有methods事件
    let methods = vm.methods = options.methods
    if(methods){
        Object.keys(methods).forEach(method => {
            vm[method] = methods[method] = methods[method].bind(vm)
        })
    }
}

module.exports = initMethods