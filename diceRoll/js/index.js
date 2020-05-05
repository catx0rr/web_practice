// DOM objects
var h1 = document.querySelector("h1");
var btn = document.querySelector(".btn-button");
var player1 = document.querySelector("img.img1");
var player2 = document.querySelector("img.img2");

// Add event listener to buttons
btn.addEventListener("click", function() {

  // Get random values per player
  var randPlayer1 = Math.floor(Math.random() * 6) + 1;
  var randPlayer2 = Math.floor(Math.random() * 6) + 1;

  // Get source of image and set it to setAttribute
  var randImageSource1 = "images/dice" +randPlayer1+ ".png";
  var randImageSource2 = "images/dice" +randPlayer2+ ".png";

  // Set attributes to the page
  player1.setAttribute("src", randImageSource1);
  player2.setAttribute("src", randImageSource2);

  // Check for winner
  if (randPlayer1 > randPlayer2) {
    h1.innerText = "🚩Player 1 Wins!";
  }
  else if (randPlayer2 > randPlayer1) {
    h1.innerText = "Player 2 Wins!🚩";
  }
  else {
    h1.innerText = "Draw!";
  }
  // Unset the values
  randPlayer1 = 0;
  randPlayer2 = 0;
});
