//function to generate random computer choice from the three choices
function getComputerChoice() {
    const ComputerSelection = Math.floor(Math.random() * 3);
    switch (ComputerSelection) {
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

// function to prompt the user to enter a choice
function getUserChoice() {
    let playerSelection = prompt(" lets play rock papper scissors!");
    console.log("you choose " + playerSelection.toLowerCase())
    return playerSelection.toLowerCase();
}

//define scorea
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

//define win, lose or tie
const win = "You Win this round!\n -------";//define win
const lose = "You Lose this round!\n -------";//define lose
const tie = "This round is a tie!\n -------";//define tie

//one round function to determinf=e the winner
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        tieScore++;
        return tie;
    }
    else if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++;
        return win;
    }
    else if (playerSelection == "rock" && computerSelection == "paper" || playerSelection == "scissors" && computerSelection == "rock" || playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++;
        return lose;
    }
    else {
        return ("You can only input rock paper or scissors")
    }
};

//assingment of userinput and the random computer selection to new consts used in playround()
var playerSelection = getUserChoice();
var computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

function game() {

    for (let i = 0; i < 4; i++) { //what is going to be loop
        getUserChoice()
    }
    console.log("The computer choose" + computerSelection)
        if (playerScore > computerScore) {
            return "You Win this game. \n -------";
        } if (playerScore == computerScore) {
            return "This game is a tie.\n -------";
        }
        else {
            return "You Lose this game.\n -------";
        }
    }


console.log(game()); //play the loop
console.log(" Your final score is " + playerScore + " wins " + computerScore + " loses and " + tieScore + " draws.\n --------\n");

let score = playerScore + computerScore + tieScore;
console.log("You played this game " + score + " times.\n --------\nGame over .");
        //count win lose or tie
