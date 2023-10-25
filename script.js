let countP = 0, countC = 0;

function playerWins(){
    console.log("You Won this round!");
    countP += 1; 
    roundWinner.textContent = "You Won this round!"
}
function computerWins(){
    console.log("Computer Wins this round!")
    countC += 1;
    roundWinner.textContent = "Computer Wins this round!"

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

function play(a){
    roundNum.textContent = "Round "+roundNumber;
    let pS = a, cS = getComputerChoice();
    playerSelect.textContent = "Player " + pS;
    computerSelect.textContent = "Computer "+cS;
    selection.appendChild(playerSelect);
    selection.appendChild(computerSelect);
    console.log(pS);
    console.log(cS);
    if(pS === cS){
        console.log("Tie!")
        roundWinner.textContent = "Tie!";
    } else if(pS == "Rock" && cS == "Scissors" || pS == "Scissors" && cS == "Paper" || pS == "Paper" && cS == "Rock" ){
        playerWins();
    } else if(cS == "Rock" && pS == "Scissors" || cS == "Scissors" && pS == "Paper" || cS == "Paper" && pS == "Rock" ){
        computerWins();
    }
    roundNumber +=1;
    console.log(roundNumber);
    if(roundNumber == 7){
        gameDiv.textContent = "";
        const text1 = document.createElement("p");
        const result = document.createElement("p");
        const playerScore = document.createElement("p");
        const computerScore = document.createElement("p");
        const score = document.createElement("div");
        score.classList.add("score");
        text1.textContent = "Score";
        playerScore.textContent = "Player: "+ countP;
        computerScore.textContent = "Computer: "+ countC;
        gameDiv.appendChild(text1);
        gameDiv.appendChild(score);
        score.appendChild(playerScore);
        score.appendChild(computerScore);
        if(countC == countP){
            result.textContent = "Wow Its a Tie";
        } else if(countC > countP){
            result.textContent = "Computer Wins!";
        } else {
            result.textContent = "Player Wins!";
        }
        console.log(result.textContent)
        gameDiv.appendChild(result);    
    }
}

function playRound(){
    rock.textContent = "Rock";
    paper.textContent = "Paper";
    scissors.textContent = "Scissors";
    roundNum.textContent = "Round "+1;
    buttons.classList.add("btn");
    selection.classList.add("sl");
    gameDiv.appendChild(roundNum);
    gameDiv.appendChild(buttons);
    buttons.appendChild(rock);
    buttons.appendChild(paper);
    buttons.appendChild(scissors);
    gameDiv.appendChild(selection);
    gameDiv.appendChild(roundWinner);
    rock.addEventListener("click" , (e) => {
        let a = e.target.textContent;
        play(a)});
    paper.addEventListener("click" , (e) => {
        let a = e.target.textContent;
        play(a)});
    scissors.addEventListener("click" , (e) => {
        let a = e.target.textContent;
        play(a)});    
}
const gameDiv = document.querySelector(".game-div");
const header = document.querySelector("header");
const title = document.createElement("h1")
const start = document.createElement("button")
const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");
const roundNum = document.createElement("p");
const buttons = document.createElement("div");
const selection = document.createElement("div");
const playerSelect = document.createElement("p");
const computerSelect = document.createElement("p");
const roundWinner = document.createElement("p");
let roundNumber = 2;


function game(){
title.textContent = "Rock Paper Scissors";
start.classList.add("start");
start.textContent = "Start Game";
header.appendChild(title);
gameDiv.appendChild(start);
start.addEventListener("click", () =>{
    gameDiv.removeChild(start);
    playRound();
});
}
game();
