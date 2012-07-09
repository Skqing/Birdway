/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 12-6-13
 * Time: 下午5:18
 * 扫描并utils目录下的文件，并引入函数
 */

//exports.md5 = require('./security');
//exports.parseproperties = require('./propertyfile_parser');

var fs = require('fs');

module.exports = (function (){
    var utils = {};
    var list = fs.readdirSync(__dirname);  //奇怪了这里的 __dirname 不能用我的全局变量 global.BASEDIR 不理解
    list.forEach(function(item, index, arr){
        var isFile = fs.statSync(__dirname + '/' + item).isFile();
        if (isFile && item !== 'index.js'){
            utils[item.substring(0, item.length-3)] = require(__dirname + '/' + item);
        }
    })
    return utils;
})();

//global.Middle.utils.fileparser.parseproperties(realpath, null)访问的时候
//这地方貌似要优化


//223.4.21.167
//账号 whz002895adm
//密码 3w3n3k8g4w
//数据库登录名：soopee201206
//密码：sp201226552121