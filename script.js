$(function(){


    $(".openbtn").click(function () {

        var $menuBar= $('.menu-wrapper').find('.menu-inner');

        if($menuBar.hasClass('open')){
            $menuBar.removeClass('open')
            $menuBar.slideUp('fast');
        }else{
            $menuBar.addClass('open')
            $menuBar.slideDown('fast');
        };

        $(this).toggleClass('active');
    });


    $('.open-btn').click(function(){

        var $active=$(this).find('.histories');

        if($active.hasClass('open')){
            $active.removeClass('open')
            $active.slideUp();
            $(this).find('.history-span').text('+');
        }else{
            $active.addClass('open')
            $active.slideDown();
            $(this).find('.history-span').text('-');
        };

    });



});
