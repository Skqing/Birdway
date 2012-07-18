/**
 * Created with JetBrains WebStorm.
 * User: 王文龙
 * Email: longxinanlan@msn.cn
 * Date: 12-7-12 上午10:46
 * 接收移动平台传递过来的GPS数据
 */
var check = require('validator').check,
    sanitize = require('validator').sanitize;

exports.gps = function(req, res, next){
    var uin = req.params.lo;
    var longitude = req.params.lo;
    var latitude = req.params.la;
    var elevation = req.params.el;

    try{
        check(uin, 'falseuin').notNull();
    }catch(e){
        console.log("e.message:"+e.message);

        return;
    }

    try{
        check(longitude, 'falselongitude').notNull();
    }catch(e){
        console.log("e.message:"+e.message);

        return;
    }
    try{
        check(latitude, 'falselatitude').notNull();
    }catch(e){
        console.log("e.message:"+e.message);

        return;
    }
    try{
        check(elevation, 'falseelevation').notNull();
    }catch(e){
        console.log("e.message:"+e.message);

        return;
    }

    console.log("longitude:"+longitude);
    console.log("latitude:"+latitude);
    console.log("elevation:"+elevation);

    res.end();
}