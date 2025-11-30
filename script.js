const winScore = 5;
let humanScore = 0;
let computerScore = 0;

let choices = document.getElementById("choice-container");
let lastResult = document.createElement("div");
let score = document.createElement("div");
let finalResult = document.createElement("div"); // only appended when a game is over
lastResult.classList.add("last-result");
score.classList.add("score");
for (let choice of choices.children) {
  choice.addEventListener("click", (event) => playRound(event.target.id, getComputerChoice()));
}

function initializeGame(){
  console.log("Initializing a new game");
  for (let choice of choices.children) choice.disabled = false;
  document.body.appendChild(lastResult);
  document.body.appendChild(score);
  humanScore = 0;
  computerScore = 0;
  score.style.color = "black";
  score.textContent = `YOU ${humanScore} - ${computerScore} CPU`;
  lastResult.textContent = "";
}

function getComputerChoice(){
  // get random int between 1 and 3
  let roll = Math.floor(Math.random() * 3) + 1;
  switch(roll){
    case 1: return "rock";
    case 2: return "paper";
    case 3: return "scissors";
  }
}

function playRound(humanChoice, computerChoice){
  console.log("playing a round");
  switch (humanChoice){
    case "rock":{
      if (computerChoice == "paper")
        printResult(false, humanChoice, computerChoice);
      else
        printResult(true, humanChoice, computerChoice);
      return;
    }
    case "paper":{
      if (computerChoice == "scissors")
        printResult(false, humanChoice, computerChoice);
      else
        printResult(true, humanChoice, computerChoice);
      return;
    }
    case "scissors":{
      if (computerChoice == "rock")
        printResult(false, humanChoice, computerChoice);
      else
        printResult(true, humanChoice, computerChoice);
      return;
    }
    default:{
      lastResult.textContent = "water you doing??";
    }
  };
}

function printResult(won, humanChoice, computerChoice){
  if (won) {
      if (humanChoice == computerChoice) {
        lastResult.textContent = `Drew with ${humanChoice}!`;
        lastResult.style.color = "yellow";
        ++computerScore;
        ++humanScore;
      } else {
        lastResult.textContent = `Won! Your ${humanChoice} beats ${computerChoice}`;
        lastResult.style.color = "green";
        ++humanScore;
      }
  } else {
    lastResult.textContent = `Lost! Your ${humanChoice} is beaten by ${computerChoice}`;
    lastResult.style.color = "red";
    ++computerScore;
  }
  score.textContent = `YOU ${humanScore} - ${computerScore} CPU`;
  checkForWinner(humanScore, computerScore);
  return;
}

function checkForWinner(humanScore, computerScore){
  if (humanScore == 5 || computerScore == 5) {
    stopRound();
    finalResult.classList.add("final-result");
    if (humanScore > computerScore) {
      console.log(`You win with a score of ${humanScore} to ${computerScore}!`);
      score.style.color = "green";
      finalResult.textContent = "YOU WIN!";
    } else if (humanScore < computerScore) {
      console.log(`You lose with a score of ${humanScore} to ${computerScore}!`);
      score.style.color = "red";
      finalResult.textContent = "YOU LOSE!";
    } else {
      console.log(`You draw with a score of ${humanScore} to ${computerScore}!`);
      score.style.color = "yellow";
      finalResult.textContent = "DRAW!";
    }
    document.body.appendChild(finalResult);
  }
}

function stopRound(){
  for (let choice of choices.children) choice.disabled = true;
  lastResult.textContent = "";
  //add option to play again
  const playAgain = document.createElement("button");
  playAgain.setAttribute("type", "button");
  playAgain.textContent = "Play again";
  //playAgain.style.backgroundColor = "green";
  playAgain.addEventListener("click", () => {
    lastResult.removeChild(playAgain);
    document.body.removeChild(finalResult);
    initializeGame();
  })
  lastResult.appendChild(playAgain);
}

initializeGame();
