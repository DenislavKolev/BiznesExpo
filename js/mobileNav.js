$(document).ready(function(){

    $('#mobile_nav').click(openNav);
    $('#close').click(closeNav)

    function openNav() {

        $('#mobile_nav').css('display', 'none');

        $('header nav, #flagsNav, #subPagesNav li').css('display', 'block');
        $('header nav').css({
            textAlign: 'center',
            backgroundColor: 'black'
        });
        $('#subPagesNav').css({
            width: '100%',
            float: 'none'
        });
        $('#close').css({
            display: 'inline-block',
            position: 'absolute',
            right: '.5em'
        })
    }

    function closeNav() {
        $('#mobile_nav').css('display', 'block');
        $('header nav').css('display', 'none');
    }
});