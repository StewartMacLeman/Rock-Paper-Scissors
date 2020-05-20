"use strict";

// Best-out-of ---------------------------------------------------------------

document.querySelector("#game_btn_3").addEventListener( "click", addGameType_3 );
document.querySelector("#game_btn_5").addEventListener( "click", addGameType_5 );
let bestOfPara = document.querySelector(".bestOfPara");
let gameType = 0;

function addGameType_3(){
  reset();
  bestOfPara.innerHTML = "Playing for the best of: 3";
  gameType = 3;
}
function addGameType_5(){
  reset();
  bestOfPara.innerHTML = "Playing for the best of: 5";
  gameType = 5;
}
// Game ---------------------------------------------------------------------

let playerScore = 0;
let computerScore = 0;
let playerImg = document.querySelector("#playerImg");
let computerImg = document.querySelector("#computerImg");
let playerPara = document.querySelector(".scoresParaP");
let computerPara = document.querySelector(".scoresParaC");
let messageText = document.querySelector(".messagesPara");

document.querySelector(".play_btn").addEventListener( "click", game );

function game(){

  let playerArray = ["player_rock", "player_paper", "player_scissors"];
  let computerArray = ["computer_rock", "computer_paper", "computer_scissors"];

  let randomPlayerIndex = Math.floor((Math.random() * 3));
  let randomComputerIndex = Math.floor((Math.random() * 3));

  let playerRandomImg = playerArray[randomPlayerIndex];
  let computerRandomImg = computerArray[randomComputerIndex];

  if (playerRandomImg == "player_rock"){
    playerImg.setAttribute( "class" , "imagesCon gridPart_1 player_rock");
  } else if (playerRandomImg == "player_paper"){
    playerImg.setAttribute( "class" , "imagesCon gridPart_1 player_paper");
  } else if (playerRandomImg == "player_scissors"){
    playerImg.setAttribute( "class" , "imagesCon gridPart_1 player_scissors");
  } else {
    playerImg.setAttribute( "class" , "imagesCon gridPart_1 player_thumbsUp");
  }

  if (computerRandomImg == "computer_rock"){
    computerImg.setAttribute( "class" , "imagesCon gridPart_2 computer_rock");
  } else if (computerRandomImg == "computer_paper"){
    computerImg.setAttribute( "class" , "imagesCon gridPart_2 computer_paper");
  } else if (computerRandomImg == "computer_scissors"){
    computerImg.setAttribute( "class" , "imagesCon gridPart_2 computer_scissors");
  } else {
    computerImg.setAttribute( "class" , "imagesCon gridPart_2 computer_thumbsUp");
  }

  let playerWinsMessage = "Player wins the round! Hit play for the next round.";
  let computerWinsMessage = "Computer wins the round! Hit play for the next round.";
  let drawMessage = "Draw, Hit play for the next round.";

  if ((playerRandomImg == "player_rock") && (computerRandomImg == "computer_scissors")){
    messageText.innerHTML = playerWinsMessage;
    playerScore = playerScore + 1;
    playerPara.innerHTML = `Player's Score: ${playerScore}`;
  } else if ((playerRandomImg == "player_rock") && (computerRandomImg == "computer_paper")){
    messageText.innerHTML = computerWinsMessage;
    computerScore = computerScore + 1;
    computerPara.innerHTML = `Computer's Score: ${computerScore}`;
  } else if ((playerRandomImg == "player_rock") && (computerRandomImg == "computer_rock")){
    messageText.innerHTML = drawMessage;
  } else if ((playerRandomImg == "player_scissors") && (computerRandomImg == "computer_paper")){
    messageText.innerHTML = playerWinsMessage;
    playerScore = playerScore + 1;
    playerPara.innerHTML = `Player's Score: ${playerScore}`;
  } else if ((playerRandomImg == "player_scissors") && (computerRandomImg == "computer_rock")){
    messageText.innerHTML = computerWinsMessage;
    computerScore = computerScore + 1;
    computerPara.innerHTML = `Computer's Score: ${computerScore}`;
  } else if ((playerRandomImg == "player_scissors") && (computerRandomImg == "computer_scissors")){
    messageText.innerHTML = drawMessage;
  } else if ((playerRandomImg == "player_paper") && (computerRandomImg == "computer_rock")){
    messageText.innerHTML = playerWinsMessage;
    playerScore = playerScore + 1;
    playerPara.innerHTML = `Player's Score: ${playerScore}`;
  } else if ((playerRandomImg == "player_paper") && (computerRandomImg == "computer_scissors")){
    messageText.innerHTML = computerWinsMessage;
    computerScore = computerScore + 1;
    computerPara.innerHTML = `Computer's Score: ${computerScore}`;
  } else if ((playerRandomImg == "player_paper") && (computerRandomImg == "computer_paper")){
    messageText.innerHTML = drawMessage;
  }

  if ((gameType == 3) && (playerScore == 2)){
    messageText.innerHTML = "Player Wins Game! Now click reset to play again.";
    playerImg.setAttribute("class" , "imagesCon gridPart_1 player_thumbsUp");
    computerImg.setAttribute("class" , "imagesCon gridPart_2 computer_thumbsDown");
  } else if  ((gameType == 5) && (playerScore == 3)){
    messageText.innerHTML = "Player Wins Game! Now click reset to play again.";
    playerImg.setAttribute("class" , "imagesCon gridPart_1 player_thumbsUp");
    computerImg.setAttribute("class" , "imagesCon gridPart_2 computer_thumbsDown");
  } else if ((gameType == 3) && (computerScore == 2)){
    messageText.innerHTML = "Computer Wins Game! Never mind, click reset to try again";
    playerImg.setAttribute("class" , "imagesCon gridPart_1 player_thumbsDown");
    computerImg.setAttribute("class" , "imagesCon gridPart_2 computer_thumbsUp");
  } else if ((gameType == 5) && (computerScore == 3)){
    messageText.innerHTML = "Computer Wins Game! Never mind, click reset to try again";
    playerImg.setAttribute("class" , "imagesCon gridPart_1 player_thumbsDown");
    computerImg.setAttribute("class" , "imagesCon gridPart_2 computer_thumbsUp");
  }

}

// Reset game ---------------------------------------------------------------

document.querySelector("#resetGame").addEventListener( "click", reset );
function reset(){
  bestOfPara.innerHTML = "Playing for the best of: __";
  messageText.innerHTML = "Get Ready and good luck!";
  playerPara.innerHTML = "Player's Score: 0"
  computerPara.innerHTML = "Computer's Score: 0"
  gameType = 0;
  playerScore = 0;
  computerScore = 0;
  playerImg.setAttribute( "class" , "imagesCon gridPart_1 player_thumbsUp");
  computerImg.setAttribute( "class" , "imagesCon gridPart_2 computer_thumbsUp");
}
