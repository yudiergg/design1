/* 각각의 콘텐츠 페이지에서 작동될 스크립트 저장 */
$(document).ready(function () {

    $('.cnt_history .history_tap ul li').on('click', function () {
        // 모든 li에서 active 클래스 제거 및 title 속성 초기화
        $(".cnt_history .history_tap ul li").removeClass('active').removeAttr('title');
        // 클릭된 li에 active 클래스 추가 및 title 속성 설정
        $(this).addClass('active').attr('title', '활성됨');
    });

    $('.cnt_history .history_tap ul li button').on('click', function () {
        // 버튼의 data-target 속성값 가져오기
        const targetId = $(this).data('target');
        
        // 해당 ID의 위치로 스크롤 이동
        $('html, body').animate({
            scrollTop: $('#' + targetId).offset().top}, 500); // 500ms로 스크롤 애니메이션
    });

    // 페이지 로드 시 스크롤 위치가 0일 때 버튼을 숨김
    if ($(window).scrollTop() === 0) {
        $('.cnt_history .history_tap').fadeOut(0); // 페이지 로드 시 바로 숨기기
    }

    $(window).on('scroll', function () {
        const scrollTop = $(this).scrollTop();
        const historyTop = $('.cnt_history .history').offset().top;
        const historyHeight = $('.cnt_history .history').outerHeight();
        const windowHeight = $(window).height();
        
        // 스크롤이 0일 때 버튼 숨기기
        if (scrollTop === 0) {
            $('.cnt_history .history_tap').fadeOut(); // 속도조절
        }
        // .cnt_history .history 영역 밖으로 나갔을 때 버튼 숨기기
        else if (scrollTop > (historyTop + historyHeight - windowHeight)) {
            $('.cnt_history .history_tap').fadeOut(); 
        } else {
            $('.cnt_history .history_tap').fadeIn(); 
        }
    });

});