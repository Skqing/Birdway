/**
 * User: DolphinBoy
 * Date: 12-9-29
 * Time: 下午1:59
 * 日期时间工具
 */

exports.yyyyMMdd = function() {
  
};


exports.formatDate = function(date, fortmat) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();


};

exports.compareDate = function(date_a, date_b) {

};

exports.topicDate = function(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  
  var now = new Date();
  var mseconds = -(date.getTime() - now.getTime());
  var time_std = [ 1000, 60 * 1000, 60 * 60 * 1000, 24 * 60 * 60 * 1000 ];

  if (mseconds < time_std[3]) {
    if (mseconds > 0 && mseconds < time_std[1]) {
      return Math.floor(mseconds / time_std[0]).toString() + ' 秒前';
    }
    if (mseconds > time_std[1] && mseconds < time_std[2]) {
      return Math.floor(mseconds / time_std[1]).toString() + ' 分钟前';
    }
    if (mseconds > time_std[2]) {
      return Math.floor(mseconds / time_std[2]).toString() + ' 小时前';
    }
  } else if (mseconds == 0) {
    return '刚刚';
  } else if (mseconds < 0) {
    return '你穿越了……';
  }
};

