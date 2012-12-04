/**
 * Author: DolphinBoy
 * Email: longxinanlan@msn.cn
 * Date: 12-7-10 下午2:33
 * 处理首页业务
 */


$(function(){
  /**background:url('/images/map_loading.gif') no-repeat center;*/
  //创建一个加载中的动态图


  $('#myself_id').click(function(){
    $.getJSON("/security/user_myinfo", function(data) {
      if (data != null) {  //var b = {}; b 同样不等于 null，这样var b = {};我们同样认为b为空，但是目前判断不出来
        if (data.status != 'failed') {  //判断是否已经登录，否则跳转到登录页面
          var myinfo_html = new EJS({url: '/tmpl/myinfo.ejs'}).render(data);  //生成模版
          //获得返回的数据然后弹出dialog
          var dialog = art.dialog({
            id: 'my_info_id',
            title: '个人信息',
            content: myinfo_html,
//            width: 600,
//            height: 500,
            top: '10%',
            left: '70%',
            fixed: true,
            esc: true
          });
        } else {
          if (data.status == 'failed' && data.command == 'needlogin') {
//              var notice = art.alert(data.msg);
//              notice.close();
              window.location.href='/security/user_login';
          } else {
            //未知错误，未知错误的显示不应该是个对话框，而是一个很小的提示框，并且要能够自动消失
            alert("未知错误");
          }
        }
      } else {
        //获取数据失败--消息提示框
        alert("获取数据失败");
      }

    });



  });
  $('#partner_id').click(function(){

      var dialog = art.dialog({
          id: 'my_partner_id',
          title: 'My partners!',
          content: '这里显示内容',
          width: 600,
          height: 500,
          top: '10%',
          left: '70%',
          fixed: true,
          esc: true
      });



  });
});



