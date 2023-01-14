function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == "rock" && computerSelection[computerPlay] == "scissors" ||
        playerSelection.toLowerCase() == "paper" && computerSelection[computerPlay] == "rock" ||
        playerSelection.toLowerCase() == "scissors" && computerSelection[computerPlay] == "paper") {
        playerScore++;
        return win;
    }
    else if (playerSelection.toLowerCase() == "rock" && computerSelection[computerPlay] == "paper" ||
        playerSelection.toLowerCase() == "scissors" && computerSelection[computerPlay] == "rock" ||
        playerSelection.toLowerCase() == "paper" && computerSelection[computerPlay] == "scissors") {
        computerScore++;
        return lose;
    }
    else if (playerSelection.toLowerCase() == computerSelection[computerPlay]) {
        tieScore++;
        return tie;
    } //if player input rock compare to rock, its a tie
    else {
        return "you must input rock, paper or scissors";

    } //else if player input paper compare to rock, you win
}



let playerSelection = prompt("lets play rock papper scissors"); //define player, player input
//let player = playerSelection.toLowerCase(); //convert user input to lowercase *old
console.log("you choose " + playerSelection.toLowerCase()); //show user input in lowercase



let computerSelection = ["rock", "paper", "scissors"];
let computerPlay = Math.floor(Math.random() * computerSelection.length);
function getComputerChoice() {
    console.log("The computer choose " + computerPlay, computerSelection[computerPlay]);//define computer input
}

getComputerChoice()