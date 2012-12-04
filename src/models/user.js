var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var UserSchema = new Schema({
//  _id: { type: ObjectId, index: true },
  username: { type: String, index: true },
  nickname: { type: String, required: true, unique: true },
  password: { type: String },
  email: { type: String, unique: true },
  url: { type: String },
  location: { type: String },
  signature: { type: String },
  profile: { type: String },
  weibo: { type: String },
  avatar: { type: String },  //在avatar上提供的个人头像地址
  profile_image_url: {type: String, default: '/images/user_icon&60.png'},  //这个地方要处理

  score: { type: Number, default: 0 },
  topic_count: { type: Number, default: 0 },
  reply_count: { type: Number, default: 0 },
  follower_count: { type: Number, default: 0 },
  following_count: { type: Number, default: 0 },
  collect_tag_count: { type: Number, default: 0 },
  collect_topic_count: { type: Number, default: 0 },

  create_at: { type: Date, default: Date.now },
  create_by: { type: ObjectId, ref: 'User' },
  update_at: { type: Date, default: Date.now },
  update_by: { type: ObjectId, ref: 'User' },  //这个要引用UserSchema

  is_star: { type: Boolean },
  level: { type: String },
  active: { type: Boolean, default: true },

  receive_reply_mail: {type: Boolean, default: false },
  receive_at_mail: { type: Boolean, default: false },
  from_wp: { type: Boolean },

  retrieve_time : {type: Number},
  retrieve_key : {type: String}
});

UserSchema.virtual('avatar_url').get(function () {
  var avatar_url = this.profile_image_url || this.avatar;
  if (!avatar_url) {
//    avatar_url = config.site_static_host + '/images/user_icon&48.png';
    avatar_url = global.siteconfig.site_static_host + '/images/user_icon&60.png';
  }
  return avatar_url;
});

mongoose.model('User', UserSchema);
