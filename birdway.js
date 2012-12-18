/**
 * Author: DolphinBoy
 * Email: longxinanlan@msn.cn
 * Date: 12-7-10
 * Time: 10:21
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
};

//--------模块引入(系统模块)--------
global.Module = {
  fs : require('fs'),
  path : require('path'),
  url : require('url'),
  util : require('util'),
  qs : require('querystring'),
  cp : require('child_process'),
  http : require('http'),

  sio : require('socket.io')
  //gzippo : require('gzippo')  //压缩静态文件
//    parseCookie : require('connect').utils.parseCookie,
//    MemoryStore : require('connect/middleware/session/memory')
};

//--------返回结果--------
global.RESULT = {
  status : 'status',
  failed : 'failed',
  success : 'success',
  error : 'error',
  msg : 'msg',
  command : 'command',
  ext : 'ext',
  datatime :'datatime'
};
//==================创建服务器==================
var express = require('express');
//gzippo = require('gzippo'),
//    sios  = require('socket.io-sessions'),

//    RedisStore = require('connect-redis')(express);
//    parseCookie = require('connect').utils.parseCookie,
//    MemoryStore = require('connect/lib/middleware/session/memory');

//var server = module.exports = express.createServer();
//var server = module.exports = express();
var server = express();
//创建server之前是否需要调用服务配置方法呢？
//var httpserver = module.exports = global.Module.http.createServer(server);
var httpserver = global.Module.http.createServer(server);

var io = global.Module.sio.listen(httpserver);
//==================加载配置文件==================
//var yaml = require('yaml-config');
//global.requestsinaip = yaml.readConfig('config/serverconfig.yaml');
//global.requestsinaip = yaml.readConfig('config/serverconfig.yaml', 'sinaip');
global.siteconfig = require('./config/site_config').siteconfig;
global.dbconfig = require('./config/site_config').dbconfig;
global.mailconfig = require('./config/site_config').mailconfig;
global.requestip = require('./config/requestip');
//global.dbconfig = require('./server_config').dbconfig;
//global.mailconfig = require('./server_config').mailconfig;
//global.emailsite = require('./server_config').emailsite;

//==================the end==================

// 配置服务参数
require('./config').boot(server, express);


// 模块中间路由
global.Middle = require('./middle');  //这一行代码必须要放在服务器配置函数之后，路由函数之前


// 配置路由
require('./router').boot(server);


//server.get('/', function(req, res){
//    req.redirect("./static/index.html");
//})

//server.get('*', function(){
//    console.log('get url!');
//});

//错误处理
//require('./error').boot(server, express);

httpserver.listen(8088, function(){  //这地方可以指定监听的IP吧
//  console.log("Express server listening on port %d in %s mode", server.address().port, server.settings.env);
  console.log("Express server listening on port 8088");
});

// 配置websocket
require('./websocket').boot(io);
