const Vue = require("./src/Vue")
// Vue的使用过程
const vm = new Vue({
    el: "#app",
    data: {
        title: "Hello, World!",
        price: 30,
        msg: ""
    },
    methods: {
        onclick(){
            this.price = 100
        }
    },
    computed: {
        sum: function(){
            return this.price + 20
        }
    },
    watch: {
        title: function(value, oldval){
            this.msg = value
        }
    }
})
