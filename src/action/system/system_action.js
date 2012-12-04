/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 12-6-28
 * Time: 下午5:51
 * To change this template use File | Settings | File Templates.
 */

//var Canvas = require('canvas');

exports.verifyCode = function(req, res, next){
//  var canvas = new Canvas(100, 30);
//  var  ctx = canvas.getContext('2d');
//  var  items = 'abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPRSTUVWXYZ23456789'.split('');
//  var  vcode = '';
//  var  textColors = ['#FD0', '#6c0', '#09F', '#f30', '#aaa', '#3cc', '#cc0',
//    '#A020F0', '#FFA500', '#A52A2A', '#8B6914', '#FFC0CB', '#90EE90'];
//
//  ctx.fillStyle = '#000';
//  ctx.fillRect(0, 0, 100, 30);
//  ctx.font = 'bold 30px sans-serif';
//
//  ctx.globalAlpha = .8;
//  for (var i = 0; i < 4; i++) {
//    var rnd = Math.random();
//    var item = Math.round(rnd * (items.length - 1));
//    var color = Math.round(rnd * (textColors.length - 1));
//    ctx.fillStyle = textColors[color];
//    ctx.fillText(items[item], 5 + i*23, 25);
//    vcode += items[item];
//  }
//
//  req.session.verifycode = vcode.toLowerCase();
//
//  canvas.toBuffer(function(err, buf){
//    res.writeHead(200, { 'Content-Type': 'image/png', 'Content-Length': buf.length });
//    res.end(buf);
//  });
};
