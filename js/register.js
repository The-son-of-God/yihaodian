$(function(){
    $('.helpLink,.outHelp').hover(function(){
        $('.outHelp').css({display: 'block'});
    },function(){
        $('.outHelp').css({display: 'none'});
    });

    var input = document.getElementsByTagName('input');
    input[0].onfocus = function(){
        $('.phone').html('请输入手机号码');
    };
    input[0].onblur = function(){
        var text = this.value;
        var reg = /^1[3578]\d{9}$/;
        if(text){
            if(reg.test(text)){
                $('.phone').html('手机号码输入正确').css({color: 'black'});
                input[0].style.border = '1px solid gray';
            }else{
                $('.phone').html('手机号码输入有误').css({color: 'red'});
                input[0].style.border = '1px solid red';
            }
        }else{
            $('.phone').html('手机号码不能为空').css({color: 'red'});
            input[0].style.border = '1px solid red';
        }
    };
    input[1].onblur = function(){
        var text = this.value;
        var reg = /^\d{6}$/;
        if(text){
            if(reg.test(text)){
                $('.b').html('验证码输入正确').css({color: 'black'});
                input[1].style.border = '1px solid gray';
            }else{
                $('.b').html('验证码输入有误').css({color: 'red'});
                input[1].style.border = '1px solid red';
            }
        }else{
            $('.b').html('验证码不能为空').css({color: 'red'});
            input[1].style.border = '1px solid red';
        }
    };
    input[2].onfocus = function(){
        $('.psd').html('请输入5-17位字符');
    };
    input[2].onblur = function(){
        var text = this.value;
        var reg = /^[a-zA-Z]\w{5,17}$/;
        if(text){
            if(reg.test(text)){
                $('.psd').html('密码输入正确');
                if(input[3].value != ''){
                    if(text != input[3].value){
                        $('.psd').html('两次输入的密码不一致').css({color: 'red'});
                        input[2].style.border = '1px solid red';
                    }
                }
            }else{
                $('.psd').html('密码输入有误').css({color: 'red'});
                input[2].style.border = '1px solid red';
            }
        }else{
            $('.psd').html('密码不能为空').css({color: 'red'});
            input[2].style.border = '1px solid red';
        }
    };
    input[3].onfocus = function(){
        $('.twice').html('请再次输入密码');
    };
    input[3].onblur = function(){
        var text = this.value;
        var reg = /^[a-zA-Z]\w{5,17}$/;
        if(text){
            if(reg.test(text)){
                if(text === input[2].value){
                    $('.twice').html('密码输入正确').css({color: 'black'});
                    input[3].style.border = '1px solid black';
                }else{
                    $('.twice').html('两次输入的密码不一致').css({color: 'red'});
                    input[3].style.border = '1px solid red';
                }
            }else{
                $('.twice').html('密码输入有误').css({color: 'red'});
            }
        }else{
            $('.twice').html('密码不能为空');
            input[3].style.border = '1px solid red';
        }
    };

// 点击验证码，60秒倒计时
    var min = 60;
    var timer = null;
    $('.tableText').on('click',function(){
        console.log(1)
        clearInterval(timer);
        timer = setInterval(time,1000);
    });
    function time(){
        min -= 1;
        if(min > 0){
            $('.tableText').html('('+min+'秒)后重发');
        }else{
            min = 60;
            $('.tableText').html('获取验证码');

        }
    }

});

