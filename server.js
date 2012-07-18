/**
 * 主程序入口
 * 注意加载的顺序，不能随便更改
 * 加载配置文件、定义全局变量，初始化控制器，自定义错误处理
 */

//==================定义全局静态变量==================
global.BASEDIR = __dirname;
global.STATIC = {
    PUBLIC : global.BASEDIR + '/public',
    VIEW :  global.BASEDIR + '/view',
    LOG : global.BASEDIR + '/log'
}

//==================模块引入(系统模块)==================
global.Module = {
    express : require('express'),
    sio : require('socket.io'),
    fs : require('fs'),
    path : require('path'),
    url : require('url'),
    util : require('util'),
    qs : require('querystring'),
    exec : require('child_process').exec
    //gzippo : require('gzippo')  //压缩静态文件
//    parseCookie : require('connect').utils.parseCookie,
//    MemoryStore : require('connect/middleware/session/memory')
}

//==================创建服务器==================
var express = require('express'),
//gzippo = require('gzippo'),
//    sios  = require('socket.io-sessions'),
    MongoStore = require('connect-mongo')(express);
//    RedisStore = require('connect-redis')(express);
//    parseCookie = require('connect').utils.parseCookie,
//    MemoryStore = require('connect/lib/middleware/session/memory');


var server = module.exports = express.createServer();
//配置服务参数
require('./config').boot(server);

//==================加载配置文件==================
//var read_config_file = require('yaml-config');
//var mongodbconfig = module.exports = read_config_file.readConfig('config/config.yaml');

global.dbconfig = require('./config').dbconfig;
global.globalconfig = require('./config').globalconfig;
global.mailconfig = require('./config').mailconfig;
global.emailsite = require('./config').emailsite;
//==================the end==================

//模块中间路由
global.Middle = require('./middle');


var sessionStore = new MongoStore({url:global.dbconfig.url, collection:global.dbconfig.collection});

// Configuration
server.configure(function(){  //中间件的顺序是不能随意改变的
//  server.set('views', __dirname + '/views');
//  server.set('view engine', 'jade');
    //设置模版引擎
    var viewsRoot = global.Module.path.join(__dirname, 'views');
    server.set('view engine', 'html');
    server.set('views', viewsRoot);
    server.register('.html', require('ejs'));

    server.set('view options', {layout: false});
//  server.set('view cache', true); //上线开启模板缓存

    //解析表单数据的中间件
    server.use(express.bodyParser());  //上传到默认的临时目录/tmp
//  server.use(express.bodyParser({uploadDir:'./uploads'}));//上传到指定的临时目录/uploads
    server.use(express.methodOverride());
    server.use(express.cookieParser());

//  server.use(express.session({ secret: 'your secret here', store: new RedisStore }));
//  server.use(express.session({ secret: 'your secret here', store: storeMemory }));
  server.use(express.session({
      secret: 'sid',
      store: sessionStore }));
//  server.use(express.session({secret: 'secret', key: 'express.sid'}));
//  server.use(server.router);  //我们使用自己的router
//  var oneYear = 31557600000;
  var maxAge = 3600000 * 24 * 30;
  server.use(express.static(global.STATIC.PUBLIC, { maxAge: maxAge }));
  server.use(express.favicon());
});

server.configure('development', function(){
  server.use(express.logger());
  server.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

server.configure('production', function(){
  server.use(express.logger());
  server.use(express.errorHandler());
//  server.use(gzippo.staticGzip(global.STATIC.PUBLIC));  //压缩静态文件
//  server.use(gzippo.compress());
//  server.enable('view cache')  // view cache is enabled by default in production mode
});


// Routes
require('./router').boot(server);
//server.get('/', routes.index);

//server.get('/pro', routes.properties);

//server.get('/', function(req, res){
//    req.redirect("./static/index.html");
//})

//server.get('*', function(){
//    console.log('get url!');
//});


//错误处理
//require('./error').boot(server);



//=================配置socket.io=========================
/**
 * 配置socket.io
 */
var socket = global.Module.sio.listen(server);
//设置session
socket.set('authorization', function(handshakeData, callback){
    // 通过客户端的cookie字符串来获取其session数据
    handshakeData.cookie = parseCookie(handshakeData.headers.cookie)
    var connect_sid = handshakeData.cookie['sid'];
    if (connect_sid) {
        storeMemory.get(connect_sid, function(error, session){
            if (error) {
                // if we cannot grab a session, turn down the connection
                callback(error.message, false);
            }
            else {
                // save the session data and accept the connection
                handshakeData.session = session;
                callback(null, true);
            }
        });
    }
    else {
        callback('nosession');
    }
});

//var socket = sios.enable({
//    socket: sio.listen(app),         // Socket.IO listener
//    store:  sessionStore,                // Your session store
//    parser: express.cookieParser()  // Cookie parser
//});

server.listen(8088, function(){
  console.log("Express server listening on port %d in %s mode", server.address().port, server.settings.env);
});
