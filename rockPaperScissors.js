let computerSelection = ["rock","paper","scissors"];
let computerPlay= Math.floor(Math.random() * computerSelection.length);
function getComputerChoice (){
console.log("The computer choose " +computerPlay, computerSelection[computerPlay]);//define computer input
}

getComputerChoice()