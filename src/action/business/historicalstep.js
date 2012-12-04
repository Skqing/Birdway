/**
 * Author: DolphinBoy
 * Date: 12-11-24
 * Time: 下午5:28
 * Description: 历史足迹业务处理模块
 */


var check = require('validator').check,
  sanitize = require('validator').sanitize;

var models = global.Middle.template;
var GPSSensor = models.GPSSensor;

/**
 * 历史足迹主页面
 */
exports.mainpage = function(req, res, next){
  var method = req.method.toLowerCase();
  if (method === 'get'){
    return res.render('historical_step');
  }
};

/**
 * 获取自己一定时间，相关地点内的历史足迹
 * 主要查询参数为：USERID，时间段，地点
 * @param req
 * @param res
 * @param next
 * 控制点：1.页面加载时，默认显示当天的数据
 *        2.以开始时间和结束时间为时间段
 *        3.开始时间和结束时间不能为空
 *        4.开始时间和结束时间之间的间隔不能超过一定的范围，这个范围暂时未确定
 */
exports.searchstep = function(req, res, next){
  var method = req.method.toLowerCase();

  if (method === 'post'){
    var begindate = req.body.begindate;
    var enddate = req.body.enddate;
    var province = req.body.province;
    var city = req.body.city;
    var area = req.body.area;

    console.log("参数："+begindate+':'+enddate+':'+province+':'+city+':'+area);
    //begindate和enddate估计要转换为时间对象
    var bdate = new Date(begindate+' 00:00:00');
    var edate = new Date(enddate+' 00:00:00');
//    GPSSensor.find({'record_time':{$gte: begindate, $lte: enddate}, 'at_address':'行政区划位置'}, function(err, gpssensor){
//    GPSSensor.find({record_time: {$gte: bdate, $lte: edate}}, 'longitude latitude record_time', function(err, gpssensors){
    //还要排序
    var query = GPSSensor.find({create_at: {$gte: bdate, $lte: edate}}, 'longitude latitude create_at');
      query.sort('record_time', 'asc');
      query.exec(function(err, gpssensors){
        if (err) return next(err);

        if (!gpssensors || gpssensors.length == 0) {
          res.writeHead(200, {'Content-Type': 'application/json'});
          var result = {status:'failed', errcode:'0', msg:'没有查询到数据！', datatime:new Date()};
          console.log('result:'+JSON.stringify(result));
          res.write(JSON.stringify(result));
          res.end();
        }else{
          res.writeHead(200, {'Content-Type': 'application/json'});
          console.log('data:'+JSON.stringify(gpssensors));
          res.write(JSON.stringify(gpssensors));
          res.end();
        }

    });
  }


};
