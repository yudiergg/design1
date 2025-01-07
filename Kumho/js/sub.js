/* sub에만 있는 공통요소에서 작동되는 스크립트 */
$(document).ready(function() {
    // depth1의 li를 클릭했을 때
    $("header .gnb ul.depth1 > li").on("click", function() {
        // 모든 li에서 active 클래스 제거
        $("header .gnb ul.depth1 > li").removeClass("active");
        // 현재 클릭된 li에 active 클래스 추가
        $(this).addClass("active");
    });
});