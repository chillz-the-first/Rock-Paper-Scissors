let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let num = Math.floor(Math.random() * 3);
    return choices[num];
}

function getHumanChoice() {
    let choice =  prompt("Rock, paper, scissors??").toLowerCase();
    while (!["rock", "paper", "scissors"].includes(choice)) {
        choice = prompt("Invalid input! Please choose rock, paper, or scissors.").toLowerCase();
    }
    return choice;
}

function playRound(humanChoice, computerChoice) {
    console.log("You chose: " + humanChoice + " Computer chose: " + computerChoice);
    if (humanChoice === computerChoice) {
        console.log("Its a tie, you both chose " + humanChoice);
    }

    if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        humanScore++;
    }
    else{
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        computerScore++;
    }
}

playRound(getHumanChoice(), getComputerChoice());
/*function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    console.log("Final Score: You " + humanScore + " : " + computerScore + " Computer");

    if (humanScore === computerScore) {
        console.log("Its a tie");
    }
    else if (humanScore > computerScore) {
        console.log("You won!");
    }
    else if (humanScore < computerScore) {
        console.log("Sorry, you lost!");
    }
}
playGame();*/