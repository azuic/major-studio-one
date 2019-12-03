$(document).ready(function() {



  var padOne = new Audio('https://d1tutlfztia4ba.cloudfront.net/sounds/1.wav');
  $('.pad-1').mousedown(function() {
    padOne.load()
    padOne.play();
  });

  var padTwo = new Audio('https://d1tutlfztia4ba.cloudfront.net/sounds/2.wav');
  $('.pad-2').mousedown(function() {
    padTwo.load();
    padTwo.play();
  });

  var padThree = new Audio('https://d1tutlfztia4ba.cloudfront.net/sounds/3.wav');
  $('.pad-3').mousedown(function() {
    padThree.load();
    padThree.play();
  });

  var padFour = new Audio('https://d1tutlfztia4ba.cloudfront.net/sounds/4.wav');
  $('.pad-4').mousedown(function() {
    padFour.load();
    padFour.play();
  });

  var padFive = new Audio('https://d1tutlfztia4ba.cloudfront.net/sounds/5.wav');
  $('.pad-5').mousedown(function() {
    padFive.load();
    padFive.play();
  });

  var padSix = new Audio('https://d1tutlfztia4ba.cloudfront.net/sounds/6.wav');
  $('.pad-6').mousedown(function() {
    padSix.load();
    padSix.play();
  });

  var padSeven = new Audio('https://d1tutlfztia4ba.cloudfront.net/sounds/7.wav');
  $('.pad-7').mousedown(function() {
    padSeven.load();
    padSeven.play();
  });

  var padEight = new Audio('https://d1tutlfztia4ba.cloudfront.net/sounds/8.wav');
  $('.pad-8').mousedown(function() {
    padEight.load();
    padEight.play();
  });

  var padNine = new Audio('https://d1tutlfztia4ba.cloudfront.net/sounds/9.wav');
  $('.pad-9').mousedown(function() {
    padNine.load();
    padNine.play();
  });

  var padTen = new Audio('https://d1tutlfztia4ba.cloudfront.net/sounds/10.wav');
  $('.pad-10').mousedown(function() {
    padTen.load();
    padTen.play();
  });

  var padEleven = new Audio('https://d1tutlfztia4ba.cloudfront.net/sounds/11.wav');
  $('.pad-11').mousedown(function() {
    padEleven.load();
    padEleven.play();
  });

  var padTwelve = new Audio('https://d1tutlfztia4ba.cloudfront.net/sounds/12.wav');
  $('.pad-12').mousedown(function() {
    padTwelve.load();
    padTwelve.play();
  });


  $(window).keydown(function(e) {
    var code = e.keyCode;
    var kc = String.fromCharCode(e.keyCode);
    $("div[data-code='"+code+"']").addClass("active")
    console.log(code);

    switch(kc) {
      case "R":
        padOne.load();
        padOne.play();
        break;
      case "T":
        padTwo.load();
        padTwo.play();
        break;
      case "Y":
        padThree.load();
        padThree.play();
        break;
      case "U":
        padFour.load();
        padFour.play();
        break;
      case "F":
        padFive.load();
        padFive.play();
        break;
      case "G":
        padSix.load();
        padSix.play();
        break;
      case "H":
        padSeven.load();
        padSeven.play();
        break;
      case "J":
        padEight.load();
        padEight.play();
        break;
      case "V":
        padNine.load();
        padNine.play();
        break;
      case "B":
        padTen.load();
        padTen.play();
        break;
      case "N":
        padEleven.load();
        padEleven.play();
        break;
      case "M":
        padTwelve.load();
        padTwelve.play();
        break;
      default:
    }
  });

  $(window).keyup(function(e) {
    var code = e.keyCode;
    $("div[data-code='"+code+"']").removeClass("active");
  });

});
