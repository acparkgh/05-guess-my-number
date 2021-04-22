'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number 🎉';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = Number(document.querySelector('.score').textContent);
let message = document.querySelector('.message');
let playerScore = document.querySelector('.score');

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  // let message = document.querySelector('.message').textContent;

  if (!guess) {
    message.textContent = '⛔️ No Number!';
  } else if (guess === secretNumber) {
    message.textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess > secretNumber) {
    if (score > 1) {
      message.textContent = '😳 Too High!';
      score--;
      playerScore.textContent = score;
    } else {
      message.textContent = '😢 You lost the game!';
      score--;
      playerScore.textContent = score;
    }
  } else {
    if (score > 1) {
      message.textContent = '🥺 Too Low!';
      score -= 1;
      playerScore.textContent = score;
    } else {
      message.textContent = '😢 You lost game!';
      score -= 1;
      playerScore.textContent = score;
    }
  }
});

const resetGame = function () {
  document.querySelector('.score').textContent = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
}

document.querySelector('.again').addEventListener('click', resetGame);
