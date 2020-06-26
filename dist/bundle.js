/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Vue = __webpack_require__(/*! ./src/Vue */ \"./src/Vue.js\")\n// Vue的使用过程\nconst vm = new Vue({\n    el: \"#app\",\n    data: {\n        title: \"Hello, World!\",\n        desc: \"这是一条描述信息的文字...\",\n        name: \"tom\",\n        discriptioon: \"monno\",\n        input: \"satan\",\n        num: 4,\n        list: [{ name: \"tom\", age: 10 }, { name: \"jerry\", age: 5 }],\n        mongo: { name: \"mongo\", age: 12, gender: \"female\" },\n        array: [10, 20, 30],\n        msg: \"\"\n    },\n    methods: {\n        onclick(){\n            this.title = \"I LOVE U\"\n            this.desc = \"desc已经发生改变\"\n            this.mongo.name = \"mongodb\"\n            this.name = \"jerry\"\n            this.num = 10\n            // this.list = [{ name: \"tom\", age: 10 }, { name: \"jerry\", age: 5 }, { name: \"jack\", age: 30 }]\n            // this.list.push({ name: \"jack\", age: 30 })\n            // this.list.pop()\n            this.list = [{ name: \"satan\", age: 22 }]\n            this.array.pop()\n            // console.log(this.refs.msg.innerHTML = \"Heklkl\")\n        }\n    },\n    computed: {\n        sum: function(){\n            return this.num + \", Hello\"\n        }\n    },\n    watch: {\n        title: function(value, oldval){\n            // console.log(value, oldval)\n            this.msg = value\n            // this.desc = value\n        }\n    }\n})\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./src/Vue.js":
/*!********************!*\
  !*** ./src/Vue.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const initState = __webpack_require__(/*! ./init/initState */ \"./src/init/initState.js\")\nconst Watcher = __webpack_require__(/*! ./init/Watcher */ \"./src/init/Watcher.js\")\n// Vue\nfunction Vue(options){\n    if(!(this instanceof Vue)){\n        return new Vue(options)\n    }\n    // 收集所有的dep\n    this.deps = []\n\n    this.options = options\n    this.el = options.el\n\n    // 监听ref属性\n    this.refs = {}\n\n    // 绑定watch监听属性\n    this.watch = options.watch\n\n    initState(this, options)\n\n    // 对所有的元素进行绑定\n    this.compile()\n}\n\n\n// 清楚指定的watcher\nVue.prototype.removeWatcher = function(sub){\n    this.deps.forEach(dep => {\n        if(dep.subs.includes(sub)){\n            dep.subs = dep.subs.filter(_sub => _sub !== sub)\n        }\n    })\n}\n\n// 遍历所有的元素\nVue.prototype.compile = function(){\n    let dom = document.querySelector(this.el)\n    let vm = this\n    function _compile(dom){\n        let fragment = document.createDocumentFragment()\n        while(dom.childNodes.length){\n            let element = dom.firstChild\n            // console.log(element)\n            // 文本节点\n            if(element.nodeType === 3){\n                // 说明是文本节点\n                if(element.nodeValue.trim()){\n                    // 说明文本节点存在数据绑定\n                    let innerHTML = element.nodeValue\n                    element.nodeValue = innerHTML.replace(/\\$(\\w+?)\\$/g, (match, exp) => {\n                        new Watcher(vm, exp, element, innerHTML, function(value, oldval){\n                            this.element.nodeValue = this.match.replace((/\\$(\\w+?)\\$/g), (_match, _exp) => {\n                                if(_exp === this.exp){\n                                    return value\n                                }\n                                return this.vm[_exp]\n                            })\n                        })\n                        return vm[exp]\n                    })\n                }\n                fragment.appendChild(element)\n            }\n            // 常规节点\n            if(element.nodeType === 1){\n                // 说明是常规节点\n                // 判断是不是HTML可以识别的元素\n                if(isHTMLUnknownElement(element)){\n                    console.log(element)\n                    let nodeName = element.nodeName.toUpperCase()\n                    // console.log(fragment)\n                    // try{\n                    //     let fragment = Vue.components[nodeName].app\n                    //     element.parentNode.replaceChild(fragment, element)\n                    // }catch(err){\n                    //     console.log(\"error\")\n                    // }\n                }\n                // HTML可以识别的元素\n                // document.body.addEventListener()\n                element.getAttributeNames().forEach(attr => {\n                    // 事件绑定\n                    if(/^@/g.test(attr)){\n                        // 说明存在事件绑定\n                        let method = attr.replace(\"@\", \"\").trim()\n                        let exp = element.getAttribute(attr)\n                        element.addEventListener(method, vm[exp])\n                    }\n\n                    // 绑定属性\n                    if(/^:/g.test(attr)){\n                        // 说明存在属性的绑定\n                        let key = attr.replace(\":\", \"\").trim()\n                        let exp = element.getAttribute(attr)\n                        // 判断绑定的属性是不是对象的属性\n                        let value = null\n                        if(/\\./g.test(exp)){\n                            value = exp.split(\".\").reduce((prev, curr) => prev[curr], vm)\n                        }else{\n                            value = vm[exp]\n                        }\n                        // 移除attr\n                        element.removeAttribute(attr)\n                        // 添加绑定的attr\n                        // element.setAttribute(key, vm[exp])\n                        element.setAttribute(key, value)\n                        new Watcher(vm, exp, element, key, function(value, oldval){\n                            this.element.setAttribute(this.match, value)\n                        })\n                    }\n\n                    // 数据的双向绑定\n                    if(/^#/g.test(attr)){\n                        let exp = attr.replace(\"#\", \"\").trim()\n                        element.removeAttribute(attr)\n                        element.value = vm[exp]\n                        new Watcher(vm, exp, element, null, function(value, oldval){\n                            // 这里要避免重复渲染\n                            if(this.element.value !== value){\n                                this.element.value = value\n                            }\n                        })\n                        element.addEventListener(\"input\", (evt) => {\n                            let value = evt.target.value\n                            let oldval = vm[exp]\n                            if(value && value !== oldval){\n                                vm[exp] = value\n                            }\n                        })\n                    }\n\n                    // 检测是不是含有模版引擎\n                    // 检测是不是模版引擎，然后进行预处理\n                    if(/^\\$/g.test(attr)){\n                        // 说明是模版引擎\n                        // 获取模版引擎绑定的数据\n                        let exp = element.getAttribute(attr)\n                        // 消除属性\n                        element.removeAttribute(attr)\n                        // 获取渲染模版\n                        let content = element.innerHTML\n                        // 初始化成功渲染之后的内容\n                        let newcontent = \"\"\n                        let key = attr.replace(\"$\", \"\")\n                        // 判断是不是含有索引变量\n                        let valueKey = null\n                        let indexKey = null\n                        if(/\\-/g.test(key)){\n                            // 说明含有索引变量\n                            let keys = key.split(\"-\")\n                            valueKey = keys[0]\n                            indexKey = keys[1]\n                            for(let i=0,len=vm[exp].length; i<len; i++){\n                                newcontent += content.replace(new RegExp(valueKey, \"g\"), exp+\".\"+i).replace(new RegExp(\"\\\\$\"+indexKey+\"\\\\$\", \"g\"), i)\n                            }\n                        }else{\n                            // 说明没含有索引变量\n                            valueKey = key\n                            for(let i=0,len=vm[exp].length; i<len; i++){\n                                newcontent += content.replace(new RegExp(valueKey, \"g\"), exp+\".\"+i)\n                            }\n                        }\n                        element.innerHTML = newcontent\n                        let match = { content, valueKey, indexKey }\n                        new Watcher(vm, exp, element, match, function(value, oldval){\n                            let content = this.match.content\n                            let valueKey = this.match.valueKey\n                            let indexKey = this.match.indexKey\n                            let newcontent = \"\"\n                            if(indexKey){\n                                for(let i=0, len=value.length; i<len; i++){\n                                    newcontent += content.replace(new RegExp(valueKey, \"g\"), this.exp+\".\"+i).replace(new RegExp(\"\\\\$\"+indexKey+\"\\\\$\", \"g\"), i)\n                                }\n                            }else{\n                                for(let i=0, len=value.length; i<len; i++){\n                                    newcontent += content.replace(new RegExp(valueKey, \"g\"), this.exp+\".\"+i)\n                                }\n                            }\n                            // console.log(newcontent)\n                            newcontent = newcontent.replace(/\\$([\\w\\.\\[\\]]+?)\\$/g, (_match, _exp) => {\n                                return _exp.split(\".\").reduce((prev, curr) => prev[curr], this.vm)\n                            })\n                            let dom = document.createElement(\"div\")\n                            dom.innerHTML = newcontent\n                            let fragment = _compile(dom)\n                            dom = null\n                            this.element.innerHTML = \"\"\n                            this.element.appendChild(fragment)\n                        })\n                    }\n\n                    // 检测是不是绑定了ref属性\n                    if(/^ref/g.test(attr)){\n                        // 说明是绑定了ref属性，想通过ref属性获取dom\n                        let key = element.getAttribute(attr)\n                        // 隐藏或者消除attr\n                        element.removeAttribute(attr)\n                        vm.refs[key] = element\n                    }\n                })\n                // 判断是不是含有子元素\n                if(element.children.length){\n                    // 说明含有子元素\n                    // 预处理完之后对接着进行属性绑定\n                    let f = _compile(element)\n                    element.appendChild(f)\n                    fragment.appendChild(element)\n                }else{\n                    // 说明不含有子元素，就是一个常规节点\n                    // 判断文本是不是含有data属性\n                    // console.log(element.innerHTML)\n                    if(element.innerHTML.match(/\\$([\\w\\.\\[\\]]+?)\\$/g)){\n                        let innerHTML = element.innerHTML\n                        element.innerHTML = innerHTML.replace(/\\$([\\w\\.\\[\\]]+?)\\$/g, (match, exp) => {\n                            new Watcher(vm, exp, element, innerHTML, function(value, oldval){\n                                this.element.innerHTML = this.match.replace((/\\$([\\w\\.\\[\\]]+?)\\$/g), (_match, _exp) => {\n                                    if(_exp === this.exp){\n                                        return value\n                                    }\n                                    // 判断是不是多级属性\n                                    if(/\\./g.test(_exp)){\n                                        try{\n                                            return _exp.split(\".\").reduce((prev, curr) => prev[curr], this.vm)\n                                        }catch(err){\n                                            this.vm.removeWatcher(this)\n                                        }\n                                    }\n\n                                    // 判断是不是调用数组\n                                    if(/[\\[\\]]/g.test(_exp)){\n                                        return _exp.replace(\"]\", \"\").split(\"[\").reduce((prev, curr) => prev[curr], this.vm)\n                                    }\n                                    // 一级属性直接返回\n                                    return this.vm[_exp]\n                                })\n                            })\n                            // 判断是不是多级属性\n                            if(/\\./g.test(exp)){\n                                return exp.split(\".\").reduce((prev, curr) => prev[curr], vm)\n                            }\n                            // 判断是不是调用数组\n                            if(/[\\[\\]]/g.test(exp)){\n                                return exp.replace(\"]\", \"\").split(\"[\").reduce((prev, curr) => prev[curr], vm)\n                            }\n                            // 是一级属性直接返回\n                            return vm[exp]\n                        })\n                    }\n                    fragment.appendChild(element)\n                }\n            }\n        }\n        return fragment\n    }\n    let fragment = _compile(dom)\n    dom.appendChild(fragment)\n    // \n    this.fragment = fragment\n    this.app = dom\n}\n\n// 创建全局组件\nVue.components = {}\nVue.Component = function(componentName, options){\n    let vm = new Vue(options)\n    this.components[componentName.toUpperCase()] = vm\n}\n\n\n// [object HTMLUnknownElement]\nfunction isHTMLUnknownElement(pms){\n    return Object.prototype.toString.call(pms) === \"[object HTMLUnknownElement]\"\n}\n\n\nmodule.exports = Vue\n\n//# sourceURL=webpack:///./src/Vue.js?");

