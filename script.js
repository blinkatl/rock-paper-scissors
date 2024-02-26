let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;

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
                computerScore++;
                return "You lose. Paper beats rock.";
            case "scissors":
                playerScore++;
                return "You win. Rock beats scissors.";
        }
    }
    else if (playerSelection == "paper") {
        switch(computerSelection) {
            case "rock":
                playerScore;;
                return "You win. Paper beats rock.";
            case "paper":
                return "Tie. Paper ties paper";
            case "scissors":
                computerScore++;
                return "You lose. Scissors beats paper";
        }
    }
    else {
        switch(computerSelection) {
            case "rock":
                computerScore++;
                return "You lose. Rock beats scissors.";
            case "paper":
                playerScore++;
                return "You win. Scissors beats paper";
            case "scissors":
                return "Tie. Scissors ties scissors";
        }
    }
}

function playGame() {

    for (let x = 0; x < 5; x++) {
        getComputerChoice();
        getPlayerChoice();
        console.log(playRound(playerSelection, computerSelection));

        console.log("Player score: " + playerScore);
        console.log("Comp score: " + computerScore);
    }
}

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

rockButton.addEventListener("click", function() {
    getComputerChoice();
    playerSelection = "rock"; 
    console.log(playRound(playerSelection, computerSelection));
});

paperButton.addEventListener("click", function() {
    getComputerChoice();
    playerSelection = "paper"; 
    console.log(playRound(playerSelection, computerSelection));
});

scissorsButton.addEventListener("click", function() {
    getComputerChoice();
    playerSelection = "scissors"; 
    console.log(playRound(playerSelection, computerSelection));
});