// Setup RPS functions

function getComputerChoice() {
    // Generate random number between 0-2
    let n = Math.floor(Math.random() * 3);
    // Check cases for 1-3:
    switch (n) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {
    // Evaluates who wins rock-paper-scissors given 2 inputs
    // Return -1: Invlaid input
    // Return 0: Tie
    // Return 1: Player 1 Wins
    // Return 2: Player 2 Wins
    playerChoice = playerChoice.toLowerCase();
    let computerChoice = getComputerChoice();
    switch (playerChoice) {
        case "rock":
            switch (computerChoice) {
                case "rock":
                    return "It's a tie! You both chose Rock.";
                case "paper":
                    computerScore++;
                    return "You lost! Paper beats Rock.";
                case "scissors":
                    playerScore++;
                    return "You won! Rock beats Scissors.";
                default:
                    return "ERROR";
            }
        case "paper":
            switch (computerChoice) {
                case "rock":
                    playerScore++;
                    return "You won! Paper beats Rock.";
                case "paper":
                    return "It's a tie! You both chose Paper.";
                case "scissors":
                    computerScore++;
                    return "You lost! Scissors beats Paper.";
                default:
                    return "ERROR";
            }
        case "scissors":
            switch (computerChoice) {
                case "rock":
                    computerScore++;
                    return "You lost! Rock beats Scissors.";
                case "paper":
                    playerScore++;
                    return "You won! Scissors beats Paper.";
                case "scissors":
                    return "It's a tie! You both chose Scissors.";
                default:
                    return "ERROR";
            }
        default:
            return -1;
    }
}

// Setup DOM nodes
let choiceButtons = document.querySelectorAll('button');
let outputDiv = document.querySelector('.output');
let playerScoreEl = document.querySelector('#player-score');
playerScoreEl.textContent = playerScore;
let computerScoreEl = document.querySelector('#computer-score');
computerScoreEl.textContent = computerScore;
let inputTitle;
let outputText;

function displayWinner(playerWon) {
    if (playerWon) {
        outputText = "You won the round! Final score was ";
        outputText += playerScore + "-" + computerScore;
    }
    else {
        outputText = "You lost the round. Final score was ";
        outputText += playerScore + "-" + computerScore;
    }
}

function playGamePressed(e) {
    inputTitle = e.target.textContent;
    outputText = play(inputTitle);

    if (playerScore >= 5) {
        displayWinner(true);
    } else if (computerScore >= 5) {
        displayWinner(false);
    }

    playerScoreEl.textContent = playerScore;
    computerScoreEl.textContent = computerScore;
    outputDiv.textContent = outputText;
}

choiceButtons.forEach((button) => {
    button.addEventListener('click', playGamePressed);
});





// let newPara = document.createElement('p');
// newPara.textContent = "Hey sup";
// let newDiv = document.querySelector('.output');
// newDiv.appendChild(newPara);