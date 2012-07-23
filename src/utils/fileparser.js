/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 12-6-8
 * Time: 下午12:06
 * 解析properties文件
 */

exports.parseproperties = function(uri, encoding){
    var encoding = encoding==null?'UTF-8':encoding;  //定义编码类型
    try {
        var content = global.Module.fs.readFileSync(uri, encoding);
        var regexjing = /\s*(#+)/;  //去除注释行的正则
        var regexkong = /\s*=\s*/;  //去除=号前后的空格的正则
        var valuejing = /#/;  //去除键值对后面的注释
        var kongge = /\s*/;  //去除所有空格
        var keyvalue = {};  //存储键值对

        var arr_case = null;
        var casetmp = null;
        var regexline = /.+/g;  //匹配换行符以外的所有字符的正则
        while(arr_case=regexline.exec(content)) {  //过滤掉空行
            if (!regexjing.test(arr_case)) {  //去除注释行
//                casetmp = arr_case.toString().split(valuejing)[0].toString.replace(kongge);
                keyvalue[arr_case.toString().split(regexkong)[0]] = arr_case.toString().split(regexkong)[1];  //存储键值对
                console.log(arr_case.toString());
            }
        }
    } catch (e) {
        console.log("Error Message:"+e.message);
        return null;
    }
    return keyvalue;
}

exports.parseXML = function(Objecttype, uri, encoding){
    var tmparray = new Array();
    var linregex = /\r\n/;
    var tempstr = fs.readFileSync(realpath, encoding);

    var jregex = /\#/;
    for (var i=0; i<tmparry.length; i++) {

    }
    return null;
}