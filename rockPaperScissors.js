/* 
The objective of this assignment is to create a Rock Paper Scissors game in which a user can play against a computer.
The main steps for this are as follows:
- Create a function that allows a human user to enter in either rock, paper, or scissors, completely case insensitive
- Create a function that generates the computer choice, likely using a random number generator
- Create a function that scores the two, where
    - Rock crushes scissors
    - Scissors cuts paper
    - Paper covers rock
    - Ties results in re-running the function
    - Scores are updated accordingly
- Create a function runs a round of the game (human choice, computer choice, score)
- Create a function that runs a game of 5 rounds
*/
console.log("Hello World")
let computerSelection = "";
let humanSelection = "";
let roundResult = "";

function getComputerChoice() {
    let choiceNumber = (Math.random()*3);
    //console.log(choiceNumber);
    let computerChoice = "";
    if (choiceNumber < 1) {
        computerChoice = "rock";
    } else if (choiceNumber <2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    //console.log(computerChoice);
    return(computerChoice);
}

function getHumanChoice() {
    let validChoice = false;
    let humanChoice = ""
    while (validChoice==false) {
        humanChoice = prompt("Please type your choice: rock, paper, or scissors.");
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice == "rock") {
            validChoice = true;
        } else if (humanChoice == "paper") {
            validChoice = true;
        } else if (humanChoice == "scissors") {
            validChoice = true;
        } else {
            alert("Not a valid selection. Please try again.")
        }
    }
    //console.log(humanChoice)
    return(humanChoice);
}

function playRound(humanChoice, computerChoice) {
    //console.log(humanChoice);
    //console.log(computerChoice);
    if (humanChoice == "rock") {
        if (computerChoice == "rock") {
            roundResult = "tie";
            console.log("No winner - You both chose rock!");
        } else if (computerChoice == "paper") {
            roundResult = "lose";
            console.log("You lose - Computer chose paper!");
        } else if (computerChoice == "scissors") {
            roundResult = "win";
            console.log("You win - Computer chose scissors!");
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            roundResult = "win";
            console.log("You win - Computer chose rock!");
        } else if (computerChoice == "paper") {
            roundResult = "tie";
            console.log("No winner = You both chose paper!");
        } else if (computerChoice == "scissors") {
            roundResult = "lose";
            console.log("You lose - Computer chose scissors!");
        }
    } else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            roundResult = "lose";
            console.log("You lose - Computer chose rock!");
        } else if (computerChoice == "paper") {
            roundResult = "win";
            console.log("You win - Computer chose paper!");
        } else if (computerChoice == "scissors") {
            roundResult = "tie";
            console.log("No winner - You both chose scissors!");
        }
    }
    console.log(roundResult);
    return roundResult;
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let roundsPlayed = 0;
    let winner = "";
    let gameMessage = "";
    while (roundsPlayed <5) {
        computerSelection = getComputerChoice();
        humanSelection = getHumanChoice();
        playRound(humanSelection, computerSelection)
        if (roundResult == "win") {
            humanScore++;
            roundsPlayed++;
        } else if (roundResult == "lose") {
            computerScore++;
            roundsPlayed++;
        } else if (roundResult =="tie") {
            console.log("No winner this round - play again!");
        }
        console.log("The score is - ");
        console.log("Human");
        console.log(humanScore);
        console.log("Computer");
        console.log(computerScore);
    }
    if (humanScore > computerScore) {
        gameMessage="Congratulations! You won!";
        winner = "human";
    } else if (humanScore < computerScore) {
        gameMessage="Better luck next time!";
        winner = "computer";
    }
    document.getElementById("humanScore").innerHTML = `You won ${humanScore} rounds`;
    document.getElementById("winner").innerHTML = gameMessage;
    document.getElementById("computerScore").innerHTML = `Computer won ${computerScore} rounds!`;
}

//playGame()