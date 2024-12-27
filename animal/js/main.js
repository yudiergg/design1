$(document).ready(function(){
	/* 변수선언 */
	let device_status
	let window_w
	let scrolling
	let tab_name

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
		if(window_w > 1100){
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
	if($('header').hasClass('sch_open') === false){
		$(this).removeClass('fixed')

	}
	}
	})

	//함수 정의
	function scroll_chk(){
	scrolling = $(window).scrollTop()
	if(scrolling > 0){
	$('header').addClass('fixed')
	}else if(($('hedaer').hasClass('sch_open') === false) && ($('hedaer').hasClass('menu_pc') === false)){
		$('header').removeClass('fixed')
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

	$('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin', function(){
	if(device_status === 'pc'){ //pc모드일때
	if($('header').hasClass('sch_open') == false){
		//이전에 오버했던 메뉴의 over를 삭제하기 위해서 모든 li의 over 지웠다가 오버한 애만 추가
		$('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
		$(this).addClass('over')
		$('header').addClass('menu_pc')
		$('header').addClass('fixed')
		// console.log('오버다')
	}
	}
	})
	$('header .gnb .gnb_wrap ul.depth1').on('mouseleave', function(){
	$('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
	$('header').removeClass('menu_pc')
	// console.log('아웃이다')
	})

	$('header .gnb .gnb_wrap ul.depth1 > li:last-child ul.depth2 > li:last-child').on('focusout', function(){
	$('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
	$('header').removeClass('menu_pc')
	// console.log('포커스 날라감')
	})

	// header .gnb .gnb_open header에 menu_mo 클래스 추가
	// header .gnb .gnb_close 를 클릭하면 hedaer에서 menu_mo 클래스 삭제
	// header .gnb .gnb_wrap .depth1 > li:has(ul.depth2) > a
	// 1차 메뉴 li에 open이라는 클래스를 추가

	$('header .gnb .gnb_open').on('click',function(){
	$('header').addClass('menu_mo')
	$('html, body').css({overflow : 'hidden', height : $(window).height()}).bind('scroll touchmove mousewheel', function(e){e.preventDefault();e.stopPropagation();return false;},function(){passive:false});
	})
	
	$('header .gnb .gnb_close').on('click',function(){
	$('header').removeClass('menu_mo')
	$('html, body').css({overflow : 'visible', height : 'auto'}).unbind('scroll touchmove mousewheel');
	})
	
	$('header .gnb .gnb_wrap ul.depth1 > li:has(ul.depth2) > a').on('click',function(e){
	if(device_status === 'mobile'){
		if($(this).parent().hasClass('open') === false){
			e.preventDefault(); //href를 작동 안하게 막는 코드
			$('header .gnb .gnb_wrap ul.depth1 > li').removeClass('open')
			$(this).parent().addClass('open')
	}
	}else{
		$('header .gnb .gnb_wrap ul.depth1 > li').removeClass('open')
	}
	$('header .gnb .gnb_wrap ul.depth1 > li').removeClass('open')
	})

	/* 가족을 탭메뉴 01 */
	const find_panel01_swiper = new Swiper('.find .panel01 .swiper', { /* 팝업을 감싼는 요소의 class명 */
		slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */ //css 넓이 지정한대로 보이게할려면 auto
		spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
		breakpoints: {
			641: {    /* 1000 ~ 641px 이상일때 적용 */
				slidesPerView: 3,
				spaceBetween: 24,
			},
			1001: {    /* 1001px 이상일때 적용 */
			slidesPerView: 4,
			spaceBetween: 24,
		},
		},
		loop: true,
		navigation: {
			nextEl: '.find .panel01 .tab_content .next',
			prevEl: '.find .panel01 .tab_content .prev',
		},
	});

	/* 가족을 탭메뉴 02 */
	const find_panel02_swiper = new Swiper('.find .panel02 .swiper', { /* 팝업을 감싼는 요소의 class명 */
		slidesPerView: 2, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
		spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
		breakpoints: {
			641: {    /* 1280px 이상일때 적용 */
				slidesPerView: 4,
				spaceBetween: 24,
			},
		},
		loop: true,
		navigation: {
			nextEl: '.find .panel02 .tab_content .next',
			prevEl: '.find .panel02 .tab_content .prev',
		},
	});
	
	$('.find .tab_list ul li').on('click', function(){
		$('.find .tab_list ul li').removeClass('active')
		$(this).addClass('active')
		$('.find .tab_list ul li button').attr('title','')
		$(this).find('button').attr('title','선택됨')
		tab_name = $(this).attr('data-tab')
		console.log(tab_name)
		$('.find .tab_content .tab_panel').removeClass('active')
		$('.find .tab_content').find('[data-tab="'+tab_name+'"]').addClass('active')
		
	})
	/* adopt 색션 팝업창*/
	const adopt_swiper = new Swiper('.adopt .swiper', { /* 팝업을 감싼는 요소의 class명 */
	slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
	spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
	breakpoints: {
		641: {   
			slidesPerView: '3',
			spaceBetween: 24,
		},
		1001: {   
			slidesPerView: '6',
			spaceBetween: 24,
		},
	},
	centeredSlides: false, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
	loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

	navigation: {
		nextEl: '.adopt .btn_wrap .next',
		prevEl: '.adopt .btn_wrap .prev',
	},
	});
	console.log('너이상없지?')

	const reivew = new Swiper('.reivew .swiper', { /* 팝업을 감싼는 요소의 class명 */
	slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
	spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
	breakpoints: {
		1300: {   
			slidesPerView: '4',
			spaceBetween: 24,
		},
	},
	centeredSlides: false, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
	loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
	});
	console.log('너이상없지?')

})
	