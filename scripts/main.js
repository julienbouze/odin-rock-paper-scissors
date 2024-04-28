function getComputerChoice(){
    let randomNumber = Math.floor((Math.random())*3)+1;
    switch(randomNumber){
        case 1 :
            return "rock";
        case 2 :
            return "paper";
        case 3 :
            return "scissors";
        default :
            break;
    }
}

console.log(getComputerChoice());

function getHumanChoice(){
    let humanChoice ; 
    while (humanChoice != "rock" && humanChoice != "paper" && humanChoice != "scissors"){
        humanChoice = prompt("Select rock, paper or scissors");
    }
    return humanChoice.toLowerCase();
}
console.log(getHumanChoice());