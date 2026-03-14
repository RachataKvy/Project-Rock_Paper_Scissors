// JavaScript for a rock, paper, scissors game

//Function that generated random number output then converted to strings
function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 100);
    if (randNum < 33) {
        return "rock";
    } else if (randNum > 33 && randNum < 66) {
        return "paper";
    } else {
        return "scissors";
    }
}

//Function that will takes the user choice and returns it
function getHumanChoice() {
    let humanInput = prompt("Input either rock, paper, or scissors");
    let lowcaseChoice = humanInput.toLowerCase();
    if (lowcaseChoice == "rock" || lowcaseChoice == "paper" || lowcaseChoice == "scissors") {
        return lowcaseChoice;
    } else {
        return undefined;
    }
}

//Logic to play the entire game for 5 rounds
function playGame() {
//Variables to keep track of the players score
    let humanScore = 0;
    let computerScore = 0;
    //Logic to play a single round
    function playRound(humanChoice, computerChoice) {
        if (humanChoice == "rock" && computerChoice == "paper") {
            computerScore++;
            return "You lose! Paper beats Rock";
        } else if (humanChoice == "rock" && computerChoice == "rock") {
            return ("Draw! Rock equal Rock");
        } else if (humanChoice == "rock" && computerChoice == "scissors") {
            humanScore++;
            return ("You win! Rock beats Scissors");
        } else if (humanChoice == "paper" && computerChoice == "paper") {
            return ("Draw! Paper equal Paper");
        } else if (humanChoice == "paper" && computerChoice == "rock") {
            humanScore++;
            return ("You win! Paper beats Rock");
        } else if (humanChoice == "paper" && computerChoice == "scissors") {
            computerScore++;
            return ("You lose! Scissors beats Paper");
        } else if (humanChoice == "scissors" && computerChoice == "paper") {
            humanScore++;
            return ("You win! Scissors beats Paper");
        } else if (humanChoice == "scissors" && computerChoice == "rock") {
            computerScore++;
            return ("You lose! Rock beats Scissors");
        } else if (humanChoice == "scissors" && computerChoice == "scissors") {
            return ("Draw! Scissors equal Scissors");
        }
    }
    // Play for 5 rounds
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
        console.log(humanScore);
        console.log(computerScore);
    }

    if (humanScore > computerScore) {
        console.log("You win the game!");
        console.log(humanScore + " : " + computerScore);
    } else if (humanScore < computerScore) {
        console.log("You lose the game!");
        console.log(humanScore + " : " + computerScore);
    } else {
        console.log("It a Draw!");
        console.log(humanScore + " : " + computerScore);
    }
}

playGame()