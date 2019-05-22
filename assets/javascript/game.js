let computerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let computerGuess = computerArray[Math.floor(Math.random()*computerArray.length)];
console.log(computerGuess);

function chooseRandom () {
    let computerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let computerGuess = computerArray[Math.floor(Math.random()*computerArray.length)];
    console.log(computerGuess);
}

let wins = 0

let losses = 0


// console.log(computerGuess); //this is not necessary, just to help me see if it's working
 

function updateScore() {
    //write function here to call in if statement below

}

document.onkeyup = function(event) {
    let letter = event.key.toLowerCase();
        if (letter === computerGuess) {
            alert("WIN");
            // call appropriate update score function
            chooseRandom();
        }

}


