// Hide roll button
document.querySelector("button").hidden = true

// DOM
var player1 = document.querySelector(".img1");
var player2 = document.querySelector(".img2");
var h1 = document.querySelector("h1");

// Randomize on refresh player 1
var randomizerPlayer1 = Math.floor(Math.random() * 6) + 1;
var randomDiceSource = "images/dice" +randomizerPlayer1+ ".png";
var randomizerPlayer2 = Math.floor(Math.random() * 6 + 1);
var randomDiceSource2 = "images/dice" +randomizerPlayer2+ ".png";

// Change the attribute
player1.setAttribute("src", randomDiceSource);
player2.setAttribute("src", randomDiceSource2);

if (randomizerPlayer1 > randomizerPlayer2) {
  h1.innerText = "🚩Player 1 wins!";
} else if (randomizerPlayer2 > randomizerPlayer1) {
  h1.innerText = "Player 2 wins!🚩";
} else {
  h1.innerText = "Draw!";
}
