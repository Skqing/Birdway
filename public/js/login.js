/**
 * Created with JetBrains WebStorm.
 * User: 王文龙
 * Email: longxinanlan@msn.cn
 * Date: 12-7-6 下午4:29
 * Description
 */

$(function(){
    var verify = false;
    var isemail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
    $("#rUN").blur(function(){
        if ($(this).val().toString().replace(/\s*/g,'').length==0) {
            $("#rUNtip").css('display','inline');
            verify = false;
        } else {
            $("#rUNtip").css('display','none');
        }
    });
    $("#rEmail").blur(function(){
        if ($(this).val().toString().replace(/\s*/g,'').length==0) {
            $("#rEmailtip").css('display','inline');
            verify = false;
        } else if (isemail.test($(this).val().toString())) {
            $("#rEmailtip").css('display','none');
        } else {
            $("#rEmailtip").text("邮箱格式不正确");
            $("#rEmailtip").css('display','inline');
            verify = false;
        }
    });
    $("#rPW").blur(function(){
        if ($(this).val().toString().replace(/\s*/g,'').length==0) {
            $("#rPWtip").css('display','inline');
            verify = false;
        } else {
            $("#rPWtip").css('display','none');
        }
    });
    $("#rCP").blur(function(){
        if ($(this).val().toString().replace(/\s*/g,'').length==0) {
            $("#rCPtip").css('display','inline');
            verify = false;
        } else if ($(this).val().toString().replace(/\s*/g,'') != $("#rPW").val().toString().replace(/\s*/g,'')) {
            $("#rCPtip").text("两次输入的密码不一致");
            $("#rCPtip").css('display','inline');
            verify = false;
        } else {
            $("#rCPtip").css('display','none');
        }
    });
    $("#rVC").blur(function(){
        if ($(this).val().toString().replace(/\s*/g,'').length==0) {
            $("#rVCtip").css('display','inline');
            verify = false;
        } else {
            $("#rVCtip").css('display','none');
        }
    });

    $("#lUN").blur(function(){
        if ($(this).val().toString().replace(/\s*/g,'').length==0) {
            $("#lUNtip").css('display','inline');
            verify = false;
        } else {
            $("#lUNtip").css('display','none');
        }
    });
    $("#lPW").blur(function(){
        if ($(this).val().toString().replace(/\s*/g,'').length==0) {
            $("#lPWtip").css('display','inline');
            verify = false;
        } else {
            $("#lPWtip").css('display','none');
        }
    });
    $("#lVC").blur(function(){
        if ($(this).val().toString().replace(/\s*/g,'').length==0) {
            $("#lVCtip").css('display','inline');
            verify = false;
        } else {
            $("#lVCtip").css('display','none');
        }
    });

    $("#rvcimg").click(function(){
        var url = '/system/verifycode?random='+Math.random();
        $(this).attr('src', url);
    });
    $("#lvcimg").click(function(){
        var url = '/system/verifycode?random='+Math.random();
        $(this).attr('src', url);
    });

    $("#loginbut").click(function(){
        $("#loginForm").submit();
    });
    $("#registbut").click(function(){

    });

    //提交后没有返回错误信息的话隐藏错误提示条
    $(".backError").each(function(){
        if ($(this).text().toString().replace(/\s*/g,'').length==0) {
            $(this).css('display', 'none');
        }
    });

})
