/**
 * Author: DolphinBoy
 * Email: dolphinboyo@gmail.com
 * Date: 12-12-20
 * Time: 下午8:14
 * Description: [描述信息]
 */

/**
 * 基本信息
 * @param req
 * @param res
 * @param next
 */
exports.baseinfo = function(req, res, next) {
  var user = req.session.user_session_key;
  if (user == undefined || user === null) {
    req.session.redirect_uri = 'business/usercenter/user_info';
    return res.render( 'security/login', { msg: '您还未登录，请先登录！' } );
  }

  var method = req.method.toLowerCase();
  if (method === 'get') {



//    res.json({ user: 'tobi' })

    return res.render('business/usercenter/user_info', {user: user});
  }
};
