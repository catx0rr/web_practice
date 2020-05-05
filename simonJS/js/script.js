// storage for game pattern
var gamePattern = [];
var userClickedPattern = [];

// declare the colors
var buttonColors = [
  "red",
  "blue",
  "green",
  "yellow",
];

// Game start check
var started = false;
var level = 0;
var score = 0;

// keypress handler function
$(document).keydown(function (event) {
  if(!started) {
    $("h1").text("Level " +level);
    nextSequence();
    started = true;
  }
});

// click handler function
$(".btn").click(function () {
  // get the attribute id of the clicked button
  var userChosenColor = $(this).attr("id");

  // add the clicked btn to userClickedPatter array
  userClickedPattern.push(userChosenColor);

  // play sound when clicked
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length -1);
});



// FUNCTIONS //

// function for the next sequence in the game
function nextSequence() {

  userClickedPattern = [];
  level++;
  $("h1").text("Level " +level);

  var randNumber = Math.floor(Math.random() * 4);

  // set the gamePattern by selecting the button colors randomly
  var randChosenColor = buttonColors[randNumber];
  gamePattern.push(randChosenColor);

  // Select the random color and add effects and sound
  $("#" +randChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

  // play sound
  playSound(randChosenColor);
}

// play sound function
function playSound(name) {
  var audio = new Audio("sounds/" +name+ ".mp3");
  audio.play();
}

// animate pressed
function animatePress(currentColor) {
  $("#" +currentColor).addClass("pressed");

  setTimeout(function () {
    $("#" +currentColor).removeClass("pressed")
  }, 100);
}

// player answer
function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      addScore(score);
      setTimeout(function () {
        nextSequence();
      }, 1000);

    }
  }
  else {
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over")
    }, 200);
    $("h1").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}

// start over
function startOver() {
  // reset the values
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
  score = 0;
  started = false;
  $("h3").text("Score: 0");
}

// added score
function addScore(currentScore) {
  score = currentScore + 100;
  $("h3").text("Score: " +score);
}
