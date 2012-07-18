/**
 * Created with JetBrains WebStorm.
 * User: 王文龙
 * Email: longxinanlan@msn.cn
 * Date: 12-7-13 上午9:25
 * email地址和相应的登录地址的转换
 */
var check = require('validator').check,
    sanitize = require('validator').sanitize;

exports.emailorsite = function(emailorsite) {
    if (check(emailorsite).isEmail()) {
        if (global.emailsite) {
            var site = global.emailsite[emailorsite.substring(emailorsite.charAt('@'), emailorsite.length)];
            if (site || site == 'undefine') {
                return null;
            } else {
                return site;
            }

        }
    } else if (check(emailorsite).isUrl()) {

    } else {
        return null;
    }
}