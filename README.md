# $Vue.js
根据Vue的原理造轮子
# 数据渲染
```javascript
// 创建一个实例
const vm = new Vue({
  el: "#app",
  data: {
    title: "Hello, World"
  }
})
```
```html
// html文件
<h1>$title</h1>

// 渲染成
<h1>Hello, World</h1>
```
```javascript
// $data数据 会渲染成相应的值，和Vue里面的{{ data数据 }}是一样的
```
# 绑定属性
```javascript
// 创建一个实例
const vm = new Vue({
  el: "#app",
  data: {
    title: "Hello, World",
    className: "menu"
  }
})
```
```html
// html文件
<h1 :class="className">$title</h1>

// 渲染成
<h1 class="menu">Hello, World</h1>
```
```javascript
// :属性=data数据 会将某个dom属性和data数据绑定起来，和Vue里边的数据绑定是一样的
```
# 数据的双向绑定
```javascript
// 创建一个实例
const vm = new Vue({
  el: "#app",
  data: {
    msg: "Hello"
  }
})
```
```html
// html文件
<input type="text" #msg name="name" id="name">
<p>$msg</p>

// 类似于Vue里面的v-model，像这样:
<input type="text" v-model="msg" name="name" id="name">
<p>{{ msg }}</p>
```
```javascript
// #data数据 会对data数据进行双向绑定，一般用在input标签，类似于Vue里边的v-model
```
# 事件监听
```javascript
// 创建一个实例
const vm = new Vue({
  el: "#app",
  data: {
    msg: "Hello"
  },
  methods: {
    onclick(){
      this.msg = "Today is Good Day!"
    }
  }
})
```
```html
// html文件
<h1>$msg</h1>
<button @click="onclick">点击执行click事件</button>

// 没有点击之前是这样：
<h1>Hello</h1>
// 点击之后是这样：
<h1>Today is Good Day!</h1>
```
```javascript
// 和Vue事件绑定机制类似
```
# 模版引擎
```javascript
// 创建一个实例
const vm = new Vue({
  el: "#app",
  data: {
    list: [
            {
                name: "tom",
                age: 12,
                hobby: "Fishing"
            },
            {
                name: "jerry",
                age: 10,
                hobby: "Watch Movie"
            }
        ]
  }
})
```
```html
// html文件
<ul $item-index="list">
    <li>$item.name-->$item.age-->$item.hobby-->$index</li>
</ul>

// 渲染成
<ul>
    <li>tom-->12-->Fishing-->0</li>
    <li>jerry-->10-->Watch Movie-->1</li>
</ul>

// 或者不需要索引：
// html文件
<ul $item="list">
    <li>$item.name-->$item.age-->$item.hobby</li>
</ul>

// 渲染成
<ul>
    <li>tom-->12-->Fishing</li>
    <li>jerry-->10-->Watch Movie</li>
</ul>
```
```javascript
// 和Vue里边的v-for类似
// 使用的方法就是 $迭代对象-索引="data数据"，就像如上例子的$item-index="list", item就是迭代对象，index就是索引，list就是data数据
```
