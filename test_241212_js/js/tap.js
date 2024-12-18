$(document).ready(function(){
    /*  1. 클릭한 .news .tab_list ul li .actvie 클래스 추가
        2. 클릭한 .news .tab_list ul li button title="선택됨"이라고 써줘야함
        3. 클릭한 .news .tab_list ul li의 data-panel값을 받아서
        .news .tab_contents .tab_pannel 중에 data-paenl값이 같은 것에 active 클래스 추가

        4. 이전에 보였던 .news .tab_contents .tab_pannel.actvie 클래스 삭제
        5. .news .tab_list ul li button title="선택됨" 삭제
        6. .news .tab_contents .tab_pannel active 클래스 삭제

        >> 이미 선택된거 작동하면안됨
        1.
    */


    let curr_panel = 'news1' /*현재클릭 메뉴이름*/
    let prev_panel  /*이전 클릭메뉴이름*/
    let cont_h

    $('.news .tab_list ul li').on('click',function(){
        // if($(this).hassClass('active') == false){
        //     console.log('active 클래스 없음')
        // }else{
        //     console.log('active 클래스 있음')
        // }
        
    

        if($(this).hasClass('active') == false){ //이미 선택된 버튼을 클릭한게 아니라면
            prev_panel = curr_panel //다른 탭을 클릭하자마자 오버되어 있던 탭의 이름을 이전탭이름으로 저장
            curr_panel = $(this).attr('data-panel')
            //이전에 선택되었던 패널

            $('.news .tab_list ul li[data-panel="'+prev_panel+'"]').removeClass('active')
            $('.news .tab_list ul li[data-panel="'+prev_panel+'"]').find('button').attr('title','선택됨')
            $('.news .tab_contents .tab_pannel[data-panel="'+prev_panel+'"]').removeClass('active')

            $(this).removeClass('active')
            $(this).find('button').attr('title','선택됨')
            $(this).addClass('active')
        }
    })
    /* tap_contents 앱솔루트여서 감싸고 있는 요소가 높이를 인식하지 못함
        active 클래스가 들어간 button의 높이와 tab_content의 높이를 합쳐서 Ul에 줘야함
    */
    function notice_h(){
        cont_h = $('.notice .list ul li').height() + $('.notice .list ul li.active .tap_contents').height()
        $('.notice .list ul').height(cont_h)
    }//function
    
    // 맨처음에 한번 로딩됬을때 실행
    notice_h()
    // 브라우저가 리사이즈될때마다
    $(window).resize(function(){
        notice_h()
        console.log('리사이즈')
    })

    $('.notice .list ul li').on('click',function(){ // 클릭했을때
        if($(this).hasClass('active') === false){ // notice .list ul li 중에 class active이 아닐때
            $('.notice .list ul li').removeClass('active') // 선택자에 active 클래스를 빼ㅏㄹ
            $(this).addClass('active')
            cont_h = $(this).find('button').height() + $(this).find('.tap_contents').height()
            console.log(cont_h)
            $('.notice .list ul').height(cont_h)
        }
    })
})