let computerScore = 0;
let humanScore = 0;

function getComputerChoice(){
    getComputer = Math.floor(Math.random()*3);
    if(getComputer == 0){
        return getComputer = 'rock';
    }
    if(getComputer == 1){
        return getComputer = 'paper';
    }
    if(getComputer == 2){
        return getComputer = 'scissors';
    }
}

function getHumanChoice(){
    getHuman = window.prompt('rock paper scissors');
    return getHuman
}

function playRound(humanChoice, computerChoice){
   if (humanChoice == 'rock'){
    if(computerChoice == 'paper'){
        computerScore++;
        return
    }
    else{
        humanScore++;
        return
    }
   }

   if (humanChoice == 'paper'){
    if(computerChoice == 'scissors'){
        computerScore++;
        return
    }
    else{
        humanScore++;
        return
    }
   }

   if (humanChoice == 'scissors'){
    if(computerChoice == 'rock'){
        computerScore++;
        return
    }
    else{
        humanScore++;
        return
    }
   }

   if(humanChoice == computerChoice){
    return
   }

   return
}


function playGame(){
    while((humanScore || computerScore) != 5){
    playRound(getHumanChoice(), getComputerChoice());
    console.log(humanScore);
    console.log(computerScore);
    }
    if(humanScore == 5){
        console.log('human wins');
    }
    if(computerScore == 5){
        console.log('computer wins');
    }
    return
}

playGame()

