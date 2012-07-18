/**
 * Created with JetBrains WebStorm.
 * User: 王文龙
 * Email: longxinanlan@msn.cn
 * Date: 12-7-10 下午2:33
 * 处理首页业务
 */

//加载百度地图
function initialize() {
    document.body.style.backgroundImage = '';
    var map = new BMap.Map('map');
    var point = new BMap.Point(116.404, 39.915);
    map.centerAndZoom(point, 5);
    map.enableScrollWheelZoom;

    //添加控件
    map.addControl(new BMap.NavigationControl());  //平移缩放控件
    map.addControl(new BMap.ScaleControl());  //一个比例尺控件
    map.addControl(new BMap.OverviewMapControl());  //缩略图控件
    map.addControl(new BMap.MapTypeControl());  //地图类型控件
    map.enableScrollWheelZoom();// 启用滚轮放大缩小
    map.enableKeyboard();   //启用键盘操作
    map.setCurrentCity("北京");  // 仅当设置城市信息时，MapTypeControl的切换功能才能可用

    // 编写自定义函数，创建标注
    function addMarker(point, index){
        // 创建图标对象
        var myIcon = new BMap.Icon('/favicon.ico', new BMap.Size(23, 25), {
            // 指定定位位置。
            // 当标注显示在地图上时，其所指向的地理位置距离图标左上角各偏移10像素和25像素，您可以看到在本例中该位置即是图标中央下端的尖角位置。
            offset: new BMap.Size(30, 50)
            // 设置图片偏移。
            // 当您需要从一幅较大的图片中截取某部分作为标注图标时，您需要指定大图的偏移位置，此做法与css sprites技术类似。
            //imageOffset: new BMap.Size(0, 0 - index * 25)   // 设置图片偏移
        });
        // 创建标注对象并添加到地图
        var marker = new BMap.Marker(point, {icon: myIcon});
        marker.addEventListener("click", function(){
            alert("您点击了标注");
        });
        map.addOverlay(marker);
    }
    addMarker(point, null);

    //var marker1 = new BMap.Marker(point);        // 创建标注
    //map.addOverlay(marker1);                     // 将标注添加到地图中

    map.addEventListener("click", function(e){
        alert(e.point.lng + ", " + e.point.lat);
    });

    var opts = {
        width : 50,     // 信息窗口宽度
        height: 25,     // 信息窗口高度
        title : "Hello"  // 信息窗口标题
    }
    var infoWindow = new BMap.InfoWindow("我们在这儿！", opts);  // 创建信息窗口对象
    map.openInfoWindow(infoWindow, map.getCenter());      // 打开信息窗口
}

function loadScript() {
    var script = document.createElement("script");
    script.src = "http://api.map.baidu.com/api?v=1.3&callback=initialize";
    document.body.appendChild(script);
}

window.onload = loadScript;
