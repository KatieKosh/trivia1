

var timer = 30;
var timerReset = 0;

$(document).ready(function() {
  myinterval = setInterval(function cd () {
      if (timer <= 1) {
        handleEndTimer();
      };
      timer--;
      console.log(timer);
      $(".timer span").text(timer);
    }, 1000);

function handleEndTimer() {
  clearInterval(myinterval);
  console.log("handle end of timer here");
}

$("#button").click(function() {

  clearInterval(myinterval);

      
});



});











//function handleEndTimer() {
//   clearInterval(myinterval);
//   console.log("handle end of timer here");
// }
















function check() {

document.getElementById("after_submit").style.visibility = "visible";



var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var correct = 0;

if(question1 == "750,000") {
  correct++;
  }

if(question2 == "Tacos") {
  correct++;
}

if(question3 == "Bookstore") {
  correct++;
  }

 var messages = ["Great job!", "That's just okay" , "You really need to do better"];


  var range;

  if (correct < 1){
range = 2;

  }


if (correct > 0 && correct < 3){
  range = 1;

}

if (correct > 2) {
range = 0;

}


document.getElementById("after_submit").style.visibility = "visible";


document.getElementById("message").innerHTML = messages[range];
document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";

}
