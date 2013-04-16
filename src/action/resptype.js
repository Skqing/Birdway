/**
 * Author: DolphinBoy
 * Date: 2012-9-28
 * Description: 对response返回类型的封装
 */

/**
 * response返回类型的封装
 * 根据传参不同来封装不同的返回结果，目前只封装了三种
 * 1.(字符串, 对象) ：返回视图跳转，第二个参数为指定的跳转路径，第三个参数为数据
 * 2.返回提示信息，只有一个参数，是数组，并且提示信息要按照封装好的格式返回
 * 3.(JSON) ：返回JSON格式
 * 4.(字符串, 布尔值) ：返回数据流，第二个参数为指定的文件路径，第三个参数为是否是异步读取
 */
exports.responseType = function(res, arg, brg){
  if(res !== null && typeof(res) !== 'undefined'){
    if(arg !== null && brg !== null && typeof(arg) === 'string' && typeof(brg) === 'object'){
      return res.render(arg, brg);
    } else if (arg !== null && brg === null && arg.constructor === Array){
      res.writeHead(200, {'Content-Type': 'application/json'});
      var result = msgFormat(arg);
      console.log("result:"+result);
      res.send(result);
    }else if(arg !== null && brg === null && arg.constructor === Object){
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.send(JSON.stringify(arg));
    }else if(arg !== null && brg !== null && typeof(arg) === 'string' && typeof(brg) === 'boolean'){
      //读取文件并返回（考虑两种情况，本域的文件或者静态文件服务器的文件）

      res.end();
    }
  }else{
    return null;
  }
};

/**
 * 定义消息返回格式
 * JSON数据第一个属性是状态码，值是failed或者success，不能为空
 * 第二个属性是消息，值是返回给客户端的消息，可以为空
 * 第三个属性是命令，提示客户端要执行的命令，可以为空
 * 第四个属性为扩展属性，可以为空
 * 第五个属性是时间，返回服务器时间，不能为空，但是在action层可以选填
 */
function msgFormat(values) {  //这个要定义为一个匿名类才好
  if (typeof(values[0]) !== 'boolean' || values[0] !== 'false' || values[0] !== 'true') {
    //这里要做异常处理
  }
  if (values[5] === null) {
    var date = new Date();  //这里必须要控制时间格式，否则时间输出会是这样的："Sun Oct 07 2012 11:47:28 GMT+0800 (中国标准时间)"
    values[5] = date.toLocaleString();
  }
  var result = {status: values[0], errcode: values[1], msg: values[2], command: values[3],
    ext: values[4], datatime: values[5]};
    return JSON.stringify(result);
};