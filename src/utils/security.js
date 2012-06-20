/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 12-6-13
 * Time: 下午5:10
 * To change this template use File | Settings | File Templates.
 */
var crypto = require('crypto');


module.exports.gen_session = function(user,res) {
    var auth_token = global.Middle.utils.encrypt(user._id + '\t' + user.loginname + '\t' + user.password + '\t' + user.email, global.globalconfig.user_session_key);
    res.cookie(global.globalconfig.cookie_id, auth_token, {path: '/',maxAge: 1000*60*60*24*30}); //cookie 有效期30天
}
module.exports.encrypt = function(str,secret) {
    var cipher = crypto.createCipher('aes192', secret);
    var enc = cipher.update(str,'utf8','hex');
    enc += cipher.final('hex');
    return enc;
}
module.exports.decrypt = function(str,secret) {
    var decipher = crypto.createDecipher('aes192', secret);
    var dec = decipher.update(str,'hex','utf8');
    dec += decipher.final('utf8');
    return dec;
}
module.exports.md5 = function(str) {
    var md5sum = crypto.createHash('md5');
    md5sum.update(str);
    str = md5sum.digest('hex');
    return str;
}
module.exports.randomString = function(size) {
    size = size || 6;
    var code_string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var max_num = code_string.length + 1;
    var new_pass = '';
    while(size>0){
        new_pass += code_string.charAt(Math.floor(Math.random()* max_num));
        size--;
    }
    return new_pass;
}