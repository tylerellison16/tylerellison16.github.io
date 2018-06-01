// Create an array of words
const word = ['shale','basalt','limestone','marble','granite','sandstone','dolomite','gneiss','schist','obsidian','flint'];
// Choose word randomly
let randNum = Math.floor(Math.random() * word.length);
let choosenWord = generateRandomWord();
let wordLength = choosenWord.length
let underScore = initializeunderScore(wordLength);
let rightWord = [];
let wrongWord = [];
var counter = 6;
var wins = 0;
var losses = 0;


// Dom manipulation
let docUnderscore = document.getElementsByClassName('underscore');
let docRightGuess = document.getElementsByClassName('rightGuess');
let docWrongGuess = document.getElementsByClassName('wrongGuess');
var counterElement = document.getElementById("counter");
var winElement = document.getElementById("spanWin");
var lossElement = document.getElementById("spanLoss");

counterElement.innerHTML = counter;
winElement.innerHTML = wins;
lossElement.innerHTML = losses;


docUnderscore[0].innerHTML = underScore.join('');
console.log(choosenWord);

function generateRandomWord() {
    let randNum = Math.floor(Math.random() * word.length);
    let choosenWord = word[randNum];
    return choosenWord;
}
function initializeunderScore (wordLength) {
    let underscore = [];
    for (let i = 0; i < wordLength; i++) {
        underscore.push('_ ')
    }
    return underscore
}

console.log(choosenWord);

// Get users guess
document.addEventListener('keypress', (event) => {
    let keyword = String.fromCharCode(event.keyCode);
// Check if guess is right
    if(choosenWord.indexOf(keyword) > -1) {
        // add to right words array
        rightWord.push(keyword);
        
        //replace underscore with right letter
        //underScore[choosenWord.indexOf(keyword)] = keyword;

        for (let i = 0; i < choosenWord.length; i++) {
            if(choosenWord.charAt(i) === keyword) {
                underScore[i] = keyword

            }
        }


        docUnderscore[0].innerHTML = underScore;
        docRightGuess[0].innerHTML = rightWord;

        //Checks to see if user word matches guesses

        if(underScore.join('') === choosenWord) {
            alert('You Win');
            winElement.innerHTML = wins++;
            rightWord = [];
            wrongWord = [];
            counter = 6;
            counterElement.innerHTML = counter;
            choosenWord = generateRandomWord();
            underScore = initializeunderScore(choosenWord.length);
            docRightGuess.innerHTML = rightWord;
            docWrongGuess.innerHTML = wrongWord;
            docUnderscore.innerHTML = underScore;
            

        }
    } else {
        wrongWord.push(keyword);
        
    }
    
// if wrong update counter
    if (choosenWord.indexOf(keyword) < 0) {
        --counter;
        console.log(counter);

    }

// add to losses if more than 6 letters misguessed
    if (counter < 1) {
        lossElement.innerHTML = losses++;
        alert('You Lose');
        counter = 6;
        counterElement.innerHTML = counter;
        rightWord = [];
        wrongWord = [];
        choosenWord = generateRandomWord();
        underScore = initializeunderScore(choosenWord.length);
        docRightGuess.innerHTML = rightWord;
        docWrongGuess.innerHTML = wrongWord;
        docUnderscore.innerHTML = underScore;
    }

    docWrongGuess[0].innerHTML = wrongWord;
    docUnderscore[0].innerHTML = underScore.join(' ');

    counterElement.innerHTML = counter;
    winElement.innerHTML = wins;
    lossElement.innerHTML = losses;
});

// if wrong push to wrong array
