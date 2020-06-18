$(document).ready( function () {

    $(".subscribe-btns > input").mouseenter(function(){
        $(this).css("backgroundColor","#0f81a1")
    })



    jQuery('#demo').AccordionImageMenu({
        'border' : 1,
        'openItem':0,
        'duration': 400,
        'openDim': 310,
        'closeDim': 160,
        'effect': 'easeOutQuint',
        'fadeInTitle': false,
        'height':350 
      });	




})