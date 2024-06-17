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

function getComputerChoice() {
    const choiceNumber = (Math.random *3).ceiling
    console.log(choiceNumber)
}