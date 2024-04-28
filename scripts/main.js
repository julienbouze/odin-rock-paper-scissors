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

    if (computerChoice == humanChoice) {
        return "draw";
    }
    else if ((computerChoice == "rock" && humanChoice == "scissors")
        || (computerChoice == "paper" && humanChoice == "rock")
        || (computerChoice == "scissors" && humanChoice == "paper")) {
            return "computer";
    }
    else{
        return "human";
    }
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; ++i){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(humanSelection + " vs " + computerSelection);
        let winner = playRound(humanSelection, computerSelection);
        if (winner =="draw"){
            console.log("It's a draw !");
        }
        else if (winner == "computer"){
            computerScore += 1;
            console.log("You lost ! " + computerSelection + " beats " + humanSelection); 
        }
        else{
            humanScore += 1;
            console.log("You won ! " + humanSelection + " beats " + computerSelection);
        }
    }
    
    console.log(humanScore + " vs " + computerScore);
    if (humanScore == computerScore){
        console.log("Game finished : it's a draw !");
    }
    else if (computerScore > humanScore){
        console.log("Game finished : You lost !");
    }
    else {
        console.log("Game finished : You won !");
    }
}

playGame();