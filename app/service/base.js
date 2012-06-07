/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 12-5-31
 * Time: 下午5:13
 * To change this template use File | Settings | File Templates.
 */


module.exports = function(database) {
    /* inti... */
    this.crypto = require('crypto');
    this.salt = 'this is top secret!';
    this.mongoose = require('mongoose');  //模块引用
    this.Schema = this.mongoose.Schema;  //定义模式
    this.ObjectId = this.Schema.ObjectId;  //
    this.mongoose.connect('mongodb://127.0.0.1/' + database);

    /* mongoose model... */
    this.User = new this.Schema({
        username: String,
        password: String,
        realname: String,
        email: String
    });

    this.Node = new this.Schema({
        title: String,
        content: String,
        type: String,
        x: Number,
        y: Number,
        parentId: String,
        action: {type: String, enum: ['create', 'update', 'follow']}
    });

    this.Nodes = new this.Schema({
        nodes: [this.Node]
    });

    this.Minds = new this.Schema({
        title: String,
        desc: Strnig,
        width: Number,
        height: Number,
        x: Number,  //经度
        y: Number,  //纬度
        _nodes: {type: this.ObjectId, ref: 'Nodes'},
        _creator: {type: this.ObjectId, ref: 'User'}
    });

    this.Position = new this.Schema({
        id: {type: this.ObjectId, index: true},
        _user: {type: this.ObjectId, ref: 'User'},
        lgtd: {type: String, match: /[0-9]/},  //经度
        lttd: {type: String, match: /[0-9]/},  //纬度
        sdate: {type: Date, default: Date.now}
    });

    this.user = this.mongoose.model('User', this.User);
    this.minds = this.mongoose.model('Minds', this.Minds);
    this.node = this.mongoose.model('Node', this.Node);
    this.nodes = this.mongoose.model('Nodes', this.Nodes);
    this.position = this.mongoose.model('Position', this.Position);

}
