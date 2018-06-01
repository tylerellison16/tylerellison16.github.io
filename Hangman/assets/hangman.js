// Create an array of words
const words = ['shale','basalt','limestone','marble','granite','sandstone','dolomite','gneiss','schist','obsidian','flint'];
// Choose word randomly
Let randNum = Math.floor(Math.random() * word.length);
Let choosenWord = word[randNum];
Let underScore = [];
console.log(choosenWord);
// Create underscroes based on length of word
Let generateUnderscore = () => {
    for(Let i = 0; i < choosenWord.length; i++) {
        underScore.push('_');
    }
    return underScore;
}

console.log(generateUnderscore());
// Get users guess
// Check if guess is right
// if right push to right array
// if wrong push to wrong array
