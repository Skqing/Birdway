/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 12-9-22
 * Time: 下午8:47
 * 从手机客户端获取的所有传感器数据
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var GPSSensorSchema = new Schema({
  //_id: { type: ObjectId, index: true },
  user_id: { type: String, index: true },
  longitude: { type: Number },  //经度
  latitude: { type: Number },  //纬度
  altitude: { type: Number },  //海拔
  accuracy: { type: Number },  //精确度
  bear: { type: Number },  //偏离正北方的度数
  speed: { type: Number },  //速度
  gpstime: { type: Date },  //GPS时间
//  gps_time: { type: Date },  //GPS时间
  record_time: { type: Date, index: true},  //采集时间
  provider: { type: Number },  //位置提供方式{GPS,NET,APN}
  create_at: { type: Date, default: Date.now },
  update_at: { type: Date, default: Date.now },
  update_by: { type: String },  //这个要引用UserSchema
  at_address: {type: String}
});

mongoose.model('GPSSensor', GPSSensorSchema);