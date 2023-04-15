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


    $('#open-btn1').click(function(){

        var $active=$('#histories1');

        if($active.hasClass('open')){
            $active.removeClass('open')
            $active.slideUp('fast');
            $(this).find('.history-span').text('+');
        }else{
            $active.addClass('open')
            $active.slideDown('fast');
            $(this).find('.history-span').text('-');
        };

    });

    $('#open-btn2').click(function(){

        var $active=$('#histories2');

        if($active.hasClass('open')){
            $active.removeClass('open')
            $active.slideUp('fast');
            $(this).find('.history-span').text('+');
        }else{
            $active.addClass('open')
            $active.slideDown('fast');
            $(this).find('.history-span').text('-');
        };

    });



});
