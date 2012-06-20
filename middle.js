/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 12-6-13
 * Time: 下午4:33
 * 模块的中继站，所有模块都可以通过此模块调用其他模块
 */


//exports.middle = {
//    template : require('./src/models'),
//    utils : require('./src/utils')
//
//}

module.exports.template = require('./src/models');
module.exports.utils = require('./src/utils');