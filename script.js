'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.score').textContent = 278;
// console.log(document.querySelector('.guess').value);

function findmax(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    if (Number(arr[i]) < Number(arr[i + 1])) {
      max = arr[i + 1];
    }
  }
  return max;
}

let hasWon = false;
document.querySelector('.number').textContent = '?';
let number = Math.trunc(Math.random() * 20 + 1);
let currScore = document.querySelector('.score').textContent;
//document.querySelector('.number').textContent = number;
let scores = new Array(0);
console.log(number);

document.querySelector('.check').addEventListener('click', function () {
  if (!hasWon) {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    if (!guess) {
      document.querySelector('.message').textContent = 'No Number';
    } else if (guess === number) {
      document.querySelector('.number').textContent = number;
      document.querySelector('.message').textContent = 'Correct Number';
      document.querySelector('body').style.backgroundColor = '#30b880';
      document.querySelector('.number').style.width = '30rem';
      scores.push(Number(currScore));
      console.log(scores);
      document.querySelector('.highscore').textContent = findmax(scores);
      hasWon = !hasWon;
    } else if (guess > number) {
      document.querySelector('.message').textContent =
        'Not the right number, lower';
      currScore--;
    } else {
      document.querySelector('.message').textContent =
        'Not the right number, higher';
      currScore--;
    }
    if (currScore <= 0) {
      document.querySelector('.message').textContent = 'Game Over';
      currScore = 0;
    }
    document.querySelector('.score').textContent = currScore;
  } else {
    document.querySelector('.message').textContent =
      'You have got this round 😃';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  hasWon = !hasWon;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  number = Math.trunc(Math.random() * 20 + 1);
  console.log(number);
  document.querySelector('.score').textContent = 20;
  currScore = document.querySelector('.score').textContent;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
