'use strict';

/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log(document.querySelector('.message').textContent);*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

const displaymessage = function(message){
  document.querySelector('.message').textContent = message;
};

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  score = 20;

  document.querySelector('.score').textContent = score;

  document.querySelector('.guess').value = '';

  displaymessage('Começe a adivinhar...');

  document.querySelector('.number').textContent = '?';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no number
  if (!guess) {
    displaymessage('⛔ Sem número');
  } 
    //When is the correct number
   else if (guess === secretNumber) {
    displaymessage('🎉 Numero Correto!!!');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //When is not the number
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displaymessage(guess > secretNumber ? '📈 Alto!' : '📉 Baixo!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displaymessage('💥 Você perdeu o jogo!');
    }
  }
});
