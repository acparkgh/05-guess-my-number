'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number 🎉';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

const generateSecretNumber = function () {
  return ( Math.trunc(Math.random() * 20) + 1 )
}
let secretNumber = generateSecretNumber();

let score = document.querySelector('.score').textContent;

// let message = document.querySelector('.message');
let playerScore = document.querySelector('.score');
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  // let message = document.querySelector('.message').textContent;

  if (!guess) {
    displayMessage('⛔️ No Number!');

  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!')
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    };
    // } else if (guess !== secretNumber) {
  } else {
    if (score > 1) {
      displayMessage( guess > secretNumber ? '😳 Too High!' : '🥺 Too Low!' )
      score--;
      playerScore.textContent = score;
    } else {
      displayMessage('😢 You lost the game!')
      score -= 1;
      playerScore.textContent = score;
    }
    
    // } else if (guess > secretNumber) {
    //     if (score > 1) {
    //       message.textContent = '😳 Too High!';
    //       score--;
    //       playerScore.textContent = score;
    //     } else {
    //       message.textContent = '😢 You lost the game!';
    //       score--;
    //       playerScore.textContent = score;
    //     }
    // } else {
    //     if (score > 1) {
    //       message.textContent = '🥺 Too Low!';
    //       score -= 1;
    //       playerScore.textContent = score;
    //     } else {
    //       message.textContent = '😢 You lost game!';
    //       score -= 1;
    //       playerScore.textContent = score;
    //     }
    // }
  }
});

const resetGame = function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = generateSecretNumber();
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
}

document.querySelector('.again').addEventListener('click', resetGame);
