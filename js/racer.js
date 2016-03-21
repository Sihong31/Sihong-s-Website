$(document).ready(function(){
  $("#instructions").hide();
  $("#instructions").slideDown(1000)
  var movement1 = 0;
  var movement2 = 0;
  $('#start').on('click',function(){
    movement1 = 0;
    movement2 = 0;
    $('#player1').css('margin-left',"0")
    $('#player2').css('margin-left',"0")

    $(document).on('keyup',function(event){
      if(event.keyCode == 81){
        if(movement1 < 100){
          movement1 += 2;
          $('#player1').css('margin-left', movement1 + "%")
        }else{
          alert("Game over,Cartman wins!");
          $(document).unbind('keyup')
        }
      }
      if(event.keyCode == 80){
        if(movement2 < 100){
          movement2 += 2;
          $('#player2').css('margin-left', movement2 + "%")
        }else{
          alert("Game over,Butters wins!");
          $(document).unbind('keyup')
        }
      }
    })
  })
})