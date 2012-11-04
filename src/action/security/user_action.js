/**
* User: DolphinBoy
* Date: 12-6-12
* Time: 下午1:59
* To change this template use File | Settings | File Templates.
*/
var models = global.Middle.template;
var User = models.User;
var Loginrecord = models.LoginRecord;

var myutils = global.Middle.utils;

var check = require('validator').check,
  sanitize = require('validator').sanitize;

/**
* define some page when login just jump to the home page
* @type {Array}
*/
var notJump = [
    '/security/active_account', //active page
    '/security/reset_pass',     //reset password page, avoid to reset twice
    '/security/login',         //regist page
    '/security/search_pass'    //serch pass page
];
//res.clearCookie('ocuvite', { path: '/' });
/**
 * 用户登录
 * @param req
 * @param res
 * @param next
 * @return {*}
 */
exports.login = function(req, res, next){
//  var reqtype_json = false;
//
//  if (req.header('Accept', '*/*').indexOf('application/json') != -1) {
//      reqtype_json = true;
//  }

  var method = req.method.toLowerCase();
  if (method === 'get'){
      return res.render('security/login');
  }
  if(method === 'post'){
    var username = sanitize(req.body.username).trim().toLowerCase();
    username = sanitize(username).xss();
    var password = sanitize(req.body.password).trim();
    password = sanitize(password).xss();

    if (!username || !password) {
      return res.render('security/login', { loginerror: '信息不完整。' });
    }

    User.findOne({ 'loginname': username }, function(err, user) {
      if (err) return next(err);
      if (!user) {
          return res.render('security/login', { loginerror:'这个用户不存在。' });
      }
      password = global.Middle.utils.security.md5(password);
      if (password !== user.password) {
          return res.render('security/login', { loginerror:'密码错误。' });
      }
      if (!user.active) {
          return res.render('security/login', { loginerror:'此帐号还没有被激活。' });
      }
      // store session cookie
//        gen_session(user, res);

      //check at some page just jump to home page
//            var refer = req.session._loginReferer || 'home';  //这段代码不知道是干嘛的？
//            for (var i=0, len = notJump.length; i!=len; ++i) {
//                if (refer.indexOf(notJump[i]) >= 0) {
//                    refer = 'home';
//                    break;
//                }
//            }
//            res.redirect(refer);



      //暂且不考虑这个调用会阻塞login方法，但是这是一个要注意的地方……
      //global.Middle.service.location.LoginUserLocation(req.headers.host);

      //要记录用户session
      req.session.user_session_key = user;

      //要进行用户登录日志记录
      var userip = req.connection.remoteAddress;
      var loginrecord = new Loginrecord();
      loginrecord.sessionid = req.session.id;
      loginrecord.loginip = userip;
      loginrecord.clienttype = 'pc';
      loginrecord.save(function(err){
        if(err) res.render('common/error/500.html', { error:'登录错误。' });
      });


//      if (reqtype_json) {
//        res.send({'state': 'aok'});
//        res.end();
//      }

      res.render('index', {user: user});
      return;
    });
  }
}

/**
 * 注册帐号
 * @param req
 * @param res
 * @param next
 */
exports.regist = function(req, res, next){
    var method = req.method.toLowerCase();
    if (method === 'get'){
        res.render('security/regist');
        return;
    }
    if(method === 'post'){
        var name = sanitize(req.body.username).trim();
        name = sanitize(name).xss();
        name = name.toLowerCase();

        var pass = sanitize(req.body.password).trim();
        pass = sanitize(pass).xss();

        var email = sanitize(req.body.useremail).trim();
        email = email.toLowerCase();
        email = sanitize(email).xss();

        var re_pass = sanitize(req.body.confirmpassword).trim();
        re_pass = sanitize(re_pass).xss();

        if(name == '' || pass =='' || re_pass == '' || email ==''){
            res.render('security/regist', {singuperror: '信息不完整。', name: name, email: email});
            return;
        }

        if(name.length < 5){
            res.render('security/regist', {singuperror:'用户名至少需要5个字符。', name: name, email: email});
            return;
        }

        try{
            check(name, '用户名只能使用0-9，a-z，A-Z。').isAlphanumeric();
        }catch(e){
            res.render('security/regist', {singuperror: e.message, name: name, email: email});
            return;
        }

        if(pass !== re_pass){
            res.render('security/regist', {singuperror: '两次密码输入不一致。', name: name, email: email});
            return;
        }

        try{
            check(email, '不正确的电子邮箱。').isEmail();
        }catch(e){
            res.render('security/regist', {singuperror:e.message, name:name, email:email});
            return;
        }

        User.find({'$or':[{'loginname':name}, {'email':email}]},function(err, users){
            if(err) return next(err);
            if(users.length > 0){
                res.render('security/regist', {singuperror:'用户名或邮箱已被使用。', name:name, email:email});
                return;
            }

            // md5 the pass
            pass = global.Middle.utils.security.md5(pass);
            // create gavatar，不知道这里是要干嘛
//            var avatar_url = 'http://www.gravatar.com/avatar/' + global.Middle.utils.security.md5(email) + '?size=48';

            var user = new User();
            user.loginname = name;
            user.password = pass;
            user.email = email;
//            user.avatar = avatar_url;
            user.active = true;  //产品模式为false
            user.save(function(err){
                if(err) return next(err);
                    global.Middle.service.mail.send_active_mail(email, global.Middle.utils.security.md5(global.siteconfig.name+name+email), name, email, function(err, success){
                    if(success){
                        res.render('security/regist_aok', {msg:'欢迎加入 ' + global.siteconfig.name + '！我们已给您的注册邮箱发送了一封邮件，请点击您注册邮箱里面的链接来激活您的帐号。', site:global.Middle.utils.transutils.emailorsite(email)});
                        return;
                    }
                });
            });
        });
    }
};

/**
 * 激活账号
 * @param req
 * @param res
 * @param next
 */
exports.activeAccount = function(req, res, next) {
  var key = req.query.key;
  var name = req.query.name;
  var email = req.query.email;

  User.findOne({name: name}, function(err, user){
    if(!user || global.Middle.utils.security.md5(global.sitecofig.name+name+email) != key){
      res.render('notify/active_notify', {error: '信息有误，帐号无法被激活。'});
      return;
    }
    if(user.active){
      res.render('notify/active_notify', {error: '帐号已经是激活状态。'});
      return;
    }
    user.active = true;
    user.save(function(err){
      res.render('notify/active_notify', {success: '帐号已被激活，请登录'});
    });
  });
};

/**
 * 请求个人信息
 * @param req
 * @param res
 * @param next
 */
exports.myInfor = function(req, res, next) {
  if (req.session && req.session.user_session_key) {
    var user =  req.session.user_session_key;
    //以JSON格式返回用户概要信息
    global.Middle.action.resptype.responseType(res, {user: user}, null);
  } else {
    //返回错误信息，提示用户登录
    global.Middle.action.resptype.responseType(res, [global.RESULT.failed, '用户未登录', 'needlogin', null, null], null);
  }

};

/**
 * 生成session，并且设定保存时间
 * @param user
 * @param res
 */
function gen_session(user, res) {
    var auth_token = global.Middle.utils.security.encrypt(user._id + '\t' + user.loginname + '\t' + user.password + '\t' + user.email, global.siteconfig.user_session_key);
    res.cookie(global.siteconfig.cookie_id, auth_token, {path: '/',maxAge: 1000*60*60*24*30}); //cookie 有效期30天
};
