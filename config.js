/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 12-6-7
 * Time: 上午8:52
 * 读取配置文件对服务器进行配置
 */

var myutils = require('./src/utils');


exports.boot = function(server, express){
    bootConfigServer(server, express);
}
exports.dbconfig = (function(){
    var realpath =  __dirname + '/config/' + global.Module.url.parse('mongodb.properties').pathname;
    return myutils.fileparser.parseproperties(realpath, null);
})();

exports.globalconfig = (function(){
    var realpath =  __dirname + '/config/' + global.Module.url.parse('global.properties').pathname;
    return myutils.fileparser.parseproperties(realpath, null);
})();

exports.mailconfig = (function(){
    var realpath =  __dirname + '/config/' + global.Module.url.parse('email.properties').pathname;
    return myutils.fileparser.parseproperties(realpath, null);
})();

exports.emailsite = (function(){
    var realpath =  __dirname + '/config/' + global.Module.url.parse('emailsite.properties').pathname;
    return myutils.fileparser.parseproperties(realpath, null);
})();


// Configuration Server
function bootConfigServer(server, express) {
    var expressValidator = require('express-validator');
    var RedisStore = require('connect-redis')(express);
    var MongoStore = require('connect-mongo')(express);
    var sessionStore = new MongoStore({url:global.dbconfig.url, collection:global.dbconfig.collection});

    server.configure(function(){  //中间件的顺序是不能随意改变的
//  server.set('views', __dirname + '/views');
//  server.set('view engine', 'jade');
        //设置模版引擎
        server.engine('.html', require('ejs').__express);   //这两种方法都可以
//        server.engine('html', require('ejs').renderFile);
        server.set('views', global.BASEDIR + '/views');
        server.set('view engine', 'html');
//        server.register('.html', require('ejs'));

        server.set('view options', {layout: false});
//  server.set('view cache', true); //上线开启模板缓存

        //解析表单数据的中间件
        server.use(express.bodyParser());  //上传到默认的临时目录/tmp
//  server.use(express.bodyParser({uploadDir:'./uploads'}));//上传到指定的临时目录/uploads
        server.use(express.methodOverride());
        server.use(express.cookieParser());
        server.use(expressValidator);  //验证框架
        server.use(express.session({
            secret: global.globalconfig.user_session_key,
            store: sessionStore }));
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
        //
        require('./websocket').boot(server, sessionStore);
    });
}






//module.exports = {xxx:function(){}}