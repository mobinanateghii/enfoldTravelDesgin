$(document).ready( function () {

    $(".Highlight").hover(function () {
        $(this).css("opacity" , "1");
    },
    function(){
        $(this).css("opacity" , "0.6")
    })

    $(".subscribe-btns > input").mouseenter(function(){
        $(this).css("backgroundColor","#0f81a1")
    })

});




