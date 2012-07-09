/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 12-6-29
 * Time: 下午1:49
 * To change this template use File | Settings | File Templates.
 */

$(function(){
    $('#me').click(function(){
        var dialog = art.dialog({
            id: 'login_dialog',
            title: '登录Birdway',
            content: '帐号：<input id="username" type="text" /><br />'
                + '密码：<input id="password" type="password" value="" />',
            lock: true,
            fixed: true,
            button: [
                {
                    value: '登录',
                    callback: function () {
                        var un = document.getElementById('username');
                        var pw = document.getElementById('password');
                        $.post("/user_login", { username: un, password: pw },
                            function(data) {
                                alert(data);
                                if (data == 'OK') {
                                    dialog.icon = 'succeed';
                                    dialog.content('登录成功').time(5);
                                } else if(data == 'UNFALSE') {
                                    un.style.borderColor = 'red';
                                    un.select();
                                    un.focus();
                                    dialog.shake();
                                    return false;
                                } else if (data == 'PWFALSE') {
                                    pw.style.borderColor = 'red';
                                    pw.select();
                                    pw.focus();
                                    dialog.shake();
                                    return false;
                                } else {
                                    alert('未知错误！');
                                    dialog.shake();
                                    return false;
                                }
                            });
                        return true;
                    },
                    focus: true
                },
                {
                    value: '注册',
                    callback: function () {
                        alert('注册按钮')
                        return false;
                    }
                }
            ]
        });
    });
});