/***/ }),

/***/ "./src/init/Dep.js":
/*!*************************!*\
  !*** ./src/init/Dep.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 创建一个订阅器\nfunction Dep(){\n    // 收集所有的订阅者\n    this.subs = []\n}\n// 收集订阅者\nDep.prototype.addSub = function(sub){\n    // 这一步真的很关键，为了避免添加重复的订阅者\n    if(!this.subs.includes(sub)){\n        this.subs.push(sub)\n    }\n}\n// 通知所有的订阅者进行更新\nDep.prototype.notify = function(){\n    this.subs.forEach(sub => {\n        sub.update()\n    })\n}\n\nmodule.exports = Dep\n\n//# sourceURL=webpack:///./src/init/Dep.js?");

/***/ }),

/***/ "./src/init/Watcher.js":
/*!*****************************!*\
  !*** ./src/init/Watcher.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Dep = __webpack_require__(/*! ./Dep */ \"./src/init/Dep.js\")\n\n/**\n * 判断此对象是否是Object类型\n * @param {Object} obj  \n */\nfunction  isObject(obj){\n    return Object.prototype.toString.call(obj)==='[object Object]';\n};\n/**\n * 判断此类型是否是Array类型\n * @param {Array} arr \n */\nfunction isArray(arr){\n    return Object.prototype.toString.call(arr)==='[object Array]';\n};\n/**\n *  深度比较两个对象是否相同\n * @param {Object} oldData \n * @param {Object} newData \n */\nfunction equalsObj(oldData,newData){\n    // 类型为基本类型时,如果相同,则返回true\n    if(oldData === newData) return true;\n    if(isObject(oldData)&&isObject(newData)&&Object.keys(oldData).length === Object.keys(newData).length){\n        // 类型为对象并且元素个数相同\n\n        // 遍历所有对象中所有属性,判断元素是否相同\n        for (const key in oldData) {\n            if (newData.hasOwnProperty(key)) {\n                if(!equalsObj(oldData[key],newData[key]))\n                    // 对象中具有不相同属性 返回false\n                    return false;\n            }\n        }\n    }else if(isArray(oldData)&&isArray(oldData)&&oldData.length===newData.length){\n        // 类型为数组并且数组长度相同\n\n        for (let i = 0,length=oldData.length; i <length; i++) {\n            if(!equalsObj(oldData[i],newData[i]))\n            // 如果数组元素中具有不相同元素,返回false\n            return false;\n        }\n    }else{\n        // 其它类型,均返回false\n        return false;\n    }\n    \n    // 走到这里,说明数组或者对象中所有元素都相同,返回true\n    return true;\n};\n// Watcher\nfunction Watcher(vm, exp, element, match, cb){\n    this.vm = vm\n    this.exp = exp\n    this.element = element\n    this.match = match\n    this.cb = cb\n    let value = this.get()\n    this.value = isArray(value) ? [...value] : value\n}\n\nWatcher.prototype.update = function(){\n    this.run()\n}\n\nWatcher.prototype.run = function(){\n    let value = this.get()\n    let oldval = this.value\n    if(!equalsObj(value, oldval)){\n        this.value = value\n        this.cb.call(this, value, oldval)\n    }\n}\n\nWatcher.prototype.get = function(){\n    Dep.target = this\n    let value = null\n    if(/\\./g.test(this.exp)){\n        // 说明是包含点，也就是获取对象的属性\n        try{\n            value = this.exp.split(\".\").reduce((prev, curr) => prev[curr], this.vm)\n        }catch(err){\n            this.vm.removeWatcher(this)\n        }\n    }else if(/[\\[\\]]/g.test(this.exp)){\n        // 说明是调用了数组\n        value = this.exp.replace(\"]\", \"\").split(\"[\").reduce((prev, curr) => prev[curr], this.vm)\n    }else{\n        // 就是常规的属性\n        value = this.vm[this.exp]\n    }\n    Dep.target = null\n    return value\n}\n\nmodule.exports = Watcher\n\n//# sourceURL=webpack:///./src/init/Watcher.js?");

