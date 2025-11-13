let rounds = 5;
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
  // get random int between 1 and 3
  let roll = Math.floor(Math.random() * 3) + 1;
  switch(roll){
    case 1: return "rock";
    case 2: return "paper";
    case 3: return "scissors";
  }
}

function getHumanChoice(){
  let choice = prompt("your choice: ", "");
  return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice){
  if (humanChoice == computerChoice){
    console.log("Draw!");
    humanScore++;
    computerScore++;
    return;
  }
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
      console.log("water you doing??");
    }
  };
}

function printResult(won, humanChoice, computerChoice){
  if (won){
    console.log(`You won! ${humanChoice} beats ${computerChoice}.`);
    humanScore++;
  }
  else {
    console.log(`You lost! ${computerChoice} beats ${humanChoice}.`);
    computerScore++;
  }
  return;
}

function finalResult(humanScore, computerScore){
  if (humanScore > computerScore)
    console.log(`You win with a score of ${humanScore} to ${computerScore}!`);
  else if (humanScore < computerScore)
    console.log(`You lose with a score of ${humanScore} to ${computerScore}!`);
  else
    console.log(`You draw with a score of ${humanScore} to ${computerScore}!`);
}

function playGame(rounds){
  for (; rounds > 0; rounds--)
    playRound(getHumanChoice(), getComputerChoice());
  finalResult(humanScore, computerScore);
}

playGame(rounds);
