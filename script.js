// variables

var score = 0; //set score to 0
var total = 10; //total nmumber of questions
var point = 1; //points per correct answer
var highest = total * point;



//init
console.log('script js loaded')
function init() {
    //set correct answers
    
    sessionStorage.setItem('a1', "b");
    sessionStorage.setItem('a2', "a");
    sessionStorage.setItem('a3', "c");
    sessionStorage.setItem('a4', "d");
    sessionStorage.setItem('a5', "b");
    sessionStorage.setItem('a6', "d");
    sessionStorage.setItem('a7', "b");
    sessionStorage.setItem('a8', "b");
    sessionStorage.setItem('a9', "d");
    sessionStorage.setItem('a10', "d");

}

// timer

// var i = 1;
// $("#startButton").click(function (e) {
//     setInterval(function () {
//         $("#stopWatch").html(i);
//         i++;
//     }, 1000);
// });
 
// $("#resetButton").click(function (e) {
//     i = 0;
// });



 //hide all questions to start
$(document).ready(function() {
   
 $('.questionForm').hide();

 //show question 1
 $('#question1').show();

$('.questionForm #submit').click(function() {
    //get data attribute
    current = $(this).parents('form:first').data('question');
    next = $(this).parents('form:first').data('question')+1;
    
    //hide all questions
    $('.questionForm').hide();

    //show next question in a cool way
    $('#question'+next+'').fadeIn(400);
    process(''+current+'');
return false;
});


});

//process answer function

function process(n) {
    //  get input value
    var submitted = $('input[name=question'+n+']:checked').val();
    if(submitted == sessionStorage.getItem('a'+n+'')) {
        score++;
    }


if (n == total) {
    $('#results').html('<h3>Your score is: '+score+ ' out of '+highest+'!</h3> <button onclick="myScore()">Add Your Name To Scoreboard!</a>')
}
return false;
}

window.yourPoints = function(){
    return n;
}




function myScore(){
  
        var person = prompt("Please enter your name", "My First Name");
        if (person != null) {
          document.getElementById("myScore").innerHTML =
            person+ " " +score
        }
}


// function showTime() {
//     var d = new Date();
//     document.getElementById("clock").innerHTML = d.toLocaleTimeString();
// }
// setInterval(showTime, 1000);

var x;
var startstop = 0;

window.onload = function startStop() { /* Toggle StartStop */

  startstop = startstop + 1;

  if (startstop === 1) {
    start();
    document.getElementById("start").innerHTML = "Stop";
  } else if (startstop === 2) {
    document.getElementById("start").innerHTML = "Start";
    startstop = 0;
    stop();
  }

}


function start() {
  x = setInterval(timer, 10);
} /* Start */

function stop() {
  clearInterval(x);
} /* Stop */

var milisec = 0;
var sec = 0; /* holds incrementing value */
var min = 0;
var hour = 0;

/* Contains and outputs returned value of  function checkTime */

var miliSecOut = 0;
var secOut = 0;
var minOut = 0;
var hourOut = 0;

/* Output variable End */


function timer() {
  /* Main Timer */


  miliSecOut = checkTime(milisec);
  secOut = checkTime(sec);
  minOut = checkTime(min);
  hourOut = checkTime(hour);

  milisec = ++milisec;

  if (milisec === 100) {
    milisec = 0;
    sec = ++sec;
  }

  if (sec == 60) {
    min = ++min;
    sec = 0;
  }

  if (min == 60) {
    min = 0;
    hour = ++hour;

  }


  document.getElementById("milisec").innerHTML = miliSecOut;
  document.getElementById("sec").innerHTML = secOut;
  document.getElementById("min").innerHTML = minOut;
  document.getElementById("hour").innerHTML = hourOut;

}


/* Adds 0 when value is <10 */


function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function reset() {


  /*Reset*/

  milisec = 0;
  sec = 0;
  min = 0
  hour = 0;

  document.getElementById("milisec").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("hour").innerHTML = "00";

}



//adding an event listener 
window.addEventListener('load',init,false);