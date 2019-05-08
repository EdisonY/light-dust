var mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/list')

var db = mongoose.connection;
//定义用户数据结构
var userSchema = new mongoose.Schema({
    name : { type:String },
    pwd : { type:String },
    time : {type: Date, default: Date.now}
})
var user = db.model('user',userSchema)

db.on('error', function callback() { //监听是否有异常
    console.log("Connection error");
});
db.once('open', function callback() { //监听一次打开
    //在这里创建你的模式和模型
    console.log('connected!');
});

module.exports = mongoose;
