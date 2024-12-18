$(document).reday(function(){
    const swiper = new Swiper('.popup .swiper', { /* 팝업을 감싼는 요소의 class명 */

	autoplay: {  /* 팝업 자동 실행 */
		delay: 1000,
		disableOnInteraction: true,
	},

	loop: false,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

	navigation: {  /* 이전, 다음 버튼 */
		nextEl: '.popup .btn_wrap .next',  /* 다음 버튼의 클래스명 */
		prevEl: '.popup .btn_wrap .prev',  
	},
    });

    $('.popup .btn_wrap .stop').on('click', function(){
        swiper.autoplay.stop();
        $(this).hide()
        $('.popup .btn_wrap .play').show()
    })
    $('.popup .btn_wrap .play').on('click', function(){
        swiper.autoplay.start();
        $('.popup .btn_wrap .stop').show()
    })
})