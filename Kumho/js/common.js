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

        // 메뉴에 마우스 오버하거나 포커스 되었을 때
    $('header .gnb ul.depth1 > li > a').on('mouseenter focusin', function() {
        if (device_status === "pc") {
            $('header').addClass('menu_pc');
            $('header').removeClass('over');
            $(this).addClass('over');
        }
    });

    // 헤더 영역에서 마우스가 나가면 초기화
    $('header').on('mouseleave', function() {
        $('header').removeClass('menu_pc');
        $('header .gnb ul.depth1 > li > a').removeClass('over');
    });

    // 글로벌 영역으로 포커스 이동 시 메뉴 초기화
    $('header .global').on('focusin', function() {
        $('header').removeClass('menu_pc');
        $('header .gnb ul.depth1 > li > a').removeClass('over');
    });


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

    $('header .gnb ul.depth1 > li > a').on('click',function(e){
        e.preventDefault(); // a 클릭 시 페이지 이동 방지
    
        let $depth2 = $(this).next('ul.depth2'); // a 태그 뒤의 ul.depth2 찾기
    
        if ($depth2.hasClass('open')) {
            // 닫힐 때
            $depth2.stop().slideUp(500,function(){
                $depth2.removeClass('open');
            });
        } else {
            // 열릴 때
            $depth2.stop().slideDown(500,function(){
                $depth2.addClass('open');
            });
        }
    });

    /* open 추가되고 arrow 방향바뀜 */
    $(document).ready(function(){
        $(".gnb ul.depth1 > li > a").on("click",function(e){
            e.preventDefault(); // 링크 기본 동작 방지
            $(this).closest("li").toggleClass("open"); // .open 클래스 토글
        });
    });

    $('header .gnb_open').on('click',function(){
        $('header').toggleClass('menu_mo');
    })

    /* list 오버하면 클래스에 over 추가되고 클릭하면 li class active가 추가됨*/
    $('.biz .list ul li').on('mouseenter',function(){
        // 기존의 모든 li 요소에서 'active' 클래스 제거
        $('.biz .list ul li').removeClass('active');
        // 현재 마우스가 진입한 li에 'active' 클래스 추가
        $(this).addClass('active');
        // .biz.list 요소에 'over' 클래스 추가
        $('.biz .list').addClass('over');
    });

    $('.biz .list ul li').on('mouseleave',function(){
        $('.biz .list ul li').removeClass('active');
        $('.biz .list').removeClass('over');
    })
    $('footer .top button').on('click',function(){
        $('html, body').animate({ scrollTop: 0 }, 600); // 800ms 동안 부드럽게 스크롤
    })

    $('footer .family_site button').on('click', function () {
        if ($(this).parent().hasClass('open')) {
            // 열려 있는 경우 닫기
            $(this).parent().removeClass('open'); // 부모의 'open' 클래스 제거
            $(this).next('.list').slideUp(); // 리스트 닫기
            $(this).attr('title', '열기'); // title 속성 업데이트
        } else {
            // 닫혀 있는 경우 열기
            $(this).parent().addClass('open'); // 부모에 'open' 클래스 추가
            $(this).next('.list').slideDown(); // 리스트 열기
            $(this).attr('title', '닫힘'); // title 속성 업데이트
        }
    });
});

