$(document).ready(function(){
	/* 변수선언 */
	let device_status
	let window_w
	let scrolling

    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

	autoplay: {  /* 팝업 자동 실행 */
		delay: 1000,
		disableOnInteraction: true,
	},

	loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

	pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
		el: '.swiper-pagination', /* 해당 요소의 class명 */
		clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
		type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
		renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
		    return '<span class="' + className + '">' + (index + 1) + "</span>";
		},
	},
	

	navigation: {  /* 이전, 다음 버튼 */
		nextEl: '.visual .btn_wrap .next',  /* 다음 버튼의 클래스명 */
		prevEl: '.visual .btn_wrap .prev',  
	},

});
$('.visual .btn_wrap .stop').on('click',function(){
    // console.log('정지 버튼 누름')
    visual_swiper.autoplay.stop();
    $(this).hide();
    $('.visual .btn_wrap .play').show()
})

$('.visual .btn_wrap .play').on('click',function(){
    // console.log('시작 버튼 누름')
    visual_swiper.autoplay.start();
    $(this).hide();
    $('.visual .btn_wrap .stop').show()
})

function device_chk(){
	window_w = $(window).width()
	if(window_w > 640){
		device_status = 'pc'
	}else{
		device_status = 'mobile'
	}
}
device_chk() // 로딩됬을때 딱 한번 
$(window).resize(function(){
	device_chk()
})

$('header').on('mouseenter',function(){
	$(this).addClass('fixed')	
})
$('header').on('mouseleave',function(){
	if(scrolling <= 0){
		$(this).removeClass('fixed')
		console.log('마우스를 header에서 내렸을때')
	}
})

//함수 정의
function scroll_chk(){
	scrolling = $(window).scrollTop()
	if(scrolling > 0){
		$('header').addClass('fixed')
	}else{
		if($('hedaer').hasClass('sch_open') === false){
			if($('hedaer').hasClass('menu_pc') === false){ 
				$('header').removeClass('fixed')
			}
			
		}		
	}
}
scroll_chk() //함수실행 로딩된후 한번만
$(window).scroll(function(){
	scroll_chk() //스크롤 될때마다 1번씩 실행
})
// header .gnb .gnb_wrap ul.depth1 > li
// 오버한 li에 over 클래스가 추가..
// hedaer menu_pc 들어가야함
// header .tnb .search .search_open 를 클릭하면 hedaer에 sch_open 추가
// header .tnb .search .search_wrap .search_close를 클릭하면 header에 sch_open 삭제
// 브라우저 높이가
// after 태그는 클릭이벤트가 발생하지않음
$('hedaer. gnb .gnb_wrap ul.depth1 > li').on('mousenter, focusin',function(){
	if(device_status === 'pc'){
		if($('header').hasClass('sch_open') === false){
			$('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
			$(this).addClass('over')
			$('hedaer').addClass('menu_pc')
			$('hedaer').addClass('fixed')
		}
	}

})
$('header .tnb .search .search_open').on('click', function(){
	$('header').addClass('sch_open')
})

$('header .tnb .search .search_wrap .seach_close').on('click', function(){
	$('header').removeClass('sch_open')
})

$('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter, focusin',function(){
	$('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
	$(this).addClass('over')
	$('hedaer').addClass('menu_pc')
	$('hedaer').addClass('fixed')
})

$('header .gnb .gnb_wrap ul.depth1').on('mouseleave', function(){
	$('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
	$('hedaer').removeClass('menu_pc')
})

$(' header .gnb .gnb_wrap ul.depth1 > li:last-child ul.dept2 > li:last-child').on('focusout',function(){
	$('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
	$('hedaer').removeClass('menu_pc')
})

})