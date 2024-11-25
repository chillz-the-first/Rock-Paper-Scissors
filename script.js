let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1) {
        return "rock";
    }
    else if (choice === 2) {
        return "paper";
    }
    else if (choice === 3) {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice =  prompt("Rock, paper, scissors??").toLowerCase();
    while (!["rock", "paper", "scissors"].includes(choice)) {
        choice = prompt("Invalid input! Please choose rock, paper, or scissors.").toLowerCase();
    }
    return choice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Its a tie, you both chose " + humanChoice);
    }

    if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        computerScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        humanScore++;
    }

    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        computerScore++;
    }

    else if (humanChoice === "scissors" && computerChoice === "rock") {
       console.log("You lose! " + computerChoice + " beats " + humanChoice);
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        humanScore++;
    }
}

// playRound(getHumanChoice(), getComputerChoice());
function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    if (humanScore === computerScore) {
        console.log("Its a tie");
    }
    else if (humanScore > computerScore) {
        console.log("You won!" + humanScore + " : " + computerScore);
    }
    else if (humanScore < computerScore) {
        console.log("You lose! " + humanScore + " : " + computerScore);
    }
}

playGame();