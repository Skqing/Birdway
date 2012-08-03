/**
 * Created with JetBrains WebStorm.
 * User: 王文龙
 * Email: longxinanlan@msn.cn
 * Date: 12-7-10 下午2:33
 * 处理首页业务
 */


$(function(){
    $('#myself').click(function(){
        window.location.href='/security/user_login';
    });
    $('#partner').click(function(){

        var dialog = art.dialog({
            id: 'partner_dialog',
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



