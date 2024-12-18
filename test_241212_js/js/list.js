// html 로딩 다하고 단 한번 실행할수 있는 문법 이는 html에 js를 맨아래에 두면 웹 표준상 안됨
$(document).ready(function(){
    let slide_name
    /*
    .tour .list ul li 에 마우스를 오버하면
    오버한 li에 active 클래스를 추가함
    그래야 오버했을때 미리 구현한 오버한 화면을 표출시키기때문에
    active 클래스는 단 한개의 li에만 들어가야함
    li가 많은데 그중에 마우스를 오버한 li를 찾는방법 this
    $(this) --> 이벤트 대상 자기 자신
    >> 주의사항 $('.tour .list ul li a').on()로 줬다면 $(this)는 a가 됨...
    쉽게말해서 this는 내가 준 선택자를 가리키는거임
    >> 이전에 오버한 li를 찾 방법...
    오버한 li에 active 클래스를 주기전에 모든 li의 active 클래스를 지우면됨 ..
    */
    $('.tour .list ul li').on('mouseenter',function(){
        $('.tour .list ul li').removeClass('active') /* 모든 li의 active 클래스를 삭제 */
        $(this).addClass('active') /* 내가 선택한놈만 active 추가 */
    })
    $('.biz .list ul li').on('mouseenter',function(){
        $('.biz .list ul li').removeClass('active') /* 모든 li의 active 클래스를 삭제 */
        $(this).addClass('active') /* 내가 선택한놈만 active 추가 */
    })
    

    $('.banner .list ul li').on('mouseenter',function(){
        $('.banner .list ul li').removeClass('on')
        $('.banner .list ul li').addClass('off')
        $(this).addClass('on')
        $(this).removeClass('off')
    })

    $('.banner .list ul').on('mouseleave',function(){
        $('.banner .list ul li').removeClass('on')
        $('.banner .list ul li').removeClass('off')
    })
    //주석 컨트롤 물음표
    // slide_name = $('.slide .list ul li:nth-child(2)').attr('data-status')
    // console.log(slide_name)
    //slide_name = $('.slide .list ul li').attr('data-status', '')
    /* .slide .list ul li에 data-status 이 속성에
        오버한 li는 on값을, 오버하지 않은 다른 애들은 off 
        .slide. .list ul 에서 마우스를 아웃하면 모든 data-status 값을 삭제 */
    $('.slide .list ul li').on('mouseenter',function(){
        $('.slide .list ul li').attr('data-status','off')
        $(this).attr('data-status','on')
    })
    $('.slide .list ul').on('mouseleave',function(){
        $('.slide .list ul li').attr('data-status','')
    })
        
})

