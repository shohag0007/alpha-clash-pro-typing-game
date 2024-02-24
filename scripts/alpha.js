// function play(){
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');
// }

function handleKeyBoardKeyUpEvent(event){
 
    const playerPressed = event.key;
    console.log('Player Pressed',playerPressed);
// key player is  expected to press.
const currentAlphabetElement = document.getElementById('current-alphabet');
const currentAlphabet = currentAlphabetElement.innerText;
const expectedAlphabet = currentAlphabet.toLowerCase();
console.log(playerPressed, currentAlphabet);
// check right or wrong key pressed
if(playerPressed === expectedAlphabet){
    console.log('you get a point');
    // update score
      // 1. get the current ScreenOrientation
       const currentScoreElement = document.getElementById('current-score');
       const currentScoreText = currentScoreElement.innerText;
       const currentScore = parseInt(currentScoreText);
       console.log(currentScore);
      // 2. increase the score by 1.
      const newScore = currentScore + 1;
       // 3. show the updated score
       currentScoreElement.innerText = newScore;
    // start a new round
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
}
else{
    console.log('you missed. you lost a life');
}
}

// capture keyboard key press
document.addEventListener('keyup',handleKeyBoardKeyUpEvent);

function continueGame(){
// step-1 generate a random alphabet
const alphabet = getARandomAlphabet();
//console.log('Your Random Alphabet',alphabet);

// set randomly generated alphabet to the screen. (show it)
const currentAlphabetElement = document.getElementById('current-alphabet');
currentAlphabetElement.innerText = alphabet;
// set background color
setBackgroundColorById(alphabet);

}


function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}
