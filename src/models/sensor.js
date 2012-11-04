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

var SensorSchema = new Schema({
  user_id: { type: String, index: true },
  longitude: { type: Number },
  latitude: { type: Number },
  altitude: { type: Number },
  collect_time: { type: Date },
  send_time: { type: Date },
  create_at: { type: Date, default: Date.now }

});

mongoose.model('Sensor', SensorSchema);