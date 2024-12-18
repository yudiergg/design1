$(document).ready(function(){
    const swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

	autoplay: {  /* 팝업 자동 실행 */
		delay: 5000,
		disableOnInteraction: true,
	},

	loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

	pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
		el: '.visual .paging', /* 해당 요소의 class명 */
		clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
	},
	

	navigation: {  /* 이전, 다음 버튼 */
		nextEl: '.visual .prev',  /* 다음 버튼의 클래스명 */
		prevEl: '.visual .next',  
	},

    });
    swiper.autoplay.stop();  /* 일시정지 기능 */
    swiper.autoplay.start();  /* 재생 기능 */

    $('.visual .btn_wrapper .play').on('click',function(){
        swiper.autoplay.start()
        $(this).hide()
        $('.visual .btn_wrapper .stop').show()
    })
    
    $('.visual .btn_wrapper .stop').on('click',function(){
        swiper.autoplay.stop();
        $(this).hide()
        $('.visual .btn_wrapper .play').show()

    })
})