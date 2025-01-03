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

    $('header .gnb ul.depth1 > li > a').on('click', function(e){
        e.preventDefault(); // a 클릭 시 페이지 이동 방지
        
        // 클릭된 a의 부모 li의 자식 ul.depth2를 찾음
        var $depth2 = $(this).next('ul.depth2'); // a 태그 뒤의 ul.depth2 찾기
        
        // 해당 ul.depth2에 .open 클래스를 토글 (있으면 제거, 없으면 추가)
        if ($depth2.hasClass('open')) {
            $depth2.removeClass('open'); // 이미 열려 있으면 닫기
        } else {
            $depth2.addClass('open'); // 열려 있지 않으면 열기
        }
    });
    /* open 추가되고 arrow 방향바뀜 */
    $(document).ready(function () {
        $(".gnb ul.depth1 > li > a").on("click", function (e) {
            e.preventDefault(); // 링크 기본 동작 방지
            $(this).closest("li").toggleClass("open"); // .open 클래스 토글
        });
    });

    $('header .gnb_open').on('click',function(){
        $('header').toggleClass('menu_mo');
    })


});

