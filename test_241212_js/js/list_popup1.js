$(document).ready(function(){
    const swiper = new Swiper('.book .swiper', { 
	slidesPerView: 2,
	spaceBetween: 16, 
	breakpoints: {
		1300: {    
			slidesPerView: 4, 
			spaceBetween: 24,
		},
	},
	centeredSlides: false, 
	loop: true,  
    });
    
    const stroy_swiper = new Swiper('.stroy .swiper', { 
	slidesPerView: 'auto', 
	spaceBetween: 16, 
	breakpoints: {
		1300: {    
			slidesPerView: 'auto', /* 할당값이 없으므로 css에서 li의 넓이값을 정해줘야함*/
			spaceBetween: 24,
            centeredSlides: true, 
		},
	},
	centeredSlides: false, 
	loop: true,  
    });
    
    const news_swiper = new Swiper('.news .swiper', { /* 팝업을 감싼는 요소의 class명 */
	slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
	spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
	breakpoints: {
		1300: {    /* 1280px 이상일때 적용 */
			slidesPerView: 4, /* 할당값이 없으므로 css에서 li의 넓이값을 정해줘야함*/
			spaceBetween: 24,
		},
	},
	centeredSlides: false, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
	loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
    });
})