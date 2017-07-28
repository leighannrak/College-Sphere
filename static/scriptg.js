function showPopupFor(idOfCollegeInfo) {
  $('#pop').show();

  // Hide everything in the popup before showing the college we want.
  $('#pop > *').hide();
  $('#' + idOfCollegeInfo).show();
  // Based on which college was clicked, figure out how to style
  // the popup to put it in the right coordinates.
}

function click(){
  $("#one").click(function() {
    showPopupFor('gt');
    $("#pop").css({display: 'inline', top: -220 - $("#pop").height(), left: 305, position:'relative'});
  });
  $("#two").click(function() {
    showPopupFor('morehouse');
    $("#pop").css({display: 'inline', top: -215 - $("#pop").height(), left: 288, position:'relative'});
  });
  $("#three").click(function() {
    showPopupFor('gsu');
    $("#pop").css({display: 'inline', top: -42 - $("#pop").height(), left: 328, position:'relative'});
  });
  $("#four").click(function() {
    showPopupFor('scad');
    $("#pop").css({display: 'inline', top: 40 - $("#pop").height(), left: 10, position:'relative'});
  });
  $("#five").click(function() {
    showPopupFor('oglethorpe');
    $("#pop").css({display: 'inline', top: -127 - $("#pop").height(), left: 409, position:'relative'});
  });
  $("#six").click(function() {
    showPopupFor('emory');
    $("#pop").css({display: 'inline', top: 14 - $("#pop").height(), left: 400, position:'relative'});
  });
  $("#seven").click(function() {
    showPopupFor('clark');
    $("#pop").css({display: 'inline', top: 210 - $("#pop").height(), left: 10, position:'relative'});
  });
  $("#one1").click(function() {
    showPopupFor('hang1');
    $("#pop").css({display: 'inline', top: -310 - $("#pop").height(), left: 348, position:'relative'});
  });
  $("#two2").click(function() {
    showPopupFor('hang2');
    $("#pop").css({display: 'inline', top: -289 - $("#pop").height(), left: 302, position:'relative'});
  });
  $("#three3").click(function() {
    showPopupFor('hang3');
    $("#pop").css({display: 'inline', top: -310 - $("#pop").height(), left: 308, position:'relative'});
  });
  $("#four4").click(function() {
    showPopupFor('hang4');
    $("#pop").css({display: 'inline', top: -310 - $("#pop").height(), left: 278, position:'relative'});
  });
  $("#five5").click(function() {
    showPopupFor('hang5');
    $("#pop").css({display: 'inline', top: -180 - $("#pop").height(), left: 342, position:'relative'});
  });
  $("#mapp").click(function() {
      $('#pop').hide();
  });
}

$(document).ready(click);
