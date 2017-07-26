
function changeOverlay () {
    var randomNum = Math.round(Math.random() * 36) - 1;
    $('.title span:eq(' + randomNum + ')').animate({ "opacity" : .3 });
    setTimeout(function() {
        $('.title span:eq(' + randomNum + ')').animate({ "opacity" : .6 });
        changeOverlay();
    }, 10);
	    // setTimeout(function() {
      //   $('.title span:eq(' + randomNum + ')').animate({ "opacity" : .1 });
      //   //changeOverlay();
        //setTimeout();
    // }, 50);

}

$(document).ready(function() {
    changeOverlay();
    $('.georgia-area').onclick(handleGeorgiaClick);
});
