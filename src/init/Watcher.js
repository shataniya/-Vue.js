const Dep = require("./Dep")

/**
 * 判断此对象是否是Object类型
 * @param {Object} obj  
 */
function  isObject(obj){
    return Object.prototype.toString.call(obj)==='[object Object]';
};
/**
 * 判断此类型是否是Array类型
 * @param {Array} arr 
 */
function isArray(arr){
    return Object.prototype.toString.call(arr)==='[object Array]';
};
/**
 *  深度比较两个对象是否相同
 * @param {Object} oldData 
 * @param {Object} newData 
 */
function equalsObj(oldData,newData){
    // 类型为基本类型时,如果相同,则返回true
    if(oldData === newData) return true;
    if(isObject(oldData)&&isObject(newData)&&Object.keys(oldData).length === Object.keys(newData).length){
        // 类型为对象并且元素个数相同

        // 遍历所有对象中所有属性,判断元素是否相同
        for (const key in oldData) {
            if (newData.hasOwnProperty(key)) {
                if(!equalsObj(oldData[key],newData[key]))
                    // 对象中具有不相同属性 返回false
                    return false;
            }
        }
    }else if(isArray(oldData)&&isArray(oldData)&&oldData.length===newData.length){
        // 类型为数组并且数组长度相同

        for (let i = 0,length=oldData.length; i <length; i++) {
            if(!equalsObj(oldData[i],newData[i]))
            // 如果数组元素中具有不相同元素,返回false
            return false;
        }
    }else{
        // 其它类型,均返回false
        return false;
    }
    
    // 走到这里,说明数组或者对象中所有元素都相同,返回true
    return true;
};
// Watcher
function Watcher(vm, exp, element, match, cb){
    this.vm = vm
    this.exp = exp
    this.element = element
    this.match = match
    this.cb = cb
    let value = this.get()
    this.value = isArray(value) ? [...value] : value
}

Watcher.prototype.update = function(){
    this.run()
}

Watcher.prototype.run = function(){
    let value = this.get()
    let oldval = this.value
    if(!equalsObj(value, oldval)){
        this.value = value
        this.cb.call(this, value, oldval)
    }
}

Watcher.prototype.get = function(){
    Dep.target = this
    let value = null
    if(/\./g.test(this.exp)){
        // 说明是包含点，也就是获取对象的属性
        try{
            value = this.exp.split(".").reduce((prev, curr) => prev[curr], this.vm)
        }catch(err){
            this.vm.removeWatcher(this)
        }
    }else if(/[\[\]]/g.test(this.exp)){
        // 说明是调用了数组
        value = this.exp.replace("]", "").split("[").reduce((prev, curr) => prev[curr], this.vm)
    }else{
        // 就是常规的属性
        value = this.vm[this.exp]
    }
    Dep.target = null
    return value
}

module.exports = Watcher