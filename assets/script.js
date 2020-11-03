$(document).ready(function () {
    
    // when user hovers over nav links, they should become bold, then return to normal weight after pointer leaves
    $("h3").mouseover(function() {
        $(this).addClass("font-medium").removeClass("font-normal");
    });
    $("h3").mouseout(function() {
        $(this).addClass("font-normal").removeClass("font-medium");
    });
});