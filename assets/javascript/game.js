// document.onkeyup = function(){
//     var userguess = String.fromCharCode(event.keycode).toLowerCase();   
//     console.log(userguess);
// }
var wins  = 0
var losses = 0
var guessesLeft = 9
var guesses = []
var letters = ("abcdefghijklmnopqrstuvwxyz").split("");
var currentRandomPick = "";
var currentEnteredLetter = "";

document.onkeypress = function(evt) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    var charStr = String.fromCharCode(charCode);
    currentEnteredLetter = charStr.toLowerCase();
    console.log("You entered: " + currentEnteredLetter);
    handleGuess(currentEnteredLetter); 
};

function randomLetter(){
    var random = Math.floor(Math.random() * letters.length); // 0-6 e.g. 5
    //words[4] --> "five"
    var  letter = letters[random];
    return letter; 
}

function startGame() {
    console.log("Starting game...");
    currentRandomPick = randomLetter();
    console.log("Random letter picked is: " + currentRandomPick);
    setWins(wins);
    setLosses(losses);
    setGuessesLeft(guessesLeft);
    setGuessesSoFar(guesses);
}

function setWins(wins_arg){
    var wins_element = document.getElementById("wins_count");
    wins_element.innerHTML = "  " + wins_arg;
}
function setLosses(loss_arg){
    var loss_element = document.getElementById("losses");
    loss_element.innerHTML= "  " + loss_arg;
}
function setGuessesLeft(left_arg){
    var left_element = document.getElementById("guesses");
    left_element.innerHTML= "  " + left_arg;
}
function setGuessesSoFar(guesses_arg){
    var guesses_element = document.getElementById("guessessofar");
    guesses_element.innerHTML= "  " + guesses_arg;
}

function handleGuess (letter_r) {
    if (letter_r === currentRandomPick){
        handleWin();
    }
    else {
        incorrect();
    }
}

function handleWin(){
    wins++;
    reset();
    setWins(wins);
    setGuessesLeft(guessesLeft);
    setGuessesSoFar(guesses);
}

function reset (){
    guessesLeft=9;
    guesses = [];
}
function incorrect(){
    guessesLeft--;
    guesses.push(currentEnteredLetter);
    setGuessesLeft(guessesLeft);
    setGuessesSoFar(guesses);
    didTheyLoose();
}


function didTheyLoose(){
    if (guessesLeft === 0){
        handleLoss();
    }
}

function handleLoss(){
    losses++;
    reset();
    setGuessesLeft(guessesLeft);
    setGuessesSoFar(guesses);
    setLosses(losses);
}

startGame();

//user makes a choice
//computer creates random letter 
// compares letters and determine a win (print) or continue (games left)
// Display Results "Your guesses so far"
// Display Results "Guesses Left"
// Display Results "wins"

//computer creates 9 choices
// after 9 (to 0) choices computer creates a loss and starts at 9 again
// Display Results "losses"

// var letters = ("a", "b", "c", "d")
