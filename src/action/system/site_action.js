/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 12-6-12
 * Time: 下午12:01
 * To change this template use File | Settings | File Templates.
 */

//exports.index = function(req, res, next){
//    var realpath =  global.BASEDIR + '/views/' + global.Module.url.parse('index.html').pathname;
//    var txt = global.Module.fs.readFileSync(realpath);
//    res.end(txt);
//};

exports.index = function(req, res, next){
//    var realpath =  __dirname + '/config/' + global.Module.url.parse('mail.properties').pathname;
//    var content = global.Module.fs.readFileSync(realpath, "UTF-8");
//    var regexjing = /\s*(#+)/;  //去除注释行的正则
//    var regexkong = /\s*=\s*/;  //去除=号前后的空格的正则
//    var valuejing = /#/;  //去除键值对后面的注释
//    var kongge = /\s/;  //去除所有空格
//    var keyvalue = {};  //存储键值对
//
//    var arr_case = null;
//    var casetmp = null;
//    var regexline = /.+/g;  //匹配换行符以外的所有字符的正则
//    while(arr_case=regexline.exec(content)) {  //过滤掉空行
//        if (!regexjing.test(arr_case)) {  //去除注释行
//                casetmp = arr_case.toString().split(valuejing)[0].toString.replace(kongge);
//            keyvalue[casetmp.toString().split(regexkong)[0]] = casetmp.toString().split(regexkong)[1];  //存储键值对
//            console.log(casetmp.toString());
//        }
//    }
    console.log('req.is:'+req.is('text/html'));
    console.log('Accept:'+req.header('Accept', '*/*').indexOf('text/html'));
    console.log('host:'+req.header('host'));
    console.log('Referer:'+req.header('Referer'));
    console.log('accepts:'+req.accepts('text/html'));
    console.log('user-agent:'+req.headers['user-agent']);

    //    var type = {
//            "ie":(tmp = ua.match(/msie ([\d.]+)/))?tmp[1]:false,
//            "ff":(tmp = ua.match(/firefox\/([\d.]+)/))?tmp[1]:false,
//            "chrome":(tmp = ua.match(/chrome\/([\d.]+)/))?tmp[1]:false,
//            "opera":(tmp = ua.match(/opera.([\d.]+)/))?tmp[1]:false,
//            "safari":(tmp = ua.match(/version\/([\d.]+).*safari/))?tmp[1]:false
//    }

    res.render('index');
};
