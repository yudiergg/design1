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

    const news_swiper = new Swiper('.news .swiper', {
        slidesPerView: 2, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            1001: {    /* 768px 이상일때 적용 */
                slidesPerView: 3,
                spaceBetween: 24,
            },
        },
        loop: false,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        scrollbar: {
            el: ".news .scroll",
            hide: false,
            draggable: true,
            dragSize: 140,
          },
    });
    
    AOS.init({
        offset: 150, // 해당 콘텐츠가 하단에서 몇 px 위로 올라와에 나타나는 효과가 나타날지 셋팅하는 값
        duration: 500, // 애니메이션 효과가 작동되는 시간
        easing: 'ease', // 가속도
        });
});
