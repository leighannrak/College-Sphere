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
    $("#pop").css({display: 'inline', top: -290 - $("#pop").height(), left: 305, position:'relative'});
  });
  $("#two").click(function() {
    showPopupFor('morehouse');
    $("#pop").css({display: 'inline', top: -275 - $("#pop").height(), left: 248, position:'relative'});
  });
  $("#three").click(function() {
    showPopupFor('gsu');
    $("#pop").css({display: 'inline', top: -292 - $("#pop").height(), left: 299, position:'relative'});
  });
  $("#four").click(function() {
    showPopupFor('scad');
    $("#pop").css({display: 'inline', top: -40 - $("#pop").height(), left: 10, position:'relative'});
  });
  $("#five").click(function() {
    showPopupFor('oglethorpe');
    $("#pop").css({display: 'inline', top: -127 - $("#pop").height(), left: 334, position:'relative'});
  });
  $("#six").click(function() {
    showPopupFor('emory');
    $("#pop").css({display: 'inline', top: 14 - $("#pop").height(), left: 384, position:'relative'});
  });
  $("#seven").click(function() {
    showPopupFor('clark');
    $("#pop").css({display: 'inline', top: 120 - $("#pop").height(), left: 10, position:'relative'});
  });
  $("#mapp").click(function() {
      $('#pop').hide();
  });
}

$(document).ready(click);
