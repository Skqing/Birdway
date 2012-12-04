/**
 * User: DolphinBoy
 * Date: 12-9-29
 * Time: 下午11:44
 * 网站的基本配置信息，大部分为静态参数
 */

exports.siteconfig = {
  //base
  name: 'BirdWay',
  description: 'BirdWay 是用Node.js开发的实时定位平台',
  version: '0.0.1',

  //development
  debug : true,

  // site settings
  site_headers: [
    '<meta name="author" content="DolphinBoy@BirdWay" />'
  ],
  host : 'birdway.org',
  port : 80,
  site_logo: '', // default is `name`
  //site_navs: [
    // [ path, title, [target=''] ]
    //[ '/about', '关于' ]
  //],

  site_static_host: '', // 静态文件存储域名
  site_enable_search_preview: false, // 开启google search preview
  site_google_search_domain:  'birdway.org',  // google search preview中要搜索的域名

  //upload_dir: path.join(__dirname, 'public', 'user_data', 'images'),

  //database
//url=mongodb://user:pass@127.0.0.1:27017/birdway/collection
  url: 'mongodb://127.0.0.1/birdway',
  db: 'birdway',
  collection: 'sessions',
  host: '127.0.0.1',
//  port: 27017,
  username: 'md_admin',
  password: 'md_birdway_admin',
  auto_reconnect: false,
  clear_interval: -1,
  stringify: true,

  //security settings
  cookie_id : 'birdway_sid',  //cookie标识
  user_session_key : 'user_session_key',  //用户session标识
  loginrefer_session_key: 'loginrefer_session_key',
  // 话题列表显示的话题数量
  list_topic_count: 20,

  clienttype: ['pc', 'mobile', 'pad'],  //用户登录的客户端类型

  // RSS
  rss: {
    title: 'CNode：Node.js专业中文社区',
    link: 'http://cnodejs.org',
    language: 'zh-cn',
    description: 'CNode：Node.js专业中文社区',

    //最多获取的RSS Item数量
    max_rss_items: 50
  },

// site links
  site_links: [
    {
      'text': 'Node 官方网站',
      'url': 'http://nodejs.org/'
    },
    {
      'text': 'Node Party',
      'url': 'http://party.cnodejs.net/'
    },
    {
      'text': 'Node 入门',
      'url': 'http://nodebeginner.org/index-zh-cn.html'
    },
    {
      'text': 'Node 中文文档',
      'url': 'http://docs.cnodejs.net/cman/'
    }
  ],

  // sidebar ads
  side_ads: [
    {
      'url': 'http://www.upyun.com/?utm_source=nodejs&utm_medium=link&utm_campaign=upyun&md=nodejs',
      'image': 'http://site-cnode.b0.upaiyun.com/images/upyun_logo.png',
      'text': ''
    },
    {
      'url': 'http://ruby-china.org/?utm_source=nodejs&utm_medium=link&utm_campaign=upyun&md=nodejs',
      'image': 'http://site-cnode.b0.upaiyun.com/images/ruby_china_logo.png',
      'text': ''
    },
    {
      'url': 'http://adc.taobao.com/',
      'image': 'http://adc.taobao.com/bundles/devcarnival/images/d2_180x250.jpg',
      'text': ''
    }
  ],

  // mail SMTP
  mail_port: 25,
  mail_user: 'club',
  mail_pass: 'club',
  mail_host: 'smtp.126.com',
  mail_sender: 'club@126.com',
  mail_use_authentication: true,

  //weibo app key
  weibo_key: 10000000,

  // admin 可删除话题，编辑标签，设某人为达人
  admins: { admin: true },

  // [ { name: 'plugin_name', options: { ... }, ... ]
  plugins: [
    // { name: 'onehost', options: { host: 'localhost.cnodejs.org' } },
    // { name: 'wordpress_redirect', options: {} }
  ]
};
//db settings
exports.dbconfig = {
//url=mongodb://user:pass@127.0.0.1:27017/birdway/collection
  url: 'mongodb://127.0.0.1/birdway',
  db: 'birdway',
  collection: 'sessions',
  host: '127.0.0.1',
  port: 27017,  //默认端口为27017
  username: 'md_admin',
  password: 'md_birdway_admin',
  auto_reconnect: false,
  clear_interval: -1,
  stringify: true
};

//mail settings
exports.mailconfig = {
  mail_host: 'smtp.gmail.com',  //定义用来发送邮件的邮箱服务器，一般是QQ(smtp.qq.com),gmail（smtp.gmail.com）这些的
  mail_port: 25,  //定义服务器端口，一般是25 ,如果是使用SSL端口一般为465如果使用TLS/STARTTLS (port 587)
  mail_ssl: false,  //默认为false，表示不用SSL，如果为true，则port为465
  mail_sender: 'birdway.org',
  mail_use_authentication: true,  //是否验证身份
  mail_user: 'birdway.org@gmail.com',  //邮箱用户名,只有当mail_use_authentication: true时才用
  mail_pass: 'bird.way.org'  //输入邮箱密码，只有当mail_use_authentication: true时才用
};