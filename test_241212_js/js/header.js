$(document).ready(function(){
    let scrolling = $(window).scrollTop()
    /* html 모두 로딩된후에 실행할거임
        1. 메뉴에 마우스를 올렸을때
        이벤트 대상 : header .gnb .gnb_wrap ul.depth1 li
            이벤트 핸들러 -- mouseenter
            header에 on클래스를 추가 --addClass
        2. header에서 마우스를 내렸을때 --mouseleave
            header에 on클래스를 삭제 --removeClass
        3. 스크롤을 내렸을때 --
            header에 on클래스를 추가
        4. 맨위로 스크롤 되었을때 
            header에 on클래스를 삭제*/
    $('header .gnb .gnb_wrap ul.depth1 li').on('mouseenter',function(){
        $('header').addClass('on')
    })
    //console.log(scrolling)
    $('hedaer').on('mouseleave', function(){
        if(scrolling == 0){
            $('hedaer').removeClass('on')
        }
    })
    /*헤더 gnb li영역을 감시하다가 마우스 호버가되면 헤더에 on 클래스를 더해라*/ 
    
    function scroll_chk(){ /* 정의 해줌 스크롤을 컴포넌트로 만든다고 생각하셈 똑같은거 계속쓸때 재사용하기 편함*/
        scrolling = $(window).scrollTop() 
        console.log(scrolling)
        if(scrolling > 0){
            console.log('스크롤이 0보다크다')
            $('header').addClass('on')
        }else{
            $('header').removeClass('on')
            if(scrolling > 0){
        
            }
    }
    }

    scroll_chk() /*내가 위에서 함수 정의한거 값 가지고 실행해줌*/

    $(window).scroll(function(){ /* 브라우저가 스크롤 될대마다 1번 실행*/
        scroll_chk()
    })

    $('aside .top').on('click', function(){
		$('html, body').animate({
		  scrollTop : 0
		}, 500);
	});

})

