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
};

//--------模块引入(系统模块)--------
global.Module = {
  sio : require('socket.io'),
  fs : require('fs'),
  path : require('path'),
  url : require('url'),
  util : require('util'),
  qs : require('querystring'),
  cp : require('child_process')
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
var server = module.exports = express();

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

//配置服务参数
require('./config').boot(server, express);


//模块中间路由
global.Middle = require('./middle');


// Routes
require('./router').boot(server);

//server.get('/', function(req, res){
//    req.redirect("./static/index.html");
//})

//server.get('*', function(){
//    console.log('get url!');
//});

//错误处理
//require('./error').boot(server, express);

server.listen(8088, function(){
//  console.log("Express server listening on port %d in %s mode", server.address().port, server.settings.env);
  console.log("Express server listening on port 8088");
});
