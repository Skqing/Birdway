/**
 * @description: 文件管理
 * @author: DolphinBoy
 * @date: 2012-9-29
 */

var fs = require('fs');


exports.filemanager = function(req, base_path) {
// 指定文件上传后的目录 - 示例为"images"目录。 
  var target_path = './public/images/' + req.files.thumbnail.name;
  // 获得文件的临时路径
  var tmp_path = req.files.thumbnail.path;



};

function saveFileDateFolder(tmp_path, base_path, file_name) {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();

  var datepath = year + '-' + month + '-' + day;
  //注意在组装文件保存路径的时候要考虑操作系统的不同
  var savepath = base_path + '/' + datepath + '/' + file_name.replace(/.+./,"");  

  saveFile(tmp_path, savepath);
};


/**
 * 文件保存
 * @param tmp_path: 缓存文件地址
 * @param target_path 目标文件地址
 */
function saveFileRandomName(tmp_path, base_path, file_name) {
  //生成UUID
  var randomname = '';
  //注意在组装文件保存路径的时候要考虑操作系统的不同
  var savepath = base_path + '/' + randomname + '/' + file_name.replace(/.+./,""); 
  saveFile(tmp_path, savepath);
};


function saveFile(tmp_path, sava_path) {
  //把缓存文件写为真实文件
  fs.rename(tmp_path, sava_path, function(err) {
  if (err) throw err;
    // 删除临时文件夹文件, 
    //fs.unlink(tmp_path, function() {
    //if (err) throw err;
      //return err;
    //});
  });
};

function saveFileRemote(tmp_path, remote_url) {
  //把缓存文件写为真实文件
  fs.rename(tmp_path, target_path, function(err) {
  if (err) throw err;
    // 删除临时文件夹文件, 
    fs.unlink(tmp_path, function() {
    if (err) throw err;
      res.send('File uploaded to: ' + target_path + ' - ' + req.files.thumbnail.size + ' bytes');
    });
  });
};