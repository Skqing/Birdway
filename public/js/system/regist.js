/**
 * Author: DolphinBoy
 * Date: 12-10-10
 * Time: 下午11:13
 * Description:
 */

$(function(){
  var verify = true;
  var email_reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;


  $("#username_id").blur(function(){
    if ($(this).val().toString().replace(/\s*/g,'').length == 0) {
      $("#username_id").css('border-color', '#F00');
      $("#errortip_id").text("用户名不能为空!");
      $("#errortip_id").css('display','block');
      verify = false;
    } else {
      $("#username_id").css('border-color', '#FFF');
      $("#errortip_id").css('display','none');
    }
  });
  $("#password_id").blur(function(){
    if ($(this).val().toString().replace(/\s*/g,'').length == 0) {
      $("#password_id").css('border-color', '#F00');
      $("#errortip_id").text("密码不能为空!");
      $("#errortip_id").css('display','block');
      verify = false;
    } else {
      $("#password_id").css('border-color', '#FFF');
      $("#errortip_id").css('display','none');
    }
  });
  $("#verifycode_id").blur(function(){
    if ($(this).val().toString().replace(/\s*/g,'').length == 0) {
      $("#verifycode_id").css('border-color', '#F00');
      $("#errortip_id").text("验证码不能为空!");
      $("#errortip_id").css('display','block');
      verify = false;
    } else {
      $("#verifycode_id").css('border-color', '#FFF');
      $("#errortip_id").css('display','none');
    }
  });
  $("#loginbut").click(function(){
    if (verify) {
      $("#loginForm").submit();
    } else {
      //触发所有.blur事件

    }
  });

  $("#verifycode_img_id").click(function(){
    var url = '/system/verifycode?random='+Math.random();
    $(this).attr('src', url);
  });



  //提交后没有返回错误信息的话隐藏错误提示条
//    $(".backError").each(function(){
//        if ($(this).text().toString().replace(/\s*/g,'').length==0) {
//            $(this).css('display', 'none');
//        }
//    });

})