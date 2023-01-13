function getComputerChoice () {
   const ComputerSelection = Math.floor(Math.random()*3);
    switch(ComputerSelection) {
        case 0:
           return 'rock';
           break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
        default:
            console.log('Invalid');
            break;
    }
};

 
function getUserChoice () {
    let PlayerSelection = prompt ("What's your choice!?");
    return PlayerSelection.toLowerCase();
}

//console.log(getUserChoice())

function playRound(playerSelection, computerSelection) {

}
   const playerSelection =getUserChoice()
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));

