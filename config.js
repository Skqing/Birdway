/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 12-6-7
 * Time: 上午8:52
 * 读取配置文件对服务器进行配置
 */

var myutils = require('./src/utils');

exports.boot = function(server){
    bootConfigServer(server);
}
exports.dbconfig = (function(){
    var realpath =  __dirname + '/config/' + global.Module.url.parse('mongodb.properties').pathname;
    return myutils.fileparser.parseproperties(realpath, null);
})();

exports.globalconfig = (function(){
    var realpath =  __dirname + '/config/' + global.Module.url.parse('globalconfig.properties').pathname;
    return myutils.fileparser.parseproperties(realpath, null);
})();

exports.mailconfig = (function(){
    var realpath =  __dirname + '/config/' + global.Module.url.parse('mail.properties').pathname;
    return myutils.fileparser.parseproperties(realpath, null);
})();
function bootConfigServer(server) {


}

//module.exports = {xxx:function(){}}