$(document).ready(function(){

    /* 공통요소 */    
    let scrolling = $(window).scrollTop() // 현재 스크롤 된 값
    let window_h = $(window).height() //브라우저 높이
    $(window).scroll(function(){
        scrolling = $(window).scrollTop()
    })
    $(window).resize(function(){
        window_h = $(window).height()
    })

    /* 해당 변수값의 선택자들만 조정하면됨 */
    let obj_wrap = $('.txt_slide') //애니메이션이 들어갈 글자 전체를 감싸는 요소
    let obj_row = $('.txt_slide .row') // 애니메이션이 들어가는 글자 1줄
    let obj_row_sub = 'span' // 나중에 나타나는 absolute 글자의 선택자

    let scroll_gap // 시작부터 스크롤 된 값
    let scroll_percent // 스크롤 된 값을 퍼센트로 
    let scroll_area // 스크롤 적용 범위
    let ani_start // 애니메이션 시작점 기준이 줄단위
    let ani_end // 애니메이션 종료점
    let obj_w // 넓이가 조절되는 오브젝트
    let obj_leng = obj_row.length //줄수계산
    let obj_area_start // 글자 전체의 애니메이션 시작점
    let obj_area_end // 글자 전체의 애니메이션 종료점
    let obj_area_h //1줄 애니메이션이 들어갈 높이
    let start_ratio = 0.3 // 애니메이션 시작 위치 조정값
    let end_ratio = 0.3 // 애니메이션 종료 위치 조정값

    function obj_count(){
        obj_area_start = obj_wrap.offset().top - window_h + (window_h * start_ratio)
        obj_area_end = obj_wrap.offset().top + obj_wrap.height() - (window_h * end_ratio)
        obj_area_h = (obj_area_end - obj_area_start) / obj_leng
            
        for(i=0; i<obj_leng; i++){ /* 반복문 */
            txt_slide(i)
        }
    }
    
    function txt_slide(num) {
        ani_start = obj_area_start + (obj_area_h * num);
        ani_end = obj_area_start + (obj_area_h * (num + 1));
        obj_w = $(obj_row).eq(num).find(obj_row_sub); // 현재 줄의 span 선택
    
        if (scrolling <= ani_start) {
            scroll_percent = 0; // 시작점 이전이면 0%로 설정
        } else if (scrolling > ani_start && scrolling < ani_end) {
            // 스크롤이 시작점과 종료점 사이에 있을 때
            scroll_gap = scrolling - ani_start;
            scroll_area = ani_end - ani_start;
            scroll_percent = (scroll_gap / scroll_area) * 100; // 스크롤 비율 계산
        } else {
            scroll_percent = 100; // 종료점을 넘어가면 100%로 설정
        }
        obj_w.width(scroll_percent + '%'); // 계산된 퍼센트로 width 설정
    }

    obj_count() //문서 실행되면 1번 실행
    $(window).scroll(function(){ // 스크롤 할때 마다
        obj_count()
    })
    $(window).resize(function(){ // 브라우저가 리사이즈가 될때
        obj_count()
    })

    /* width 값 늘어나는  애니메이션
        width 50% ~ 100% 늘어나는 애니메이션
        언제 시작 종료 정해야함
        시작은 브라우저 높이가 하단에서 올라왔을때
        종료는 영역이 브라우저 중간쯤 올라왔을때
        넓이가 50% 일때 > 50% ~ 100% 유지하는 구간
        예를 들어 시작 100 종료가 500이라고 하면
        >> 100 ~ 500 사이가 늘어나는거임 
        >> 400이 스크롤 되는 동안 나머지 %
        >> 내가 300px 스크롤 함
        >> 300 - 100 = 200/400*100 = 50
        >>> 최초의 넓이 50 ~ 100% = 50%가 증가 >> 그 증가값의 50%
         */

    let ph_start // 애니메이션 영역 시작점
    let ph_end // 애니메이션 영역 종료점
    let ph_name = $('.photo_resize .photo') // 요소를 감싸는 이름
    let ph_start_width = 50
    let ph_end_widht = 100
    let ph_gap = ph_end - ph_start

    function photo_resize(){
        ph_start = ph_name.offset().top - window_h + (window_h * 0.1)
        ph_end = ph_name.offset().top
        //console.log('스크롤값',scrolling, '시작점',ph_start, '종료점',ph_end)
        if(scrolling < ph_start){
            ph_widht = ph_start_width
            // console.log('아직 작음')

        }else if(scrolling < ph_end){
            ph_gap = ph_end - ph_start
            ph_widht = (scrolling - ph_start)/ph_gap
            ph_widht = (ph_widht * (ph_end_widht - ph_start_width)) + ph_start_width
            // console.log('늘어나는중')

        }else{
            ph_widht = ph_end_widht
            // console.log('다 늘어남')
        }
        ph_name.width(ph_widht + '%')
    }

    $(window).scroll(function(){ // 스크롤 할때 마다
        photo_resize()
    })
    $(window).resize(function(){ // 브라우저가 리사이즈가 될때
        photo_resize()
    })

    /* 스크롤되면 배경이 검은색으로 됨
    스크롤 시작점 일때는 bg_change 클래스 black 이 추가
    스크롤 끝나는 높이일때 bg_change에 클래스 black이 사라짐
    스크롤 엔드에서 시작점으로 다시 올라갈경우 다시 bg_chage에 black이 추가 */
    
    let bg_name = $('.bg_change')
    let bg_class = 'black'
    let bg_start // 배경색 바꿔주는거

    function bg_chage(){
        bg_start = bg_name.offset().top - (window_h * 0)
        // console.log('스크롤',scrolling, '.bg_chage top값', bg_start)
        if(scrolling < bg_start){
            bg_name.removeClass(bg_class)
        }else{
            bg_name.addClass(bg_class)
        }
    }
    bg_chage()

    $(window).scroll(function(){
        bg_chage()
    })
    $(window).resize(function(){
        bg_chage()
    })

    /* 동영상 컨텐츠 시작점은 default
    1. .bg_change .video_fit .movie_
        - 브라우저 상단에 도달하기이전 data-status="before"
        - 도달해서 스크롤 되는 중 data-status="fixed"
        - 이미지 스크롤 되어서 화면 밖으로 사라지는 경우 data-status="after"
        스크롤되는 도중 이벤트가 실행될때 영역이 천천히 늘어나거나 천천히 줄어들거임
        스크롤 1000일때 고정 시작 
        스크롤 2000일때 고정 종료 ---- 스크롤 1000동안 사이즈가 리사이즈됨
        리사이즈 시작 값은 80 
        리사이즈 종료 값은 100
        예를 들어 1500일때 현재 넓이가 얼마
        vf+area_gap = 2000(vf_end) - 1000(vf_satrt)
        1500(scrolling) - 1000(vf_satrt) = 500 / 1000(vf_area_gap) =  0.5
        100(vf_resize_end) - 80(vf_resize_start) = 20 * 0.5 = 10 */

    let vf_area_name = $('.bg_change .video_fit .movie_h')
    let vf_start // 영역 고정 시작점
    let vf_end // 영역 고정 종료점
    let vf_resize_name = $('.bg_change .video_fit .movie_h .movie .movie_inner')
    let vf_resize_start = 80
    let vf_resize_end = 100
    let vf_resize_w // 리사이즈 될때 계산한 넓이값
    let vf_scroll_per // 스크롤된 값의 퍼센트
    let vf_area_gap // 리사이즈를 계산해야할 스크롤 구간값

    function video_fixed(){
        vf_start = vf_area_name.offset().top
        vf_end = vf_area_name.offset().top + vf_area_name.height() - window_h
        vf_area_gap = vf_end - vf_start

        if(scrolling < vf_start){
            console.log('아직 아니다')
            vf_area_name.attr('data-status', 'before') //기존값을 지우고 내가 준값으로 교체
            vf_resize_w = vf_resize_start
        }else if(scrolling < vf_end){
            console.log('고정')
            vf_area_name.attr('data-status', 'fixed')
            vf_scroll_per = (scrolling - vf_start) / vf_area_gap
            vf_resize_w = ((vf_resize_end - vf_resize_start) * vf_scroll_per) + vf_resize_start
            vf_resize_w = vf_resize_w * 0.8
            if(vf_resize_w < vf_resize_end){ //end 값 이상 못늘어나게 하는거
                vf_resize_w = vf_resize_end
            }
        }else{
            console.log('끝')
            vf_area_name.attr('data-status', 'after')
            vf_resize_w = vf_resize_end
        }
        vf_resize_name.width(vf_resize_w + '%')
        vf_resize_name.height(vf_resize_w + '%')
    }


    video_fixed() //함수 괄호는 브라우저 로딩될때 한번임

    $(window).scroll(function(){
        video_fixed() 
    })
    $(window).resize(function(){
        video_fixed() 
    })

    

})