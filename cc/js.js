$( document ).ready(function() {

var yourScore = 0;
var winScore = document.getElementById('winScore');
var wins= 0;
var losses = 0;
var num = Number(first)

$('#win').text(wins);
$('#loss').text(losses);


random = Math.floor((Math.random() * 30 + 19));
winScore.innerHTML = random


var first = document.getElementById("one");
first.setAttribute("value", Math.floor((Math.random() * 30) + 1));
console.log(first.value);
$('#yourScore').text(yourScore)
var second = document.getElementById("two");
second.setAttribute("value", Math.floor((Math.random() * 30) + 1));
console.log(second.value);

var third = document.getElementById("three");
third.setAttribute("value", Math.floor((Math.random() * 30) + 1));
console.log(third.value);

var fourth = document.getElementById("four");
fourth.setAttribute("value", Math.floor((Math.random() * 30) + 1));
console.log(fourth.value);


function reset(){
  Random=Math.floor(Math.random()*102+19);
  console.log(Random)
  $('#winScore').text(Random);
  first= Math.floor(Math.random()*12+1);
  second= Math.floor(Math.random()*12+1);
  third= Math.floor(Math.random()*12+1);
  fourth= Math.floor(Math.random()*12+1);
  yourScore= 0;
  $('#yourScore').text(yourScore);
  } 

function winner(){
alert("You're a winner!");
wins++; 
$('#wins').text(wins);
reset();
}

function loser(){
alert ("You're a loser!");
losses++;
$('#losses').text(losses);
reset()
}

$('.first').on ('click', function(){
    yourScore = yourScore + first.value;
    console.log("New playerTotal= " + yourScore);
    $('#yourScore').text(yourScore); 
          //Win & lose conditions
        if (yourScore == random){
          woohoo();
        }
        else if ( yourScore > random){
          loser();
        }   
  })  
  $('.second').on ('click', function(){
    yourScore = yourScore + second.value;
    console.log("New playerTotal= " + yourScore);
    $('#yourScore').text(yourScore); 
        if (yourScore == random){
          woohoo();
        }
        else if ( yourScore > random){
          loser();
        } 
  })  
  $('.third').on ('click', function(){
    $('#yourScore').text(yourScore);

          if (yourScore == random){
          woohoo();
        }
        else if ( yourScore > random){
          loser();
        } 
  })  
  $('.fourth').on ('click', function(){
    yourScore = yourScore + fourth.value;
    console.log("New playerTotal= " + yourScore);
    $('#yourScore').text(yourScore); 
      
          if (yourScore == random){
          woohoo();
        }
        else if ( yourScore > random){
          loser();
        }
    



function addToScore() {
    var numberToAdd = parseInt("value");
    var currentScore = parseInt(yourScore.innerHTML);
    yourScore.innerHTML = numberToAdd + currentScore;
  }

function checkPlayerScore() {
  var playerInt = parseInt(yourScore.innerHTML);
  var winInt = parseInt(winScore.innerHTML);
  if (playerInt === winInt) {
      alert('You win!');
  } else if (playerInt > targetInt) {
    alert('You lose!');
  } 
}


function checkPlayerScore() {
  //yourScore, targetScore (parseFloat() is for decimals)
  var playerInt = parseInt(yourScore.innerHTML);
  var winInt = parseInt(winScore.innerHTML);
  if (playerInt === winInt) {
      alert('You win!');
  } else if (playerInt > targetInt) {
    alert('You lose!');
  } 
}
  });
 });
