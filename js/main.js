$(function(){
    $('#fullpage').fullpage({
		//배경색 삽입
        // sectionsColor: ['#fff', '#fff', '#f2f2f2', '#fff'],
        //각 섹션별 페이지 삽입(마크업에서 링크 연결하기)
        anchors: ['home', 'about', 'works', 'contact'],

		//Option here
        autoScrolling:true,
		scrollHorizontally: true,

        afterLoad: function(anchorLink, index){
            //about 섹션 on 클래스
            if(index==1){
                $('.home h3, .home h4').addClass('on');
                $('header').removeClass('on');
            }else if(index!==1){
                $('.home h3, .home h4').removeClass('on');
                $('header').addClass('on');
            };

            if(index==2){
                $('.about .about_inner h2').addClass('on');
                $('.about .about_inner .photo, .about .about_inner .abount_me').addClass('on');
            }else if(index!==2){
                $('.about .about_inner h2').removeClass('on');
                $('.about .about_inner .photo, .about .about_inner .abount_me').removeClass('on');
            };

            if(index==3){
                $('.works .works_inner h2').addClass('on');
                $('.works .works_inner .tab').addClass('on');
                $('.works .works_inner .list_wrap .list').addClass('on');
            }else if(index!==3){
                $('.works .works_inner h2').removeClass('on');
                $('.works .works_inner .tab').removeClass('on');
                $('.works .works_inner .list_wrap .list').removeClass('on');
            };
        }
	});

    //---------------------------------------------------------------------------------------

    //home의 m_btn 클릭시, 전체메뉴 나오게
    $('.m_btn').click(function(){
        $('.menu_wrap').animate({'right':0},1000);
        $('.cover').fadeIn();
    });

    //전체메뉴의 btn_close 클릭시, 전체메뉴 안나오게
    $('.btn_close').click(function(){
        $('.menu_wrap').animate({'right':'-100%'},1000);
        $('.cover').fadeOut();
    });

    //home의 m_btn 마우스 호버시, 라인 효과 나오게
    $('.line').mouseenter(function(){
        $('.line').addClass('on');
    });

    $('.line').mouseleave(function(){
        $('.line').removeClass('on');
    });

    //works의 tab 클릭시, on class 추가
    $('.tab li').click(function(){
        $(this).addClass('on').siblings().removeClass('on');

        let num = $(this).index();
        $('.list').hide();
        $('.list').eq(num).show();
    });

    //portfolio, mouse hover
    $('.list li').mouseenter(function(){
       $(this).find('.list_cover').addClass('on'); 
    });

    $('.list li').mouseleave(function(){
        $(this).find('.list_cover').removeClass('on'); 
     });
 


});