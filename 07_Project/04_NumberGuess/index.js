const randomNumber = parseInt(Math.random()*100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuesses = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click',function(e) {
        e.preventDefault();
        const guess = parseInt(userInput.value)
        //console.log(guess);
        validate(guess);
    });
}

function validate(guess) {
    if(isNaN(guess)) {
        alert('Please enter a valid number');
    } 
    else if(guess < 1){
        alert('Please enter a number more than 1');
    }
    else if(guess > 100){
        alert('Please enter a number less than 100');
    }
    else{
        prevGuess.push(guess);
        if(numGuesses === 11){
            displayGuess(guess);
            displayMessage(`Game Over. Random Number was ${randomNumber}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if(guess==randomNumber){
        displayMessage("You Won the Game")
        endGame();
    }
    else if(guess > randomNumber){
        displayMessage("Number is Higher than the random number")
    }
    else{
        displayMessage("Number is Lesser than the random number")
    }
}

function displayGuess(guess) {
    
}

function displayMessage(message) {

}

function newGame() {
    
}

function endGame() {

}

