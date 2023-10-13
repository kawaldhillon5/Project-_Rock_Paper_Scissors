let countP = 0, countC = 0;
function playerWins(){
    console.log("You Won this round!");
    countP += 1; 
}
function computerWins(){
    console.log("Computer Wins this round!")
    countC += 1;
}
function getComputerChoice(){
    let y;
    let x = Math.floor(Math.random() * 3 ) + 1;
    switch(x){
        case 1: y = "Rock";
        break;
        case 2: y = "Paper";
        break;
        case 3: y = "Scissors"
        break;
    }
    return y;
}
function playRound() {
    pS = prompt("?", "Rock");
    cS = getComputerChoice();
    if(pS === cS){
        console.log("Tie!")
    } else if(pS == "Rock" && cS == "Scissors" || pS == "Scissors" && cS == "Paper" || pS == "Paper" && cS == "Rock" ){
        playerWins();
    } else if(cS == "Rock" && pS == "Scissors" || cS == "Scissors" && pS == "Paper" || cS == "Paper" && pS == "Rock" ){
        computerWins();
    }
}
function game(){
for(i = 1; i <=5; i++){
        playRound();
    }
    if(countP == countC){
        console.log("WOW TIE");
    } else if(countP < countC){
        console.log("Computer won!");
    } else {
        console.log("You won!");
    }
}
game();