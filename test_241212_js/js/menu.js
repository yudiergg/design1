$(document).ready(function(){
    // >> 키보드 접근성 --- 마우스 오버가 아니라 키보드로 tab키로 선택하고 이동할수있게 만들어야함

    let device_status
    let window_w
    let menu_status
    function device_chk(){ //함수정의
        window_w = $(window).width()
        if(window_w > 640){
            device_status = 'pc'
        }else{
            device_status = 'mobile' 
        }
    }

    device_chk() //html 문서가 로딩되고 나면 1번 실행
    $(window).resize(function(){ //브라우저가 리사이즈 될대마다 1번실행
        device_chk()
    })

    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter', function(){
        if(device_status ==='pc'){
            $('header').addClass('menu_pc')
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('active')
            $(this).addClass('active')
        }
    })
    
    $('header').on('mouseleave focusout' , function(){
        $('header').removeClass('menu_pc')
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('active')
    })
    // 키보드 이동으로 메뉴로 아웃시키는것
    $('header .gnb .gnb_wrap ul.depth1 > li:last-child > ul.depth2 > li:last-child').on('focusout',function(){
        $('header').removeClass('menu_pc')
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('active')
    })

    $('header .gnb .gnb_wrap ul.depth1 > li > a').on('click',function(e){
        if(device_status === 'mobile'){
            e.preventDefault(); // a의 이벤트 즉 href 의 작동을 중지시킴
            menu_status = $(this).parent().hasClass('open')
            console.log(menu_status)
            if(menu_status === true){
                $(this).parent().removeClass('open')
            }else{
                $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('open')
                $(this).parent().removeClass('open')
            }
        }
    })
    /*  header .gnb_open 를 클릭하면 header에 menu_mo 추가
        header .gnb_close 를 클릭하면 header에 menu_mo 빼기
    */

        $('header .gnb. gnb_open').on('click',function(){
            $('header').addClass('menu_mo')
        })
        $('header .gnb. gnb_close').on('click',function(){
            $('header').removeClass('menu_mo')
        })
})