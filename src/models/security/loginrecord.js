/**
 * Created with JetBrains WebStorm.
 * User: 王文龙
 * Email: longxinanlan@msn.cn
 * Date: 12-7-20 下午2:15
 * 记录用户登录信息
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var LoginRecord = new Schema({

});

mongoose.model('LoginRecord', LoginRecord);