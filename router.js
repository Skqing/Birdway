/*!
 * birdway - route.js
 * Copyright(c) 2012 dolphinboy <dolphinboyo@gmail.com>
 * LGPL Licensed
 */

/**
 * Module dependencies.
 */
var site = require('./src/action/system/site_action');
var user = require('./src/action/security/user_action');
var system = require('./src/action/system/system_action');

var sensor = require('./src/action/network/sensor_action');

module.exports.boot = function(server){
    bootRouterServer(server);
};

function bootRouterServer(server) {
  // home page
  server.get('/', site.index);
  server.get('/security/user_login', user.login);  //用户登录
  server.post('/security/user_login', user.login);
  server.get('/security/user_regist', user.regist);
  server.post('/security/user_regist', user.regist);  //用户注册
  server.get('/security/my_info', user.myInfor);  //显示个人信息

  server.get('/system/verifycode', system.verifycode);


//    server.get('/gps/:uin/:lo/:la/:el', gpsserver.gps);



//    server.all('/user/:id/:op?', function(req, res, next){
//        req.user = users[req.params.id];
//        if (req.user) {
//            next();
//        } else {
//            next(new Error('cannot find user ' + req.params.id));
//        }
//    });

//    server.get('*', function(req, res){
//        console.log(req.url+' is called!');
//        res.send('what???', 404);
//    });

  //测试版使用此路由来上传数据
  server.get('/mobile/upload', sensor.uploadByGet);
  server.get('/mobile/userid', sensor.getUserId);

  server.get('/data/show', sensor.showSensorData);
};
