
'use strict';

// produces a random number between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// max score is 20

let score = 20;

//sets the high score to 0 initially

let highScore = 0;

// const getNUmber=function(){
//     let number;
//
//     if(number>=1&&number<=20){
//         number=prompt('Enter a number between 1 and 20');
//     }else{
//         alert('invalid input :Enter a number between 1 and 20');
//     }
// }

const displayMessage = function (message) {// a function that displays the message which removes duplication of message class selector.
    document.querySelector('.message').textContent = message;
};


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if (!guess) {
        // document.querySelector('.message').textContent = '⛔️ No number is entered';

        displayMessage('⛔️ No number is entered')

    }else if(!Number.isInteger(guess)){
        displayMessage('invalid input:only integer is allowed ')
    } else if(guess < 1 || guess > 20){
        displayMessage('invalid input : please enter a number between 1 and 20');
    } else if (guess === secretNumber) {

        // document.querySelector('.message').textContent = '🎉🎉 Correct Number!';

        displayMessage('🎉🎉 Correct Number!');
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width='30rem';

        // if the player wins or guesses correctly, the highscore is stored until another max score is obtained

        if(score>highScore){
            highScore=score;
        }
        document.querySelector('.highscore').textContent=highScore;
        console.log(score,highScore)


    } else if(guess!==secretNumber){
        if (score > 1) {
            // document.querySelector('.message').textContent =guess>secretNumber? 'Too High!': 'Too Low!';

            displayMessage(guess>secretNumber?'Too High!':'Too Low!');

            score--;
            document.querySelector('.score').textContent = score;
        } else {
            // document.querySelector('.message').textContent = '😔💥 You lost the game';

            displayMessage('😔💥 You lost the game');

            document.querySelector('.score').textContent = 0;
        }
    }

});
// when we want to play again the guess game
document.querySelector('.again').addEventListener('click', function () {

    // restoring the first conditions of the required one
    score=20;
    secretNumber=Math.trunc(Math.random() * 20) + 1;

    // document.querySelector('.message').textContent ='start guessing...';

    displayMessage('start guessing...');

    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value ='';// empty the first number that is correctly guessed
    console.log(score,highScore)
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width='15rem';

});