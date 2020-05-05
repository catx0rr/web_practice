// DOM
var drumButtons = document.querySelectorAll(".drum");

// Added Events Listener using a function call
// wButton.addEventListener("click", btnClick);
//
// function btnClick() {
//  console.log("clicked");
// }

// var audio = new Audio("sounds/snare.mp3");
// audio.play();
//this.style.color = "orange";

// Click event listener using anonymous function
for (var i = 0; i < drumButtons.length; i++) {
    drumButtons[i].addEventListener("click", function() {

      var buttonInnerText = this.innerText;

      makeSound(buttonInnerText);

      animateButton(buttonInnerText);

    });
}

// Keypress event listener passing event on the anonymous function
addEventListener("keydown", function(event) {

  makeSound(event.key);

  animateButton(event.key);

});


// Make sound button on presses
function makeSound(key) {
  switch (key) {
    case "q":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "w":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "e":
      var snareL = new Audio("sounds/snare.mp3");
      snareL.play();
      break;

    case "r":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "u":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "i":
      var snareR = new Audio("sounds/snare.mp3");
      snareR.play();
      break;

    case "o":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "p":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default: console.log(buttonInnerText);
  }
}

function animateButton(currentKey) {

  var activeKey = document.querySelector("." + currentKey);
  activeKey.classList.add("pressed");

  setTimeout(function() {
    activeKey.classList.remove("pressed");
  }, 100);
}
