$(document).ready(function(){
    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter', function(){
        $('header').addClass('menu_pc')
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('active')
        $(this).addClass('active')
    })
    
    $('header').on('mouseleave', function(){
        $('header').removeClass('menu_pc')
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('active')
    })
})