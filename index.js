const Vue = require("./src/Vue")
// Vue的使用过程
const vm = new Vue({
    el: "#app",
    data: {
        title: "Hello, World!",
        desc: "这是一条描述信息的文字...",
        name: "tom",
        discriptioon: "monno",
        input: "satan",
        num: 4,
        list: [{ name: "tom", age: 10 }, { name: "jerry", age: 5 }],
        mongo: { name: "mongo", age: 12, gender: "female" },
        array: [10, 20, 30],
        msg: "",
        information: "今天要上传照片。。。"
    },
    methods: {
        onclick(){
            this.information = "今天不上传照片。。"
        }
    },
    computed: {
        sum: function(){
            return this.num + ", Hello"
        }
    },
    watch: {
        title: function(value, oldval){
            // console.log(value, oldval)
            this.msg = value
            // this.desc = value
        }
    }
})
