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
    let PlayerSelection = prompt("What's your choice!?");
    return PlayerSelection.toLowerCase();
}

//one round function to determinf=e the winner
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "The game is a tie"
    }

    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            return "You Win! Rock beats Paper";
        } else {
            return "Computer Won!";
        }
    }
        if (playerSelection === "rock") {
            if (computerSelection === "scissors") {
                return "You Win! Rock beats Scisors";
            } else {
                return "Computer Won!";
            }
        }
            if (playerSelection === "scissors") {
                if (computerSelection === "paper") {
                    return "You Win! Scissor beats Paper";
                } else {
                    return "Computer Won!";
                }
            }
                if (playerSelection === "paper") {
                    if (computerSelection === "rock") {
                        return "You Win! paper covers rock";
                    } else {
                        return "Computer Won!";
                    }
                }
            else {
                console.log("The user can only input rock paper or scissors")
                alert("The user can only input 'rock', 'paper' or 'scissors'")
            }
        };

        //assingment of userinput and the random computer selection to new consts used in playround()
            var playerSelection = getUserChoice()
            var computerSelection = getComputerChoice();
           console.log(playRound(playerSelection, computerSelection));


