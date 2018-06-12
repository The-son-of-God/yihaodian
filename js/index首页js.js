
$(function () {
    // 全部商品分类详情
    $(function () {
        var $optionHidden = $('.optionHidden');
        for(i = 0; i < $optionHidden.length; i++){
            $optionHidden.eq(i).css({marginTop:-(i+1)*40})
        }
    });
  // 轮播图
    $(function () {
        var $lunbotu = $('.lunbotu');
        var $lunbotuUl = $('.lunbotu ul li');
        var $lunbotuOl = $('.lunbotu ol li');
        var index = 0;
        var timer = null;
        move();
        function move() {
            index = index > $lunbotuUl.length - 1 ? 0 : index;
            index = index < 0 ? $lunbotuUl.length - 1 : index;
            $lunbotuUl.eq(index).fadeIn().siblings().fadeOut();
            $lunbotuOl.eq(index).css({backgroundColor: '#ff4e00',color:'#fff'}).siblings().css({backgroundColor:'transparent'});
        }
        timer = setInterval(function () {
            index++;
            move();
        },1000);
        // 鼠标进入离开事件
        $lunbotu.hover(function () {
            clearInterval(timer)
        },function () {
            timer = setInterval(function () {
                index++;
                move();
            },1000);
        });
        $lunbotu.children('.but').children().hover(function () {
            $(this).css({backgroundColor:'rgba(0,0,0,1)'})
        },function () {
            $(this).css({backgroundColor:'rgba(0,0,0,0.5)'})
        });
        // 点击选项事件
        $lunbotu.children('ol').children().click(function () {
            index = $(this).index();
            move();
        });
        $lunbotu.children('.but').children().eq(0).click(function () {
            index--;
            move();
        }) ;
        $lunbotu.children('.but').children().eq(1).click(function () {
            index++;
            move();
        });
    });
    // 快讯公告栏部分
    $(function(){
        function movedown(){
            var $marginTop = 0 ;
            var $stop = null;
            $stop = setInterval(function(){
                $('#toplunbo').children('li').first().animate({
                        'margin-top':$marginTop--},
                    0, function(){
                        var $first =$(this);
                        if ((-$marginTop) > $first.height()) {
                            $first.css({'margin-top': 0}).appendTo($('#toplunbo'));
                            $marginTop = 0;
                        }
                    });
            },50);

            $('#toplunbo').hover(function(){
                clearInterval($stop)
            },function(){
                $stop = setInterval(function(){
                    $('#toplunbo').children('li').first().animate({
                            'margin-top':$marginTop--},
                        0, function(){
                            var $first =$(this);
                                if((-$marginTop)>$first.height()){
                                    $first.css({'margin-top':0}).appendTo($('#toplunbo'));
                                    $marginTop = 0;
                                }

                        });
                },50);
            });
        }
        movedown();
    });
    // 楼层跳转
    var $bodyHtml = $('body,html');
    $('.louCengTiaoZhuanUl li').click(function () {

        if($(this).index() === 0){
            $bodyHtml.stop().animate({scrollTop:'1044'},500);
        }
        if($(this).index() === 1){
            $bodyHtml.stop().animate({scrollTop:'1545'},500);
        }
        if($(this).index() === 2){
            $bodyHtml.stop().animate({scrollTop:'2199'},500);
        }
        if($(this).index() === 3){
            $bodyHtml.stop().animate({scrollTop:'0'},500);
        }

    });
    $(window).scroll(function () {
        if( $(document).scrollTop() > 700 ){
            $('.louCengTiaoZhuan').show()
        }else {
            $('.louCengTiaoZhuan').hide()
        }
    });
    // 购物车



});