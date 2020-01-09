var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var player1 = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

document.querySelectorAll ("img")[0].setAttribute("src", player1[randomNumber1-1]);

var player2 = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

document.querySelectorAll ("img")[1].setAttribute("src", player1[randomNumber2-1]);

if (randomNumber1 === randomNumber2) {
  document.querySelector ("h1").innerText = "draw";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector ("h1").innerText = "Player 2 wins!! 🚩";
} else {
  document.querySelector ("h1").innerText = "🚩 Player 1 wins!!";
}
