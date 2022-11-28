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

function evaluateWinner(choice1, choice2) {
    // Evaluates who wins rock-paper-scissors given 2 inputs
    // Return -1: Invlaid input
    // Return 0: Tie
    // Return 1: Player 1 Wins
    // Return 2: Player 2 Wins
    choice1 = choice1.toLowerCase()
    choice2 = choice2.toLowerCase()
    switch (choice1) {
        case "rock":
            switch (choice2) {
                case "rock":
                    return 0;
                case "paper":
                    return 2;
                case "scissors":
                    return 1;
                default:
                    return -1;
            }
        case "paper":
            switch (choice2) {
                case "rock":
                    return 1;
                case "paper":
                    return 0;
                case "scissors":
                    return 2;
                default:
                    return -1;
            }
        case "scissors":
            switch (choice2) {
                case "rock":
                    return 2;
                case "paper":
                    return 1;
                case "scissors":
                    return 0;
                default:
                    return -1;
            }
        default:
            return -1;
    }
}

function game() {
    let winner;
    let playerWins = 0;
    let computerWins = 0;
    let ties = 0;
    let totalScore;
    for (let i=1; i<=5; i++) {
        winner = evaluateWinner("Rock", getComputerChoice());
        if (winner == 0) {
            ties++;
            totalScore = playerWins + "-" + computerWins + "-" + ties;
            console.log(`Round ${i} winner: Tie`);
            console.log(`Score: ${totalScore}\n`);
        } else if (winner == 1) {
            playerWins++;
            totalScore = playerWins + "-" + computerWins + "-" + ties;
            console.log(`Round ${i} winner: Player!`);
            console.log(`Score: ${totalScore}\n`);
        } else if (winner == 2) {
            computerWins++;
            totalScore = playerWins + "-" + computerWins + "-" + ties;
            console.log(`Round ${i} winner: Computer`);
            console.log(`Score: ${totalScore}\n`);
        } else {
            console.log("Yeah you may want to check something, this shouldn't happen.");
        }
    }
}

game();