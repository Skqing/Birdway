/**
 * 主程序入口
 * 注意加载的顺序，不能随便更改
 * 加载配置文件、定义全局变量，初始化控制器，自定义错误处理
 */



//==================定义全局变量==================
global.BASE_DIR = __dirname;
global.server   = global.BASE_DIR + 'server';
global.CON      = global.server + 'ctrl';
global.CORE     = global.server + 'core';
global.MODEL    = global.server + 'model';
global.CONF     = global.BASE_DIR + 'config';
global.LOG      = global.BASE_DIR + 'log';
global.PUBLIC   = global.BASE_DIR + '/public';
global.VIEW     = global.BASE_DIR + 'view';



//==================模块引入==================
global.Module = {
    express : require('express'),
    sio : require('socket.io'),
    fs : require('fs'),
    path : require('path'),
    url : require('url'),
    sys : require('util'),
    gzippo : require('gzippo')  //压缩静态文件
//    parseCookie : require('connect').utils.parseCookie,
//    MemoryStore : require('connect/middleware/session/memory')
}


var express = require('express');
var routes = require('./app/routes'),
    sio = require('socket.io'),
    gzippo = require('gzippo'),
//    sios  = require('socket.io-sessions'),
    MongoStore = require('connect-mongo')(express);
//    RedisStore = require('connect-redis')(express);
//    parseCookie = require('connect').utils.parseCookie,
//    MemoryStore = require('connect/lib/middleware/session/memory');

//==================加载配置文件==================
//var read_config_file = require('yaml-config');
//var mongodbconfig = module.exports = read_config_file.readConfig('config/config.yaml');
/**
 * 用户SESSION
 *
 */
//var usersWS = {},
//    storeMemory = new MemoryStore({reapInterval: 60000 * 10});//session store



var server = module.exports = express.createServer();

var sessionStore = new MongoStore({url:'mongodb://localhost/birdway', collection:'sessions'});

// Configuration
server.configure(function(){  //中间件的顺序是不能随意改变的
  server.set('views', __dirname + '/views');
  server.set('view engine', 'jade');

  server.use(express.bodyParser());  //解析表单数据的中间件
  server.use(express.methodOverride());
  server.use(express.cookieParser());

//  server.use(express.session({ secret: 'your secret here', store: new RedisStore }));
//  server.use(express.session({ secret: 'your secret here', store: storeMemory }));
  server.use(express.session({
      secret: 'sid',
      store: sessionStore }));
//  server.use(express.session({secret: 'secret', key: 'express.sid'}));
  server.use(server.router);
//  server.use(express.static(__dirname + '/public'));
  server.use(express.static(global.PUBLIC));
  server.use(express.favicon());
});

server.configure('development', function(){
  server.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

server.configure('production', function(){
  server.use(express.errorHandler());
  server.use(gzippo.staticGzip(__dirname + '/public'));  //压缩静态文件
  //server.enable('view cache')  // view cache is enabled by default in production mode
});

// Routes

server.get('/', routes.index);
//server.get('/', function(req, res){
//    req.redirect("static/index.html");
//})

//server.get('*', function(){
//    console.log('get url!');
//});

server.error(function(err, req, res, next){
    if (err instanceof NotFound) {
//        res.render('404.jade');
        routes.notfound;
    } else {
        next(err);
    }
});


//=================配置socket.io=========================
/**
 * 配置socket.io
 *
 */
var socket = sio.listen(server);
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
