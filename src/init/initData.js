const Dep = require("./Dep")
// 对data里边对数据进行绑定
function initData(vm, options){
    // 对数据进行绑定
    let data = vm.data = options.data
    if(data){
        oberver.call(vm, data)
        // 绑定所有data属性
        Object.keys(data).forEach(key => {
            Object.defineProperty(vm, key, {
                enumerable: true, // 可枚举
                configurable: true, // 不能再define
                get: function(){
                    return data[key]
                },
                set: function(newVal){
                    data[key] = newVal
                }
            })
        })
    }
}

// 监听所有的数据
function oberver(data){
    // 如果data不存在或者data不是对象立即返回
    if(!data || typeof data !== "object"){
        return
    }
    Object.keys(data).forEach(key => {
        // 判断是不是数组
        if(Array.isArray(data[key])){
            // 说明是数组，要对数组变动进行监听
            data[key].__proto__ = this.ArrayNewProto
        }
        bindProperty.call(this, data, key, data[key])
    })
}
// 绑定所有的数据
function bindProperty(data, key, val){
    let dep = new Dep()
    let vm = this
    oberver.call(this, val) // 这里是监听子属性
    if(Array.isArray(val)){
        this.deps.push(dep)
    }
    Object.defineProperty(data, key, {
        enumerable: true, // 可枚举
        configurable: true, // 不能再define
        get: function(){
            Dep.target && dep.addSub(Dep.target)
            return val
        },
        set: function(newVal){
            // 判断数据是否会进行更新
            if(newVal !== val){
                // 说明数据发生了变化
                // 执行watch的监听函数
                if(vm.watch.hasOwnProperty(key)){
                    // 触发相应的watch函数
                    vm.watch[key].call(vm, newVal, val)
                }
                // 将新的值newVal赋予val
                val = newVal
                // 这里要通知进行更新
                dep.notify()
            }
        }
    })
}

module.exports = initData