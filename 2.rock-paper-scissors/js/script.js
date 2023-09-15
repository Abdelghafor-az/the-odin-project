// Add event listners to buttons
const choiceButtons = document.querySelectorAll(".choice");

let playerScore = 0;
let computerScore = 0;

choiceButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const choice = e.target.textContent.toLowerCase();
    const round = playRound(choice);
    
    // Increment and show the score
    const playerSpan = document.querySelector(".player-score span");
    const computerSpan = document.querySelector(".computer-score span");
    if (round.includes("Win")) {
      playerScore++;
      playerSpan.textContent = playerScore;
    } else if (round.includes("Lose")) {
      computerScore++;
      computerSpan.textContent = computerScore;
    }

    // erase game result
    const gameDiv = document.querySelector(".game");
    if (gameDiv.textContent) {
      gameDiv.textContent = "";
    }

    //display the round result
    const roundDiv = document.querySelector(".round");
    roundDiv.textContent = round;
    
    // display the winner (who reach 5 points first)
    if (playerScore === 5) {
      gameDiv.textContent = "You Win The Game!";
    } else if (computerScore === 5) {
      gameDiv.textContent = "You Lose! The Computer Win The Game!";
    }
    if (playerScore === 5 || computerScore === 5) {
      playerScore = 0;
      playerSpan.textContent = 0;

      computerScore = 0;
      computerSpan.textContent = 0;
    }
  })
});



function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"]
  let randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection) {
  computerSelection = getComputerChoice();

  let result = "";
  switch (playerSelection) {
      case "rock":
          if (computerSelection == "paper") {
            result = "You Lose! Paper beats Rock"
          } else if (computerSelection == "scissors") {
            result = "You Win! Rock beats Scissors"
          } else {
            result = "Rock Tie!"
          }
          break;
      case "paper":
          if (computerSelection == "rock") {
              result = "You Win! Paper beats Rock"
          } else if (computerSelection == "scissors") {
              result = "You Lose! Scissors beats Paper"
          } else {
              result = "Paper Tie!"
          }
          break;
      case "scissors":
          if (computerSelection == "rock") {
              result = "You Lose! Rock beats Scissors"
          } else if (computerSelection == "paper") {
              result = "You Win! Scissors beats Paper"
          } else {
              result = "Scissors Tie!"
          }
          break;
      default:
          result = "Unkown player choice"
  }

  return result
}