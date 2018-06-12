$(function () {
    var $bottomTopImg = $('.bottomTop>ul li img')
    $bottomTopImg.hover(function () {
        $(this).css({
            transition:'all 0.6s',
            transform:'rotate(360deg) scale(1.3)'

        })
    },function () {
        $(this).css({
            transition:'all 0.6s',
            transform:'rotate(0deg) scale(1)'
        })
    });

    // 客户服务动画
    $(function () {

        var $kehufuwuhide = $('.kehufuwuhide');
        $('.kehufuwu').hover(function () {
            $kehufuwuhide.stop().slideDown(300);
        },function () {
            $kehufuwuhide.stop().slideUp(300);
        })
    });

    // 搜索
    $('.soushuo').click(function () {
        $(window).location.protocol('CategoryList.html');
    })


});