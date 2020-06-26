const initState = require("./init/initState")
const Watcher = require("./init/Watcher")
// Vue
function Vue(options){
    if(!(this instanceof Vue)){
        return new Vue(options)
    }
    // 收集所有的dep
    this.deps = []

    this.options = options
    this.el = options.el

    // 监听ref属性
    this.refs = {}

    // 绑定watch监听属性
    this.watch = options.watch

    initState(this, options)

    // 对所有的元素进行绑定
    this.compile()
}


// 清楚指定的watcher
Vue.prototype.removeWatcher = function(sub){
    this.deps.forEach(dep => {
        if(dep.subs.includes(sub)){
            dep.subs = dep.subs.filter(_sub => _sub !== sub)
        }
    })
}

// 遍历所有的元素
Vue.prototype.compile = function(){
    let dom = document.querySelector(this.el)
    let vm = this
    function _compile(dom){
        let fragment = document.createDocumentFragment()
        while(dom.childNodes.length){
            let element = dom.firstChild
            // console.log(element)
            // 文本节点
            if(element.nodeType === 3){
                // 说明是文本节点
                if(element.nodeValue.trim()){
                    // 说明文本节点存在数据绑定
                    let innerHTML = element.nodeValue
                    element.nodeValue = innerHTML.replace(/\$(\w+?)\$/g, (match, exp) => {
                        new Watcher(vm, exp, element, innerHTML, function(value, oldval){
                            this.element.nodeValue = this.match.replace((/\$(\w+?)\$/g), (_match, _exp) => {
                                if(_exp === this.exp){
                                    return value
                                }
                                return this.vm[_exp]
                            })
                        })
                        return vm[exp]
                    })
                }
                fragment.appendChild(element)
            }
            // 常规节点
            if(element.nodeType === 1){
                // 说明是常规节点
                // 判断是不是HTML可以识别的元素
                if(isHTMLUnknownElement(element)){
                    console.log(element)
                    let nodeName = element.nodeName.toUpperCase()
                    // console.log(fragment)
                    // try{
                    //     let fragment = Vue.components[nodeName].app
                    //     element.parentNode.replaceChild(fragment, element)
                    // }catch(err){
                    //     console.log("error")
                    // }
                }
                // HTML可以识别的元素
                // document.body.addEventListener()
                element.getAttributeNames().forEach(attr => {
                    // 事件绑定
                    if(/^@/g.test(attr)){
                        // 说明存在事件绑定
                        let method = attr.replace("@", "").trim()
                        let exp = element.getAttribute(attr)
                        element.addEventListener(method, vm[exp])
                    }

                    // 绑定属性
                    if(/^:/g.test(attr)){
                        // 说明存在属性的绑定
                        let key = attr.replace(":", "").trim()
                        let exp = element.getAttribute(attr)
                        // 判断绑定的属性是不是对象的属性
                        let value = null
                        if(/\./g.test(exp)){
                            value = exp.split(".").reduce((prev, curr) => prev[curr], vm)
                        }else{
                            value = vm[exp]
                        }
                        // 移除attr
                        element.removeAttribute(attr)
                        // 添加绑定的attr
                        // element.setAttribute(key, vm[exp])
                        element.setAttribute(key, value)
                        new Watcher(vm, exp, element, key, function(value, oldval){
                            this.element.setAttribute(this.match, value)
                        })
                    }

                    // 数据的双向绑定
                    if(/^#/g.test(attr)){
                        let exp = attr.replace("#", "").trim()
                        element.removeAttribute(attr)
                        element.value = vm[exp]
                        new Watcher(vm, exp, element, null, function(value, oldval){
                            // 这里要避免重复渲染
                            if(this.element.value !== value){
                                this.element.value = value
                            }
                        })
                        element.addEventListener("input", (evt) => {
                            let value = evt.target.value
                            let oldval = vm[exp]
                            if(value && value !== oldval){
                                vm[exp] = value
                            }
                        })
                    }

                    // 检测是不是含有模版引擎
                    // 检测是不是模版引擎，然后进行预处理
                    if(/^\$/g.test(attr)){
                        // 说明是模版引擎
                        // 获取模版引擎绑定的数据
                        let exp = element.getAttribute(attr)
                        // 消除属性
                        element.removeAttribute(attr)
                        // 获取渲染模版
                        let content = element.innerHTML
                        // 初始化成功渲染之后的内容
                        let newcontent = ""
                        let key = attr.replace("$", "")
                        // 判断是不是含有索引变量
                        let valueKey = null
                        let indexKey = null
                        if(/\-/g.test(key)){
                            // 说明含有索引变量
                            let keys = key.split("-")
                            valueKey = keys[0]
                            indexKey = keys[1]
                            for(let i=0,len=vm[exp].length; i<len; i++){
                                newcontent += content.replace(new RegExp(valueKey, "g"), exp+"."+i).replace(new RegExp("\\$"+indexKey+"\\$", "g"), i)
                            }
                        }else{
                            // 说明没含有索引变量
                            valueKey = key
                            for(let i=0,len=vm[exp].length; i<len; i++){
                                newcontent += content.replace(new RegExp(valueKey, "g"), exp+"."+i)
                            }
                        }
                        element.innerHTML = newcontent
                        let match = { content, valueKey, indexKey }
                        new Watcher(vm, exp, element, match, function(value, oldval){
                            let content = this.match.content
                            let valueKey = this.match.valueKey
                            let indexKey = this.match.indexKey
                            let newcontent = ""
                            if(indexKey){
                                for(let i=0, len=value.length; i<len; i++){
                                    newcontent += content.replace(new RegExp(valueKey, "g"), this.exp+"."+i).replace(new RegExp("\\$"+indexKey+"\\$", "g"), i)
                                }
                            }else{
                                for(let i=0, len=value.length; i<len; i++){
                                    newcontent += content.replace(new RegExp(valueKey, "g"), this.exp+"."+i)
                                }
                            }
                            // console.log(newcontent)
                            newcontent = newcontent.replace(/\$([\w\.\[\]]+?)\$/g, (_match, _exp) => {
                                return _exp.split(".").reduce((prev, curr) => prev[curr], this.vm)
                            })
                            let dom = document.createElement("div")
                            dom.innerHTML = newcontent
                            let fragment = _compile(dom)
                            dom = null
                            this.element.innerHTML = ""
                            this.element.appendChild(fragment)
                        })
                    }

                    // 检测是不是绑定了ref属性
                    if(/^ref/g.test(attr)){
                        // 说明是绑定了ref属性，想通过ref属性获取dom
                        let key = element.getAttribute(attr)
                        // 隐藏或者消除attr
                        element.removeAttribute(attr)
                        vm.refs[key] = element
                    }
                })
                // 判断是不是含有子元素
                if(element.children.length){
                    // 说明含有子元素
                    // 预处理完之后对接着进行属性绑定
                    let f = _compile(element)
                    element.appendChild(f)
                    fragment.appendChild(element)
                }else{
                    // 说明不含有子元素，就是一个常规节点
                    // 判断文本是不是含有data属性
                    // console.log(element.innerHTML)
                    if(element.innerHTML.match(/\$([\w\.\[\]]+?)\$/g)){
                        let innerHTML = element.innerHTML
                        element.innerHTML = innerHTML.replace(/\$([\w\.\[\]]+?)\$/g, (match, exp) => {
                            new Watcher(vm, exp, element, innerHTML, function(value, oldval){
                                this.element.innerHTML = this.match.replace((/\$([\w\.\[\]]+?)\$/g), (_match, _exp) => {
                                    if(_exp === this.exp){
                                        return value
                                    }
                                    // 判断是不是多级属性
                                    if(/\./g.test(_exp)){
                                        try{
                                            return _exp.split(".").reduce((prev, curr) => prev[curr], this.vm)
                                        }catch(err){
                                            this.vm.removeWatcher(this)
                                        }
                                    }

                                    // 判断是不是调用数组
                                    if(/[\[\]]/g.test(_exp)){
                                        return _exp.replace("]", "").split("[").reduce((prev, curr) => prev[curr], this.vm)
                                    }
                                    // 一级属性直接返回
                                    return this.vm[_exp]
                                })
                            })
                            // 判断是不是多级属性
                            if(/\./g.test(exp)){
                                return exp.split(".").reduce((prev, curr) => prev[curr], vm)
                            }
                            // 判断是不是调用数组
                            if(/[\[\]]/g.test(exp)){
                                return exp.replace("]", "").split("[").reduce((prev, curr) => prev[curr], vm)
                            }
                            // 是一级属性直接返回
                            return vm[exp]
                        })
                    }
                    fragment.appendChild(element)
                }
            }
        }
        return fragment
    }
    let fragment = _compile(dom)
    dom.appendChild(fragment)
    // 
    this.fragment = fragment
    this.app = dom
}

// 创建全局组件
Vue.components = {}
Vue.Component = function(componentName, options){
    let vm = new Vue(options)
    this.components[componentName.toUpperCase()] = vm
}


// [object HTMLUnknownElement]
function isHTMLUnknownElement(pms){
    return Object.prototype.toString.call(pms) === "[object HTMLUnknownElement]"
}


module.exports = Vue