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
                playerScore++;
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

function determineWinner() {
    if (playerScore == 5) {
        winner.textContent = "Player wins";
    }
    else if (computerScore ==5) {
        winner.textContent = "CPU wins";
    }
}

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

const resultMsg = document.querySelector(".resultText");
const playerScoreText = document.querySelector(".playerScore");
const cpuScoreText = document.querySelector(".cpuScore");
const winner = document.querySelector(".winner");

rockButton.addEventListener("click", function() {
    getComputerChoice();
    playerSelection = "rock"; 
    //console.log(playRound(playerSelection, computerSelection));
    resultMsg.textContent = playRound(playerSelection,computerSelection);
    playerScoreText.textContent = "Player Score: " + playerScore;
    cpuScoreText.textContent = "CPU Score: " + computerScore;
    determineWinner();
});

paperButton.addEventListener("click", function() {
    getComputerChoice();
    playerSelection = "paper"; 
    //console.log(playRound(playerSelection, computerSelection));
    resultMsg.textContent = playRound(playerSelection,computerSelection);
    playerScoreText.textContent = "Player Score: " + playerScore;
    cpuScoreText.textContent = "CPU Score: " + computerScore;
    determineWinner();
});

scissorsButton.addEventListener("click", function() {
    getComputerChoice();
    playerSelection = "scissors"; 
    //console.log(playRound(playerSelection, computerSelection));
    resultMsg.textContent = playRound(playerSelection,computerSelection);
    playerScoreText.textContent = "Player Score: " + playerScore;
    cpuScoreText.textContent = "CPU Score: " + computerScore;
    determineWinner();
});