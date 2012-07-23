/**
 * Created with JetBrains WebStorm.
 * User: 王文龙
 * Email: longxinanlan@msn.cn
 * Date: 12-7-20 上午9:03
 * 各可以查询IP地址对应位置的网络API
 * host, port, path, method
 */

module.exports.sinaip = {
    "host":"int.dpool.sina.com.cn",
    "port":"80",
    "path":"/iplookup/iplookup.php?format=js",
    "method":"GET"}

module.exports.sinaip1 = {
    "host":"http://counter.sina.com.cn",
    "port":"80",
    "path":"/ip",
    "method":"GET"}

module.exports.sohu = {
    "host":"http://pv.sohu.com",
    "port":"80",
    "path":"/cityjson?ie=utf-8",
    "method":"GET"}

module.exports.sohu = {
    "host":"http://www.ip138.com",
    "port":"80",
    "path":"/ips1388.asp?action=2&ip=",
    "method":"GET"}
