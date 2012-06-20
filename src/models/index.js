var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/birdway', function (err) {
  if (err) {
    console.error('connect to %s error: ', 'mongodb://localhost/birdway', err.message);
    process.exit(1);
  }
});
//global.dbconfig.url
// models
require('./tag');
require('./user');
require('./topic');
require('./topic_tag');
require('./reply');
require('./topic_collect');
require('./tag_collect');
require('./relation');
require('./message');

exports.Tag = mongoose.model('Tag');
exports.User = mongoose.model('User');
exports.Topic = mongoose.model('Topic');
exports.TopicTag = mongoose.model('TopicTag');
exports.Reply = mongoose.model('Reply');
exports.TopicCollect = mongoose.model('TopicCollect');
exports.TagCollect = mongoose.model('TagCollect');
exports.Relation = mongoose.model('Relation');
exports.Message = mongoose.model('Message');
