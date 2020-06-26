// 监听数组
function initArray(vm){
    // 对数组进行监听
    // 对数组对变动进行监听
    vm.arrayMethods = Object.create(Array.prototype)
    vm.ArrayNewProto = []
    Object.getOwnPropertyNames(Array.prototype).forEach(key => {
        if(typeof vm.arrayMethods[key] === "function"){
            // let vm = this
            Object.defineProperty(vm.ArrayNewProto, key, {
                enumerable: false, // 默认是不会枚举的，为了保持数组一样对性质
                configurable: false, // 不可以重新配置
                get(){
                    return function(){
                        // console.log("我监听到了数组触发"+key+"事件")
                        let result = vm.arrayMethods[key].apply(vm, arguments)
                        vm.deps.forEach(dep => {
                            dep.notify()
                        })
                        return result
                    }
                }
            })
        }else{
            vm.ArrayNewProto[key] = vm.arrayMethods[key]
        }
    })
}

module.exports = initArray