/*!
 * birdway - route.js
 * Copyright(c) 2012 dolphinboy <dolphinboyo@gmail.com>
 * LGPL Licensed
 */

/**
 * Module dependencies.
 */
var site = require('./src/action/system/site');
//var user = require('./src/action/security/user_action');


module.exports.boot = function(server){
    bootRouterServer(server);
}

function bootRouterServer(server) {
    // home page
    server.get('/', site.index);
//    server.post('/user_login', user.login);


}
