// Rock Paper Scissors Game

function getPlayerChoice() {
    let index = prompt(
    `Choose a number:
    1- Rock
    2- Paper
    3- Scissors
    ?- Quit`);

    let choice = "";
    switch (index) {
        case "1":
            choice = "rock"
            break;
        case "2":
            choice = "paper"
            break;
        case "3":
            choice = "scissors"
            break;
        default:
            console.info("You Quit")
    }
    
    return choice;
}

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"]
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    let result = "";
    switch (playerSelection) {
        case "rock":
            if (computerSelection == "paper")
                result = "You Lose! Paper beats Rock"
            else if (computerSelection == "scissors")
                result = "You Win! Rock beats Scissors"
            else
                result = "Rock Tie!"
            break;
        case "paper":
            if (computerSelection == "rock")
                result = "You Win! Paper beats Rock"
            else if (computerSelection == "scissors")
                result = "You Lose! Scissors beats Paper"
            else
                result = "Paper Tie!"
            break;
        case "scissors":
            if (computerSelection == "rock")
                result = "You Lose! Rock beats Scissors"
            else if (computerSelection == "paper")
                result = "You Win! Scissors beats Paper"
            else
                result = "Scissors Tie!"
            break;
        default:
            result = "Unkown player choice"
    }

    return result
}


let playerSelection;
let computerSelection;

while (playerSelection = getPlayerChoice()) {
    
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
}