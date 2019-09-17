$(document).ready(function () {

    $(window).scroll(function() {
        changeBGcolor();
    });

    function changeBGcolor() {
        console.log($(window).scrollTop());
        if($(window).scrollTop() > 150){
            console.log('yes');
            $('header, #mobile_nav').addClass('activated');
        }
        else{
            console.log('no');
            $('header, #mobile_nav').removeClass('activated');
        }
    }

})