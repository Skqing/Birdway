/**
 * Created with JetBrains WebStorm.
 * User: 王文龙
 * Email: longxinanlan@msn.cn
 * Date: 12-7-20 下午2:21
 * 处理websocket任务
 */

var parseCookie = require('connect').utils.parseCookie;

/**
 * 配置socket.io
 */
var io = null;

exports.boot = function(server, sessionStore) {
    if (!io) io = global.Module.sio.listen(server);

    //设置session
    io.set('authorization', function(handshakeData, callback){
        // 通过客户端的cookie字符串来获取其session数据
        handshakeData.cookie = parseCookie(handshakeData.headers.cookie)
        var connect_sid = handshakeData.cookie[global.globalconfig.cookie_id];
        if (connect_sid) {
            sessionStore.get(connect_sid, function(error, session){
                if (error) {
                    // if we cannot grab a session, turn down the connection
                    callback(error.message, false);
                }
                else {
                    // save the session data and accept the connection
                    handshakeData.session = session;
                    callback(null, true);
                }
            });
        }
        else {
            callback('nosession');
        }
    });
//var socket = sios.enable({
//    socket: sio.listen(app),         // Socket.IO listener
//    store:  sessionStore,                // Your session store
//    parser: express.cookieParser()  // Cookie parser
//});


    io.sockets.on('connection', function (socket) {
        var session = socket.handshake.session;//session
        var name = session.name;
        console.log(name);
        socket.emit('news', { hello: 'world' });
        socket.on('my other event', function (data) {
            console.log(data);
        });
    });
}