let computerSelection;
let playerSelection;

function getComputerChoice() {
    let compChoice = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * compChoice.length);
    computerSelection = compChoice[index];
}

function getPlayerChoice() {
    playerSelection = prompt("Select rock, paper, or scissors:");
    playerSelection = playerSelection.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock") {
        switch(computerSelection) {
            case "rock":
                return "Tie. Rock ties rock.";
            case "paper":
                return "You lose. Paper beats rock.";
            case "scissors":
                return "You win. Rock beats scissors.";
        }
    }
    else if (playerSelection == "paper") {
        switch(computerSelection) {
            case "rock":
                return "You win. Paper beats rock.";
            case "paper":
                return "Tie. Paper ties paper";
            case "scissors":
                return "You lose. Scissors beats paper";
        }
    }
    else {
        switch(computerSelection) {
            case "rock":
                return "You lose. Rock beats scissors.";
            case "paper":
                return "You win. Scissors beats paper";
            case "scissors":
                return "Tie. Scissors ties scissors";
        }
    }
}


getComputerChoice();
getPlayerChoice();
console.log("CPU: " + computerSelection);
console.log(playRound(playerSelection, computerSelection));