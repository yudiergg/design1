/* header 와 footer 공통요소에 들어가는 스크립트 저장 모든 페이지에서 공통으로 작용하는 스크립트 */
$(document).ready(function(){
    let scrolling = 0
    let prev_scroll
    let window_w //브라우저 넓이
    let device_status //pc냐 모바일이냐 상태 표시


    /* header에 fixed랑 scroll_dwon 추가 시작 */
    /* 스크롤이 1이라도 되면 fixed 클래스 추가
        하단을 스크롤 되면 scroll_down 클래스 추가
        위로 스크롤 되면 scroll_down 클래스 삭제
        맨위로 갔을때 fixed, scroll_down 모두 삭제
        스크롤 방향 판단
        이전 스크롤값을 저장해두고 현재 스크롤 값을 빼면
    */
    function scroll_chk(){
        prev_scroll = scrolling
        scrolling = $(window).scrollTop()
        if(scrolling > 0){
            $('header').addClass('fixed')
            if((prev_scroll - scrolling < 0)){
                $('header').addClass('scroll_down')
            }
            else{
                $('header').removeClass('scroll_down')
            }
        }else{
            $('header').removeClass('fixed')
            $('header').removeClass('scroll_down')
        }

        // console.log(prev_scroll, scrolling)
    }

    scroll_chk() /* 함수 실행해야나오며 문서가 로딩되었을때 한번임 */
    $(window).scroll(function(){
        scroll_chk() // 스크롤할때마다 실행
    })

    function resize_chk(){
        window_w = $(window).width()
        if(window_w > 1000){
            device_status = "pc"
        }
        else{
            device_status = "mobile"
        }
    }

    resize_chk()
    $(window).resize(function(){
        resize_chk()
    })

    $('header .gnb ul.depth1 > li > a').on('mouseenter focusin', function(){
        if(device_status === "pc"){
            $('header').addClass('menu_pc')
            $('header').removeClass('over')
            $(this).addClass('over')
        }
    })
    $('header').on('mouseleave', function(){
        $('hedaer').removeClass('menu_pc')
        $('header .gnb ul.depth1 > li > a').removeClass('over')
    })
    // 메뉴 다음에 존재하는 링크에 포커스가 되었을대 메뉴 아웃
    $('header .global').on('focusin', function(){
        $('hedaer').removeClass('menu_pc')
        $('heaheader .gnb ul.depth1 > li > a').removeClass('over')
    })
    /*header .global open 추가*/
    /* header .global button title명 바꿈
        1번 클릭하면 열리고 다시 클릭하면 닫힘
        header global에 open 클래스가 있는지 체크*/
    $('header .global').on('click',function(){
        if(device_status === "pc"){
            if($(this).hasClass('open') === true){
                $(this).removeClass('open')
                $(this).find('button').attr('title','언어선택 열기 버튼')
            }
            else{
                $(this).addClass('open')
                $(this).find('button').attr('title','언어선택 닫기 버튼')
            }
        }
    })

    /* depth1 , depth2 open 빼줘야함
    header .gnb ul.depth1 > li > a 클릭했을때
    클릭 이벤트 삭제
    1차 메뉴 ul, li에 open 클래스를 추가하거나 삭제
    열려있으면 닫고, 닫혀있으면 나만 열어야함 */
    $('header .gnb ul.depth1 > li > a').on('click', function(e){
        if(device_status === "mobile"){
            e.preventDefault(); //a 클릭막기
            if($(this).parent().hasClass('open') === true){
                $(this).parent().removeClass('open')
            }
            else{
                $('header .gnb ul.depth1 > li > a').removeClass('open')
                $(this).parent().removeClass('open')
            }
        }
    })
    $('header .gnb_open').on('click',function(){
        $('header').toggleClass('menu_mo');
    })


});

