/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 12-6-12
 * Time: 下午12:01
 * To change this template use File | Settings | File Templates.
 */

exports.index = function(req, res, next){
    var realpath =  global.BASEDIR + '/views/' + global.Module.url.parse('index.html').pathname;
    var txt = global.Module.fs.readFileSync(realpath);

    console.log('global.dbconfig:'+typeof global.dbconfig());
//    global.dbconfig.url
    res.end(txt);
};