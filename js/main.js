jQuery(document).ready(function()
{
    "use strict";
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        console.log(top)
        if(top>=60)
        {
            $("header").addClass('second');
        }
        else
        if ($("header").hasClass('second'))
        {
           $("header").removeClass('second');
        }
        if(top>=350)
        {
            $(".paralaxtext").addClass('bounceInLeft');

        }
        else
        if ($(".paralaxtext").hasClass('bounceInLeft'))
        {
            $(".paralaxtext").removeClass('bounceInLeft')
        }


    });


});