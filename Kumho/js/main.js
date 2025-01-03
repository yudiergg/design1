$(document).ready(function(){
    const visual_swiper = new Swiper('.visual .swiper', { 

    autoplay: {  
        delay: 5000,
        disableOnInteraction: true,
    },

    loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

    pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
        el: '.visual .ctrl_wrap .paging', /* 해당 요소의 class명 */
        clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
        type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
        // renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
        //     return '<span class="' + className + '"> 안녕' + (index + 1) + "</span>";
        // },
    },
    });
   
    $('.visual .ctrl_wrap .stop').on('click',function(){
        visual_swiper.autoplay.stop();
        $(this).hide()
        $('.visual .ctrl_wrap .play').show()
    });
    $('.visual .ctrl_wrap .play').on('click',function(){
        visual_swiper.autoplay.start();
        $(this).hide()
        $('.visual .ctrl_wrap .stop').show()
    });
});