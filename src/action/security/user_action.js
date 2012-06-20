///**
// * Created with JetBrains WebStorm.
// * User: Administrator
// * Date: 12-6-12
// * Time: 下午1:59
// * To change this template use File | Settings | File Templates.
// */
//var models = global.Middle.template,
//    User = models.User;
//
//var check = require('validator').check,
//    sanitize = require('validator').sanitize;
//
//var crypto = require('crypto');
///**
// * define some page when login just jump to the home page
// * @type {Array}
// */
//var notJump = [
//    '/active_account', //active page
//    '/reset_pass',     //reset password page, avoid to reset twice
//    '/login',         //regist page
//    '/search_pass'    //serch pass page
//];
//
//module.exports.signin = function(req, res, next){
//
//
//}
//
//module.exports.login = function(req, res, next){
//    var loginname = sanitize(req.body.loginname).trim().toLowerCase();
//    var password = sanitize(req.body.password).trim();
//
//    if (!loginname || !password) {
//        //return res.render('user/login', { error: '信息不完整。' });
//        console.log("信息不完整。");
//    }
//
//    User.findOne({ 'loginname': loginname }, function(err, user) {
//        if (err) return next(err);
//        if (!user) {
//            return res.render('user/login', { error:'这个用户不存在。' });
//        }
//        password = middle.utils.md5(password);
//        if (password !== user.password) {
//            return res.render('user/login', { error:'密码错误。' });
//        }
//        if (!user.active) {
//            res.render('user/login', { error:'此帐号还没有被激活。' });
//            return;
//        }
//        // store session cookie
//        gen_session(user, res);
//        //check at some page just jump to home page
//        var refer = req.session._loginReferer || 'home';
//        for (var i=0, len=notJump.length; i!=len; ++i) {
//            if (refer.indexOf(notJump[i]) >= 0) {
//                refer = 'home';
//                break;
//            }
//        }
//        res.redirect(refer);
//    });
//}
//
//function gen_session(user,res) {
//    var auth_token = global.Middle.utils.encrypt(user._id + '\t' + user.loginname + '\t' + user.password + '\t' + user.email, global.globalconfig.user_session_key);
//    res.cookie(global.globalconfig.cookie_id, auth_token, {path: '/',maxAge: 1000*60*60*24*30}); //cookie 有效期30天
//}
//
////exports.login = function(req, res, next) {
////    var loginname = sanitize(req.body.name).trim().toLowerCase();
////    var pass = sanitize(req.body.pass).trim();
////
////    if (!loginname || !pass) {
////        return res.render('sign/signin', { error: '信息不完整。' });
////    }
////
////    User.findOne({ 'loginname': loginname }, function(err, user) {
////        if (err) return next(err);
////        if (!user) {
////            return res.render('sign/signin', { error:'这个用户不存在。' });
////        }
////        pass = middle.utils.md5(pass);
////        if (pass !== user.pass) {
////            return res.render('sign/signin', { error:'密码错误。' });
////        }
////        if (!user.active) {
////            res.render('sign/signin', { error:'此帐号还没有被激活。' });
////            return;
////        }
////        // store session cookie
////        gen_session(user, res);
////        //check at some page just jump to home page
////        var refer = req.session._loginReferer || 'home';
////        for (var i=0, len=notJump.length; i!=len; ++i) {
////            if (refer.indexOf(notJump[i]) >= 0) {
////                refer = 'home';
////                break;
////            }
////        }
////        res.redirect(refer);
////    });
////};