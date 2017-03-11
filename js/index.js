function clearall(){
  $(".zero").text('');
  $(".first").text('');
  $(".second").text('');
  $(".third").text('');
  $(".fourth").text('');
  $(".fifth").text('');
  $(".sixth").text('');
  $(".seventh").text('');
  $(".eigth").text('');

}


$(document).ready(function() {

  var playerone = 0;
  var playertwo = 0;
  var t = 'X';

  $("#plaOne").text(playerone);
  $("#platwo").text(playertwo);


  var counter = 0;

  $(".game").on("click",function(e){


    // console.log();

    if((this).innerText == ""){

      counter ++ ;

      $(this).text(t);

      if(t=='X'){
        t = 'O';
      }else
        if(t=='O'){
          t = 'X';
        }


            winorlose();
    




    }

      //  $(this).attr('disabled', true);


  })


  function winorlose() {

    // get values
    var zero = $(".zero").text();
    var first = $(".first").text();
    var second = $(".second").text();
    var third = $(".third").text();
    var fourth = $(".fourth").text();
    var fifth = $(".fifth").text();
    var sixth = $(".sixth").text();
    var seven = $(".seventh").text();
    var eigth = $(".eigth").text();

    // checks
    if(zero == 'X' && first == 'X' && second == 'X'){
      // alert('first wins');

      $('.result').text('first wins ');
      playerone++;
      clearall();
      counter = 0;

    }else if (zero == 'O' && first == 'O' && second == 'O') {
      playertwo ++ ;
      $('.result').text('second wins ');
      clearall();
      counter = 0;

    }else if(zero == 'X' && third == 'X' && sixth == 'X'){
      playerone ++;
      $('.result').text('first wins ');
      clearall();
      counter = 0;

    }else if (zero == 'O' && third == 'O' && sixth == 'O') {
      playertwo ++;
      $('.result').text('second wins ');
      clearall();
      counter = 0;

      }
      else
      if(sixth == 'X' && seven == 'X' && eigth == 'X') {
        playerone ++;
        // alert('first wins');
        $('.result').text('first wins ');
        clearall();
        counter = 0;

      }else if (sixth == 'O' && seven == 'O' && eigth == 'O') {
        playertwo ++;
        $('.result').text('second wins ');
        clearall();
        counter = 0;


      }else if (second == 'X' && fifth == 'X' && eigth == 'X') {
        playerone ++;
        $('.result').text('first wins ');
        clearall();
        counter = 0;


      }else if (second == 'O' && fifth == 'O' && eigth == 'O') {
        playertwo++;
          $('.result').text('second wins ');
          clearall();
          counter = 0;

      }else if (first == 'X' && fourth == 'X' && seven == 'X') {
        playerone ++;
        $('.result').text('first wins ');
        clearall();
        counter = 0;

      }else if (eval(first == 'O') && eval(fourth == 'O') && eval(seven == 'O')) {
          playertwo ++;
          $('.result').text('second wins ');
          clearall();
          counter = 0;

      }else if (third == 'X' && fourth == 'X' && fifth == 'X') {
        playerone ++;
        $('.result').text('first wins ');
        clearall();
        counter = 0;


      }else if (third == 'O' && fourth == 'O' && fifth == 'O') {
        playertwo ++;
          $('.result').text('second wins ');
          clearall();
          counter = 0;

      }else if (zero == 'X' && fourth == 'X' && eigth == 'X') {
        playerone ++;
        $('.result').text('first wins ');
        clearall();
        counter = 0;


      }else if (zero == 'O' && fourth == 'O' && eigth == 'O') {
        playertwo ++;
          $('.result').text('second wins ');
          clearall();
          counter = 0;

      }else if (second == 'X' && fourth == 'X' && sixth == 'X') {
        plaOne ++;
        $('.result').text('first wins ');
        clearall();
        counter = 0;

      }else if (second == 'O' && third == 'O' && sixth == 'O') {
        playertwo ++;
          $('.result').text('second wins ');
          clearall();
          counter = 0;

      }

      // draw
      if(counter>9){
          $('.result').text('Match Draw');
      }

      $("#plaOne").text(playerone);
      $("#platwo").text(playertwo);

    }
});
