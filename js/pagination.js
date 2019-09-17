$(document).ready(function () {

    var prev = 1;

    function changeExpo(e){
        e.preventDefault();
        var nthOfClicked = $(this).attr('val');
        if(nthOfClicked != prev){
            $('.expos article:nth-child(' + nthOfClicked +')').addClass('active').removeClass('disable');
            $('.expos article:nth-child(' + prev +')').addClass('disable').removeClass('active');
            prev = nthOfClicked;
        }
    }

    $('.pagination').click(changeExpo);

});