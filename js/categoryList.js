$('.choice').find('a').hover(function(){
    $(this).css({color: '#ff4e00'});
},function(){
    $(this).css({color: '#a5a5a5'});
});
$(function () {
    $('#i-up').click(
        function (){
            console.log("hello");
            var arr = [];
            var flag = true;
            $('.cate_list span').each(function (index, e)
            {
                arr[index] = parseInt($(e).text().substring(1));
            });
            console.log(arr);

            //  排序开始
            arr.sort(function(a,b){
                return b-a
            });
            console.log(arr);
            for (var i = 1; i < arr.length; i++) {
                for (var j = 0; j < arr.length - i; j++) {
                    var temp = 0;
                    if (arr[j]>arr[j+1]) {
                        temp = arr[j];
                        arr[j] = arr[j+1];
                        arr[j+1] = temp;
                    }
                }
            }

            // 排序结束
//               alert(arr);
            var len = $('.cate_list span').size();
            // alert(len);
            //取到li下的数字值
            //把Li按照数组的顺序进行插入！
            for(i=0;i<arr.length;i++){
                for(j=0;j<len;j++){
                    if(arr[i]==$('.cate_list span').eq(j).text().substring(1))
                    {
//                       alert($("li span").eq(j).text().substring(1));
                        console.log(i+""+j);
                        $('.cate_list span').eq(j).parents("li").remove().appendTo('.cate_list');
                        break;
                    }
                }
            }
        }
    );
    $('#i-down').click(
        function (){
            console.log("hello");
            var arr = [];
            // var flag = true;
            $('.cate_list span').each(function (index, e)
            {
                arr[index] = parseInt($(e).text().substring(1));
            });
            console.log(arr)
            for(var i=0;i<arr.length;i++){
                if(arr[i]<arr[i+1]){
                    arr.sort(function(a,b){
                        return b-a;
                    })
                }
            }

            //  排序开始
            arr.sort(function(a,b){
                return b-a
            });
            console.log(arr)
            // for (var i = 1; i < arr.length; i++) {
            //     for (var j = 0; j < arr.length - i; j++) {
            //         var temp = 0;
            //         if (arr[j] > arr[j + 1]) {
            //             temp = arr[j];
            //             arr[j] = arr[j+1];
            //             arr[j+1] = temp;
            //         }
            //     }
            // }

            // 排序结束
//               alert(arr);
            var len = $('.cate_list span').size();
            // alert(len);
            //取到li下的数字值
            //把Li按照数组的顺序进行插入！
            for(i=0;i<arr.length;i++){
                for(j=0;j<len;j++){
                    if(arr[i]==$('.cate_list span').eq(j).text().substring(1))
                    {
//                       alert($("li span").eq(j).text().substring(1));
                        console.log(i+""+j);
                        $('.cate_list span').eq(j).parents("li").remove().appendTo('.cate_list');
                        break;
                    }
                }
            }
        }
    );
    $('.i-car').hover(function(){
        $('.last').css({display: 'block'});
    },function(){
        $('.last').css({display: 'none'});
    });

    // 添加购物车
    $('.aa').click(function () {
        var $Lis = $(this).parent().parent();
        var $jiage = $Lis.children('.price').children('span').text();
        var $img = $Lis.children('img').attr('src');
        var $name = $Lis.children('.name').text();
        // console.log($name)
        // 拼接购物车商品
        var $str = '';
        $str += '<li>';
        $str += '<div>';
        $str += '<h2>1号店满199减10 </h2>';
        $str += '<span>共1件商品</span>';
        $str += '</div>';
        $str += '<img src="'+ $img +'">';
        $str += '<h3>'+ $name +'</h3>';
        $str += '<h4>深蓝 140码</h4>';
        $str += '<span class="shanChu">X</span>';
        $str += '<span class="goWuCheJiaGe">'+$jiage+'</span>';
        $str += '<div>';
        $str += '<span class="jian">-</span>';
        $str += '<input type="text" value="1" class="shuoLiang">';
        $str += '<span class="jia">+</span>';
        $str += '</div>';
        $str += '<p>参加一项促销，节约成本￥100</p>';
        $str += '</li>';
        $('.gowucheHidden>ul').prepend($str);

        // 拼接购物车合计价格
        function heJI() {
            var $str1 = '';
            var $heJi = 0;
            var $shuoliang = 0;
            var $gouwcheLis = $('.gowucheHidden>ul li');
            for(i = 0; i < $gouwcheLis.length; i++ ){
                $heJi += ($('.goWuCheJiaGe').eq(i).text().replace(/[^0-9.]/g,0)-0)
                *($('.jia').prev().val());
                $shuoliang += $('.shuoLiang').val() - 0;
            }
            $str1 += '<p>合计￥<span>'+ $heJi +'</span></p>';
            $str1 += '<a href="">立即结算(<span>'+ $shuoliang +'</span>)</a>';
            $('#gowucheJiaGe').html($str1);

        }
        heJI();

        // for(i = 0; i < $('.jia').length; i++){
        //     购物车商品数量加
        var $aa = [];
            $('.jia').click(function () {
                $(this).prev().val($(this).prev().val() - 0 + 1);
                $aa.unshift($(this).siblings().index());
                heJI();
                console.log($(this).index());
            });
            // 购物车商品数量减
            $('.jian').click(function () {
                $(this).next().val($(this).next().val() - 1);
                console.log($(this).next().val());
                heJI();
                console.log($(this).index());
            });
        // }

        // 删除
        $('.shanChu').click(function () {
            if(confirm('确定要删除吗？')){
                $(this).parents('li').remove();
            }else {
                return;
            }
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
    })

    // 购物车
    $('.gowuche').hover(function () {
        $('.gowudeHide').show()
    },function () {
        $('.gowudeHide').hide()
    })


});