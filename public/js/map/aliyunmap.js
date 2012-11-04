/**
 * Created with JetBrains WebStorm.
 * User: 王文龙
 * Email: longxinanlan@msn.cn
 * Date: 12-7-29 下午2:39
 * 处理阿里云地图
 */

//在页面DOM加载完成后加载阿里云地图

function initialize() {
    var map = new AliMap("mapdiv"); //使用id为mapDiv的层创建一个地图对象
    //--要判断是否成功加载了阿里云的地图API
    //map.centerAndZoom(new AliLatLng(30.238747,120.14532),15);//显示地图

    //使用IP定位的中心点来显示地图
    Jla.require("Ali.Map.Mod.IpView",3,null,[map]);
}

window.onload = initialize;