let choices = [];
let userScore = 0;
let computerScore = 0;
let gameEnded = false; 

document.addEventListener("DOMContentLoaded", function() {
    const choiceButtons = document.querySelectorAll('.choice');
    const resetButton = document.getElementById('resetButton');
    choiceButtons.forEach(choiceButton => {
        choiceButton.addEventListener('click', handleClick);
    });

    resetButton.addEventListener('click', resetGame);
});

function handleClick() {
    if (gameEnded) {
        return; 
    }

    const humanChoice = this.id;
    const computerChoice = getComputerChoice(); 
    const roundResult = playRound(humanChoice, computerChoice); 

    if (roundResult === "human") {
        userScore++;
    } else if (roundResult === "computer") {
        computerScore++;
    }

    document.getElementById('userScore').textContent = userScore;
    document.getElementById('computerScore').textContent = computerScore;

    let result = document.createElement("div");
    result.classList.add('round');
    result.classList.add(roundResult);
    result.textContent = `You chose ${humanChoice}, Computer chose ${computerChoice}, Result: ${roundResult}`;
    document.getElementById('result').append(result);
    choices.push(roundResult);

    if (userScore === 5 || computerScore === 5) {
        endGame(); 
    }
}

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

function playRound(humanChoice, computerChoice) {
    if (computerChoice === humanChoice) {
        return "draw";
    } else if (
        (computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "scissors" && humanChoice === "paper")
    ) {
        return "computer";
    } else {
        return "human";
    }
}

function endGame() {
    const winner = document.getElementById("winner");
    const winnerText = document.getElementById("winnerText");
    const resetButton = document.getElementById('resetButton');
    const choiceButtons = document.querySelectorAll('.choice');

    choiceButtons.forEach(choiceButton => {
        choiceButton.classList.add("disabled");
        choiceButton.removeEventListener('click', handleClick);
    });

    if (userScore > computerScore) {
        winner.classList.add("human");
        winnerText.textContent = "Game finished: You won !";
    } else {
        winner.classList.add("computer");
        winnerText.textContent = "Game finished: You lost !";
    }
    resetButton.style.display = "block";
    gameEnded = true;
}

function resetGame() {
    userScore = 0;
    computerScore = 0;
    choices = [];
    gameEnded = false;

    document.getElementById('userScore').textContent = userScore;
    document.getElementById('computerScore').textContent = computerScore;
    document.getElementById('result').innerHTML = '';

    const choiceButtons = document.querySelectorAll('.choice');
    choiceButtons.forEach(choiceButton => {
        choiceButton.classList.remove("disabled");
        choiceButton.addEventListener('click', handleClick);
    });
    document.getElementById("winner").className="";
    document.getElementById("winnerText").innerHTML = '';
    document.getElementById('resetButton').style.display = "none";

}
