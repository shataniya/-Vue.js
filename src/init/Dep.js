// 创建一个订阅器
function Dep(){
    // 收集所有的订阅者
    this.subs = []
}
// 收集订阅者
Dep.prototype.addSub = function(sub){
    // 这一步真的很关键，为了避免添加重复的订阅者
    if(!this.subs.includes(sub)){
        this.subs.push(sub)
    }
}
// 通知所有的订阅者进行更新
Dep.prototype.notify = function(){
    this.subs.forEach(sub => {
        sub.update()
    })
}

module.exports = Dep