// JavaScript for a rock, paper, scissors game

//Variables to keep track of the players score
let humanScore = 0;
let computerScore = 0;

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
//Logic to play a single round
function playRound(humanChoice, computerChoice) {
    let result = "";
    if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore++;
        result = "You lose! Paper beats Rock";
    } else if (humanChoice == "rock" && computerChoice == "rock") {
        result = ("Draw! Rock equal Rock");
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++;
        result = ("You win! Rock beats Scissors");
    } else if (humanChoice == "paper" && computerChoice == "paper") {
        result = ("Draw! Paper equal Paper");
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
        result = ("You win! Paper beats Rock");
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore++;
        result = ("You lose! Scissors beats Paper");
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        result = ("You win! Scissors beats Paper");
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore++;
        result = ("You lose! Rock beats Scissors");
    } else if (humanChoice == "scissors" && computerChoice == "scissors") {
        result = ("Draw! Scissors equal Scissors");
    }

    //Update DOM
    let results = document.querySelector("#results");
    let score = document.querySelector("#score");

    results.textContent = result;
    score.textContent = `Player: ${humanScore} - Computer: ${computerScore}`;

    //Check for winner
    if (humanScore === 5 || computerScore === 5) {
        annouceWinner();
    }
}

// Annouce winner and disable buttons
function annouceWinner() {
    let winner = humanScore === 5 ? "You win the game!" : "Computer win the game!";
    document.getElementById("results").textContent = winner;

    //Disable buttons
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;

}

// Event listeners for buttons
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});
paper.addEventListener("click", () => {
    playRound("paper",getComputerChoice());
});
scissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});