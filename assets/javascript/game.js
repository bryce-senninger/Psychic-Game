let computerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let wins = 0;

let losses = 0;

let remaining = 9;

let guesses = []

function updateWins() {
    document.getElementById("wins").innerHTML = "Wins: " + wins;
}

function updateLoss() {
    document.getElementById("losses").innerHTML = "Losses: " + losses; 
}

function updateRemaining() {
    document.getElementById("remaining").innerHTML = "Remaining Guesses: " + remaining;
}

function updateGuesses() {
    document.getElementById("guessed").innerHTML = "Guessed Letters: " + guesses;
}

function reset() {
    guesses = [];
    remaining = 9;
    updateGuesses();
    updateRemaining();
}

function chooseRandom() {
    let computerGuess = computerArray[Math.floor(Math.random()*computerArray.length)];
    document.onkeyup = function(event) {
        let letter = event.key.toLowerCase();
        if (letter === computerGuess) {
            wins ++;
            updateWins();
            chooseRandom();
            reset();
        } else {
            remaining --;
            guesses.push(" " + letter);
            updateGuesses();
            updateRemaining();
            function gameEnd() {
                if (remaining === 0) {
                    losses ++;
                    updateLoss();
                    alert("It was " + computerGuess + "!")
                    reset();
                    chooseRandom();
                }
            }
            gameEnd();
        }
    }

}

chooseRandom();



function playAudio() {
    let music = document.getElementById("myAudio");
    music.play();
}

function pauseAudio() {
    let music = document.getElementById("myAudio");
    music.pause();
}