let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.floor((Math.random()) * 3) + 1;
    switch (randomNumber) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            break;
    }
}

function getHumanChoice() {
    let humanChoice;
    while (humanChoice != "rock" && humanChoice != "paper" && humanChoice != "scissors") {
        humanChoice = prompt("Select rock, paper or scissors");
    }
    return humanChoice.toLowerCase();
}

function playRound(humanChoice,computerChoice) {
    console.log(humanChoice);
    console.log(computerChoice);
    if (computerChoice == humanChoice) {
        return "It's a draw !";
    }
    else if ((computerChoice == "rock" && humanChoice == "scissors")
        || (computerChoice == "paper" && humanChoice == "rock")
        || (computerChoice == "scissors" && humanChoice == "paper")) {
            ++computerScore;
            return "You lost ! " + computerChoice + " beats " + humanChoice;
    }
    else{
        ++humanScore;
        return "You won ! " + humanChoice + " beats " + computerChoice;
    }
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));