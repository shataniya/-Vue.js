// 处理所有的计算属性
function initComputed(vm, options){
    // 绑定所有计算属性
    let computed = vm.computed = options.computed
    if(computed){
        Object.keys(computed).forEach(cpt => {
            bindComputed(computed, cpt, computed[cpt].bind(vm))
        })
        Object.keys(computed).forEach(cpt => {
            Object.defineProperty(vm, cpt, {
                enumerable: true, // 可枚举
                configurable: false, // 不能再define
                get(){
                    return computed[cpt]
                }
            })
        })
    }
}

// 绑定计算属性
function bindComputed(computed, cpt, fn){
    Object.defineProperty(computed, cpt, {
        enumerable: true, // 可枚举
        configurable: false, // 不能再define
        get(){
            return fn()
        }
    })
}

module.exports = initComputed