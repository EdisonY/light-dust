var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
require('./db')


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var captchaRouter = require('./routes/captcha');
var registerRouter = require('./routes/register');


var app = express();
var httpServer = require('http').Server(app);
var io = require('socket.io')(httpServer);

io.on('connection',  (socket)=>{
    console.log('client connect server, ok!');
    // io.emit()方法用于向服务端发送消息，参数1表示自定义的数据名，参数2表示需要配合事件传入的参数
    io.emmit('server message', {msg:'client connect server success'});
    // socket.broadcast.emmit()表示向除了自己以外的客户端发送消息
    socket.broadcast.emmit('server message', {msg:'broadcast'});
    // 监听断开连接状态：socket的disconnect事件表示客户端与服务端断开连接
    socket.on('disconnect', ()=>{
        console.log('connect disconnect');
    });
    // 与客户端对应的接收指定的消息
    socket.on('client message', (data)=>{
        cosnole.log(data);// hi server
    });
    socket.disconnect();
});

app.use(cors({
    origin:['http://localhost:8080'],  //指定接收的地址
    methods:['GET','POST'],  //指定接收的请求类型
    alloweHeaders:['Content-Type','Authorization']  //指定header
}))


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/captcha', captchaRouter);
app.use('/register', registerRouter);

// catch 404 and forward to error handler
app.use('*',function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    if (req.method == 'OPTIONS') {
        res.send(200); // 意思是，在正常的请求之前，会发送一个验证，是否可以请求。
    }else{
        next(createError(404));
    }
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
