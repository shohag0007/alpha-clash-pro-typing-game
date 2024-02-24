// function play(){
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');
// }


function continueGame(){
// step-1 generate a random alphabet
const alphabet = getARandomAlphabet();
console.log('Your Random Alphabet',alphabet);

// set randomly generated alphabet to the screen. (show it)
const currentAlphabetElement = document.getElementById('current-alphabet');
currentAlphabetElement.innerText = alphabet;

}


function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}
