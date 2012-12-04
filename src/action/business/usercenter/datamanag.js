/**
 * Author: DolphinBoy
 * Date: 12-11-17
 * Time: 下午6:52
 * Description: 用户的GPS数据管理(导入、导出)
 */
var moment = require('moment');

var models = global.Middle.template;
var GPSSensor = models.GPSSensor;

/**
 * 数据导入，以JSON格式为标准
 * JSON对象数据
 */
exports.import = function(req, res, next){
  var user = req.session.user_session_key;

  var method = req.method.toLowerCase();
  if (method === 'get'){
    var userid = null;
    if (user == undefined || user === null) {
      return res.render('security/login', { msg: '您还未登录，请先登录！' });
    }else{
      return res.render('business/usercenter/data_import');
    }
  }
  if(method === 'post'){
    var userid = null;
    if(user == undefined || user === null || user._id == undefined || user._id === null){
      return res.render('security/login', { msg: '您还未登录，请先登录！' });
    }else{
      userid = user._id;
    }
    var filename = req.files.filedata.name;
    var type = req.files.filedata.type;
    var size = req.files.filedata.size;
//    var lastmodifieddate = req.files.filedata.lastModifiedDate;
//    var dfws = req.files.filedata._writeStream;
    if(size == 0 || filename == ""){  //这里的判断条件要尽量多
      return res.render('business/usercenter/data_import', {msg: '文件数据有错误！'});
    }

    // 获得文件的临时路径
    var tmp_path = req.files.filedata.path;
    global.Module.fs.readFile(tmp_path, 'UTF-8' ,function (err, data){  //这里要用同步方法
      if (err){
        throw err;
        return res.render('common/error');
      }
      var jsondata = JSON.parse(data);  //这里要捕获错误，进行处理

      var len = jsondata.length;

      var falseid = [];
      var sensor = null;
      for(var i=0; i<len; i++){
        sensor = new GPSSensor();
        sensor.user_id = userid;
        sensor.longitude = jsondata[i].lon;
        sensor.latitude = jsondata[i].lat;
        sensor.altitude = jsondata[i].alt;
        sensor.accuracy = jsondata[i].acc;
        sensor.bear = jsondata[i].bea;
        sensor.speed = jsondata[i].spe;
        sensor.gpstime = new Date(jsondata[i].gpt);
        sensor.record_time = new Date(jsondata[i].ret);
        sensor.provider = 0;

        sensor.save(function(err){
          if(err){
            jsondata[i].id;
            return next(err);
          } else {
            return res.render('business/usercenter/data_import', {msg: '数据导入成功！'});
          }
        });
      }
//      console.log('typeof:'+typeof(data));
//      console.log(data);
      console.log(jsondata);
    });
  }


  // 指定文件上传后的目录 - 示例为"images"目录。
//  var target_path = './public/images/' + req.files.thumbnail.name;
//  // 移动文件
//  global.Module.fs.rename(tmp_path, target_path, function(err){
//    if (err) throw err;
//    // 删除临时文件夹文件,
//    global.Module.fs.unlink(tmp_path, function(){
//      if (err) throw err;
//      res.send('File uploaded to: ' + target_path + ' - ' + req.files.thumbnail.size + ' bytes');
//    });
//  });
};

/**
 针对上面这个方法，在windows下，如果你的node安装在非系统盘，按照上文给出的的方法，应该会出现诸如 Error: EXDEV, rename ... 之类的错误。
 这是因为express默认上传临时目录是在系统盘，而windows下rename不可以跨区操作。查看了下nodeclud的代码，发现它是用下面的方式修改express默认上传临时目录:

 var ndir = require('ndir');
 var mod = require('express/node_modules/connect/node_modules/formidable');
 var upload_path = path.join(path.dirname(__dirname), 'public/user_data/images');
 ndir.mkdir(upload_path, function (err) {
 if (err) {
 throw err;
 }
 mod.IncomingForm.UPLOAD_DIR = upload_path;
 });
 */

/**
 * 数据导入，以JSON格式为标准
 * JSON对象数据
 */
exports.importJsonArr = function(){


};


/**
 * 数据导出，以JSON格式导出
 */
exports.export = function(){



};