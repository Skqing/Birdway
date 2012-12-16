/**
 * Author: DolphinBoy
 * Email: longxinanlan@msn.cn
 * Date: 12-7-20
 * Time: 14:21
 * 处理websocket任务
 */

//var sio = require('socket.io');
//var parseCookie = require('./node_modules/express/node_modules/connect').utils.parseCookie;
const redis = require("redis");


/**
 * 配置socket.io
 */
//var io = null;

exports.boot = function(io) {
//  if (!io) io = sio.listen(httpserver);
//  io.configure(function () {
//    io.set('transports', ['websocket', 'flashsocket', 'xhr-polling']);
//  });
//
//  io.configure('development', function () {
//    io.set('transports', ['websocket', 'xhr-polling']);
//    io.enable('log');
//  });
  //加上上面的这两句话会报错：
//  , fqdn = ~req.url.indexOf('://')
//    ^
//    TypeError: Cannot read property 'url' of undefined

  //设置session
//  io.set('authorization', function(handshakeData, callback){
    // 通过客户端的cookie字符串来获取其session数据
//    handshakeData.cookie = parseCookie(handshakeData.headers.cookie);
//    var connect_sid = handshakeData.cookie[global.globalconfig.cookie_id];
//    if (connect_sid) {
//      sessionStore.get(connect_sid, function(error, session){
//        if (error) {
//          // if we cannot grab a session, turn down the connection
//          callback(error.message, false);
//        }
//        else {
//          // save the session data and accept the connection
//          handshakeData.session = session;
//          callback(null, true);
//        }
//      });
//    } else {
//        callback('nosession');
//    }
//  });
//var socket = sios.enable({
//    socket: sio.listen(app),         // Socket.IO listener
//    store:  sessionStore,                // Your session store
//    parser: express.cookieParser()  // Cookie parser
//});

  //开启连接事件,所有的websocket业务都在这里配合redis客户端处理
  io.sockets.on('connection', function (socket){
    console.log('socket connection!');
    const redis_client = redis.createClient();
    const ppl = redis.createClient();  //public point listener.

    redis_client.on("error", function (err) {
      console.log("Error " + err);
    });
    ppl.on("error", function (err) {
      console.log("Error " + err);
    });

//    var session = socket.handshake.session;//session
//    var user =  session.user_session_key;
//    console.log('user:'+user);
//    var name = session.name;
//    console.log('name:'+name);

    socket.emit('news', { hello: 'world' });
    //定时获取redis中的传感器数据，发送给前台
    ppl.on("message", function(channel, message)
    {
      console.log('channel:' + channel +'---msg:'+message);
      socket.emit('public_points', message);
    });
    ppl.subscribe('public_points');

//    socket.on('s_message', function()
//    {
//      var get_t_id = this.t_id;
//      redis_obj.subscribe(get_t_id);
//      console.log('subscribe to ' + get_t_id );
//    });
    //实时更新我关注的好友的坐标
//    socket.on('my_watch', {});

    //断开连接callback,当关闭或者刷新网页的时候触发的事件
    socket.on('disconnect',function()
    {
      console.log('socket disconnect!');
  //      var get_t_id = this.t_id;
      //处理一些事情
//      ppl.unsubscribe('public_points');
      ppl.unsubscribe();
      redis_client.quit();
      ppl.quit();
    });
  });
};