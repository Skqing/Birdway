/**
 * Author: DolphinBoy
 * Date: 12-10-29
 * Time: 下午11:30
 * Description:
 */

var models = global.Middle.template;
var Sensor = models.Sensor;
var User = models.User;
var check = require('validator').check,
  sanitize = require('validator').sanitize;

/**
 * 坐标上传
 * sensordate 的报文格式：{apiver:xxx;userid:xxx;经度:xxx;纬度:xxx;海拔:xxx;x:xxx;y:xxx;z:xxx;采集
 时间:xxx;发送时间:xxx;服务类型:xxx}
 */
exports.uploadByGet = function(req, res, next){
  var token = req.query.token;
  var sensordate = req.query.data;
  console.log("sensordate:"+sensordate);
  if(token != null && sensordate != null){
    var data = JSON.parse(sensordate);
    var sensor = new Sensor();
    sensor.userid = token;
    sensor.longitude = data.lon;
    sensor.latitude = data.lat;
    sensor.altitude = data.alt;
    sensor.collect_time = data.colt;
    sensor.send_time = data.sendt;
    console.log("data:"+sensor.userid+"#"+sensor.longitude+"#"+sensor.latitude+"#"+sensor.altitude);
    sensor.save(function(err){
      if(err) return next(err);
    });
  }
  return;
};

exports.showSensorData = function(req, res, next){
  Sensor.find({'$sort':[{'collect_time':-1}]}, function(err, sensors){
    if(err) return next(err);
    if(sensors.length > 0){
      res.render('/showsensor', {data: sensors});
      return;
    }
  });
};

exports.getUserId = function(req, res, next){
  console.log("手机端请求用户ID");
  var name = "dolphinboy";
  var email = "longxinanlan@msn.cn";
  User.find({'$or':[{'loginname':name}, {'email':email}]},function(err, user){
    res.write(users.loginname);
    res.end();
  });
};
