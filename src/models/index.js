var mongoose = require('mongoose');

mongoose.connect(global.siteconfig.url, function (err) {
  if (err) {
    console.error('connect to %s error: ', global.dbconfig.url, err.message);
    process.exit(1);
  }
});
//global.dbconfig.url
// models
require('./tag');
require('./user');
require('./security/loginrecord');

require('./topic');
require('./topic_tag');
require('./reply');
require('./topic_collect');
require('./tag_collect');
require('./relation');
require('./message');

require('./sensor');

exports.Tag = mongoose.model('Tag');

exports.User = mongoose.model('User');
exports.LoginRecord = mongoose.model('LoginRecord');

exports.Topic = mongoose.model('Topic');
exports.TopicTag = mongoose.model('TopicTag');
exports.Reply = mongoose.model('Reply');
exports.TopicCollect = mongoose.model('TopicCollect');
exports.TagCollect = mongoose.model('TagCollect');
exports.Relation = mongoose.model('Relation');
exports.Message = mongoose.model('Message');

exports.Sensor = mongoose.model('Sensor');

