/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 12-6-1
 * Time: 上午11:13
 * To change this template use File | Settings | File Templates.
 */
var mongodb = require('mongodb');

var _service = function(mongoCollection, mongoDB) {
    var sv = new mongodb.Server('127.0.0.1', 27017, {});
    this.mongoCollection = mongoCollection || 'nodeCollection';
    this.mongoDB = mongoDB || 'nodeDB';
    this.db = new mongodb.Db(this.mongoDB, sv, {});
}

_service.prototype.Open = function(callback) {
    var that = this;
    if (that.db && that.db.state == 'connected') {
        callback && callback();
    } else {
        that.db.open(function(error, client) {
            if (error) throw error;
            that.collection = new mongodb.Collection(client, that.mongoCollection);
            callback && callback();
        });
    }
}

_service.prototype.Close = function(isClose) {
    if (!!isClose && this.db) {
        this.db.close();
        this.collection = null;
        this.db = null;
    }
}

_service.prototype.Insert = function(obj, func, isClose) {
    var that = this;
    that.Open(function() {
        that.collection.insert(obj, { safe: true }, function(err) {
            that.Close(isClose);
            if (err) {
                console.warn(err.message);
            }
            if (err && err.message.indexOf('E11000') !== -1) {
                //this _id was already inserted in the database
            }
            func && func();
        });
    });
}


_service.prototype.Find = function(obj, func, isClose) {
    var that = this;
    that.Open(function() {
        that.collection.find(obj, function(err, cursor) {
            that.Close(isClose);
            if (err) {
                console.warn(err.message);
            }
            cursor.toArray(function(err, items) {
                func && func(items);
            });

        });
    });
}

_service.prototype.Update = function(obj, objN, func, isClose) {
    var that = this;
    that.Open(function() {
        that.collection.update(obj, { $set: objN }, { safe: true }, function(err) {
            that.Close(isClose);
            if (err) {
                console.warn(err.message);
            }
            func && func();
        });
    });
}

_service.prototype.Remove = function(obj, func, isClose) {
    var that = this;
    that.Open(function() {
        that.collection.remove(obj, function(err, result) {
            that.Close(isClose);
            if (err) {
                console.warn(err.message);
            }
            func && func(result);
        });
    });
}

exports.Server = _service;