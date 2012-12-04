/**
 * Author: DolphinBoy
 * Email: longxinanlan@msn.cn
 * Date: 12-11-26
 * Time: 下午10:05
 * Description: 地址
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var AddressSchema = new Schema({
  _id: { type: ObjectId, index: true },
  user_id: { type: String, index: true },
  longitude: { type: Number },  //经度
  latitude: { type: Number },  //纬度
  altitude: { type: Number },  //海拔
  accuracy: { type: Number },  //精确度
  bear: { type: Number },  //偏离正北方的度数
  speed: { type: Number },  //速度
  gpstime: { type: Date },  //GPS时间
  record_time: { type: Date, index: true},  //采集时间
  provider: { type: Number },  //位置提供方式{GPS,NET,APN}
  create_at: { type: Date, default: Date.now },
  at_address: {type: String}
});

mongoose.model('Address', AddressSchema);
