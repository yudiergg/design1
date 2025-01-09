/* 각각의 콘텐츠 페이지에서 작동될 스크립트 저장 */
$(document).ready(function () {

    $(window).on('scroll', function () {
        const scrollTop = $(window).scrollTop(); // 현재 스크롤 위치 가져오기
        console.log(scrollTop);
    });

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

    const targetHeight = 5140; // 사라지게 할 스크롤 높이 (픽셀 단위)

    $(window).on('scroll', function () {
        // 현재 스크롤 위치 확인
        const scrollTop = $(this).scrollTop();

        // 스크롤 높이에 따라 요소 숨기기/보이기
        if (scrollTop > targetHeight) {
            $('.cnt_history .history_tap').fadeOut(300); // 300ms로 서서히 사라짐
        } else {
            $('.cnt_history .history_tap').fadeIn(300); // 300ms로 서서히 나타남
        }
    });

});