/***/ }),

/***/ "./src/init/initArray.js":
/*!*******************************!*\
  !*** ./src/init/initArray.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 监听数组\nfunction initArray(vm){\n    // 对数组进行监听\n    // 对数组对变动进行监听\n    vm.arrayMethods = Object.create(Array.prototype)\n    vm.ArrayNewProto = []\n    Object.getOwnPropertyNames(Array.prototype).forEach(key => {\n        if(typeof vm.arrayMethods[key] === \"function\"){\n            // let vm = this\n            Object.defineProperty(vm.ArrayNewProto, key, {\n                enumerable: false, // 默认是不会枚举的，为了保持数组一样对性质\n                configurable: false, // 不可以重新配置\n                get(){\n                    return function(){\n                        // console.log(\"我监听到了数组触发\"+key+\"事件\")\n                        let result = vm.arrayMethods[key].apply(vm, arguments)\n                        vm.deps.forEach(dep => {\n                            dep.notify()\n                        })\n                        return result\n                    }\n                }\n            })\n        }else{\n            vm.ArrayNewProto[key] = vm.arrayMethods[key]\n        }\n    })\n}\n\nmodule.exports = initArray\n\n//# sourceURL=webpack:///./src/init/initArray.js?");

/***/ }),

/***/ "./src/init/initComputed.js":
/*!**********************************!*\
  !*** ./src/init/initComputed.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 处理所有的计算属性\nfunction initComputed(vm, options){\n    // 绑定所有计算属性\n    let computed = vm.computed = options.computed\n    if(computed){\n        Object.keys(computed).forEach(cpt => {\n            bindComputed(computed, cpt, computed[cpt].bind(vm))\n        })\n        Object.keys(computed).forEach(cpt => {\n            Object.defineProperty(vm, cpt, {\n                enumerable: true, // 可枚举\n                configurable: false, // 不能再define\n                get(){\n                    return computed[cpt]\n                }\n            })\n        })\n    }\n}\n\n// 绑定计算属性\nfunction bindComputed(computed, cpt, fn){\n    Object.defineProperty(computed, cpt, {\n        enumerable: true, // 可枚举\n        configurable: false, // 不能再define\n        get(){\n            return fn()\n        }\n    })\n}\n\nmodule.exports = initComputed\n\n//# sourceURL=webpack:///./src/init/initComputed.js?");

/***/ }),

