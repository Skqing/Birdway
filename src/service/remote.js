/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 12-6-8
 * Time: 下午1:52
 * To change this template use File | Settings | File Templates.
 */

var http = require('http');


exports.remoterequest = function(options){
    var defaultoptions = {
        host: 'www.google.com.hk',
        port: 80,
        path: '/upload',
        method: 'POST'
    };
    options == null ? defaultoptions : options;
    var req = http.request(options, function(res) {
        console.log('STATUS: ' + res.statusCode);
        console.log('HEADERS: ' + JSON.stringify(res.headers));
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log('BODY: ' + chunk);
        });
    });
// write data to request body
    req.write('data\n');
    req.write('data\n');
    req.end();
}


