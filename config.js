/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 12-6-7
 * Time: 上午8:52
 * 读取配置文件对服务器进行配置
 */

exports.boot = function(server){
    bootConfigServer(server);
}
exports.dbconfig = function(){
    var realpath =  __dirname + '/config/' + global.Module.url.parse('mongodb.properties').pathname;
//    console.log('global.Middle.utils:' + global.Middle.utils);
//    console.log('global.Middle.template:'+typeof global.Middle.template);
//    console.log('require.utils:'+typeof require('./src/utils'));

    return global.Middle.utils.fileparser.parseproperties(realpath, null);
}
exports.globalconfig = function(){
    var realpath =  __dirname + '/config/' + global.Module.url.parse('globalconfig.properties').pathname;
    return global.Middle.utils.parseproperties(realpath, null);
}


function bootConfigServer(server) {



}

