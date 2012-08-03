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
    sessionid: { type: String, index: true },
    user_id: { type: String, index: true },
    loginip: { type: String },
    latitude: { type: Number },  //纬度
    longitude: { type: Number },  //经度
    clienttype: { type: String },  //客户端类型，电脑登录，手机登录，平板登录，或者其他

    logintime: { type: Date, default: Date.now }
});

mongoose.model('LoginRecord', LoginRecord);