/***/ "./src/init/initData.js":
/*!******************************!*\
  !*** ./src/init/initData.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Dep = __webpack_require__(/*! ./Dep */ \"./src/init/Dep.js\")\n// 对data里边对数据进行绑定\nfunction initData(vm, options){\n    // 对数据进行绑定\n    let data = vm.data = options.data\n    if(data){\n        oberver.call(vm, data)\n        // 绑定所有data属性\n        Object.keys(data).forEach(key => {\n            Object.defineProperty(vm, key, {\n                enumerable: true, // 可枚举\n                configurable: true, // 不能再define\n                get: function(){\n                    return data[key]\n                },\n                set: function(newVal){\n                    data[key] = newVal\n                }\n            })\n        })\n    }\n}\n\n// 监听所有的数据\nfunction oberver(data){\n    // 如果data不存在或者data不是对象立即返回\n    if(!data || typeof data !== \"object\"){\n        return\n    }\n    Object.keys(data).forEach(key => {\n        // 判断是不是数组\n        if(Array.isArray(data[key])){\n            // 说明是数组，要对数组变动进行监听\n            data[key].__proto__ = this.ArrayNewProto\n        }\n        bindProperty.call(this, data, key, data[key])\n    })\n}\n// 绑定所有的数据\nfunction bindProperty(data, key, val){\n    let dep = new Dep()\n    let vm = this\n    oberver.call(this, val) // 这里是监听子属性\n    if(Array.isArray(val)){\n        this.deps.push(dep)\n    }\n    Object.defineProperty(data, key, {\n        enumerable: true, // 可枚举\n        configurable: true, // 不能再define\n        get: function(){\n            Dep.target && dep.addSub(Dep.target)\n            return val\n        },\n        set: function(newVal){\n            // 判断数据是否会进行更新\n            if(newVal !== val){\n                // 说明数据发生了变化\n                // 执行watch的监听函数\n                if(vm.watch.hasOwnProperty(key)){\n                    // 触发相应的watch函数\n                    vm.watch[key].call(vm, newVal, val)\n                }\n                // 将新的值newVal赋予val\n                val = newVal\n                // 这里要通知进行更新\n                dep.notify()\n            }\n        }\n    })\n}\n\nmodule.exports = initData\n\n//# sourceURL=webpack:///./src/init/initData.js?");

