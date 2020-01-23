var score = 0; //set score to 0
var total = 10; //total nmumber of questions
var point = 1; //points per correct answer
var start = new Date;
var highest = total * point;

//init

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
var i = 1;
$("#startButton").click(function (e) {
    setInterval(function () {
        $("#stopWatch").html(i);
        i++;
    }, 1000);
});
 
$("#resetButton").click(function (e) {
    i = 0;
});






$(document).ready(function() {
    //hide questions to start
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
    $('#results').html('<h3>Your score is: '+score+ ' out of '+highest+'!</h3> <a href="index.html">Take Quiz Again</a>')
}
return false;
}


//adding an event listener 
window.addEventListener('load',init,false);
