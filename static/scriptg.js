function popup(){
  var areaID = $(this).attr('id');
  $("#myDiv").show()
}

function click(){
    $("#one").click(popup);
    $("#two").click(popup);
    $("#three").click(popup);
    $("#four").click(popup);

}

 $(document).ready(click)