/***/ }),

/***/ "./src/init/initMethods.js":
/*!*********************************!*\
  !*** ./src/init/initMethods.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 初始化所有的方法\nfunction initMethods(vm, options){\n    // 绑定所有methods事件\n    let methods = vm.methods = options.methods\n    if(methods){\n        Object.keys(methods).forEach(method => {\n            vm[method] = methods[method] = methods[method].bind(vm)\n        })\n    }\n}\n\nmodule.exports = initMethods\n\n//# sourceURL=webpack:///./src/init/initMethods.js?");

/***/ }),

/***/ "./src/init/initState.js":
/*!*******************************!*\
  !*** ./src/init/initState.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 初始化所有的属性\nconst initArray = __webpack_require__(/*! ./initArray */ \"./src/init/initArray.js\")\nconst initData = __webpack_require__(/*! ./initData */ \"./src/init/initData.js\")\nconst initMethods = __webpack_require__(/*! ./initMethods */ \"./src/init/initMethods.js\")\nconst initComputed = __webpack_require__(/*! ./initComputed */ \"./src/init/initComputed.js\")\n// 对所有属性进行绑定\nfunction initState(vm, options){\n    // 监听数组\n    initArray(vm)\n    // 对数据进行双向绑定\n    initData(vm, options)\n    // 绑定所有的方法\n    initMethods(vm, options)\n    // 监听所有的计算属性\n    initComputed(vm, options)\n}\n\nmodule.exports = initState\n\n//# sourceURL=webpack:///./src/init/initState.js?");

/***/ })

/******/ });