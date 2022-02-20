//main menu-------------------------------------------
var title = document.createElement('H1');
var text1 = document.createTextNode('memory game');
title.append(text1);
document.body.append(title);
var button = document.createElement('button');
var text2 = document.createTextNode('start');
button.append(text2);
button.classList.add('start-button');
document.body.append(button);
button.addEventListener('click',menuVanish);

function menuVanish() {
  button.classList.replace('start-button', 'start-button-vanish');
  title.classList.add('header-vanish');
  setTimeout(startGame, 2000);
}
var playground = document.querySelector('.playground');

function startGame() {
    button.remove();
    title.remove();
    setInterval(showTime, 1000);
    setInterval(showMinutes, 60000);
    playground.classList.toggle('game');
    document.querySelector('.time').innerHTML = `Time:${minutes}:${seconds}`;
    document.querySelector('.score').innerHTML = `Score: ${score}`;
}

var changer = document.querySelector('.changer')
var clickCounterForChanger = 0;

function changeTheme() {
  if (clickCounterForChanger === 0) {
    document.body.classList.add('theme1');
    clickCounterForChanger++
  } else if (clickCounterForChanger === 1) {
    document.body.classList.replace('theme1', 'theme2');
    clickCounterForChanger++ 
  } else if (clickCounterForChanger === 2) {
    document.body.classList.replace('theme2', 'theme3');
    clickCounterForChanger++ 
  } else {
    document.body.classList.remove('theme3');
    clickCounterForChanger = 0
  }
}

changer.addEventListener('click', changeTheme)
//playground------------------------------------------
let px = 100;
let score = 0;
let cardsMatched = 0;

// function startGame(){
//     showCards
// }
// function showCards() {
//    var card = document.createElement('div');
//    var playground = document.createElement('section');
//    card.classList.add('card-front', 'card-back');
//    playground.classList.add('palyground');
//    document.body.append(playground);
// }
var cards = document.querySelectorAll('.card')
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

  function cardFlip() {
   if (lockBoard) return;
   if (this === firstCard) return;
   this.classList.add('flip');

   if (!hasFlippedCard) {
     hasFlippedCard = true;
     firstCard = this;
     return;
     }
     
secondCard = this;

checkForMatch();
}

function checkForMatch() {
    if (firstCard.dataset.pic === secondCard.dataset.pic) {
      disableCards();
      return;
    }
    unflipCards();
}
     
function disableCards() {
    if(px > 0) {
        score = score + px;
        px = 100;
    } else {
        score = score + 1;
        px = 100;
    };
    cardsMatched = cardsMatched + 2;
    showScore();
    firstCard.removeEventListener('click', cardFlip);
    secondCard.removeEventListener('click', cardFlip);
    resetBoard();
    isFinished();
}
    
function unflipCards() {
    px = px - 10;
    lockBoard = true;
    setTimeout(() => {
       firstCard.classList.remove('flip');
       secondCard.classList.remove('flip');
       resetBoard();
    }, 1500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }

  (function shuffle() {
    cards.forEach(card => {
       let ramdomPos = Math.floor(Math.random() * 12);
       card.style.order = ramdomPos;
    });
})();

cards.forEach(card => card.addEventListener('click', cardFlip));


let seconds = 0;
let minutes = 0;


function showTime() {
    if (seconds <= 59) {
        seconds++;
    } else {
        seconds = 0
    }
    document.querySelector('.time').innerHTML = `Time: ${minutes} : ${seconds}`;
}
function showMinutes() {
    minutes++;
    document.querySelector('.time').innerHTML = `Time: ${minutes} : ${seconds}`;
}

function showScore() {
    document.querySelector('.score').innerHTML = `Score: ${score}`;
}
function isFinished () {
    if (cardsMatched < 40) {
        return;
    } else {
        showResults();
    }
}
//game end ----------------------------------------------------------------------
function showResults() {
    playground.classList.toggle('game');
    document.querySelector('.result-time').innerHTML = `Time: ${minutes} : ${seconds}`;
    document.querySelector('.result-score').innerHTML = `Score: ${score}`;
    document.querySelector('.total-score').innerHTML = `Total score: ${score * (300 - minutes * 60 + seconds)}`;
    setTimeout(table, 2000);
}
function table() {
    document.querySelector('.results').classList.toggle('game');
    document.querySelector('.result-box').classList.toggle('game');
    document.querySelector('.result-name').classList.toggle('game');
    var infos = document.querySelector('.infos');
    infos.style.visibility = 'hidden';
}

var againButton = document.querySelector('.again');

function playAgain() {
    document.querySelector('.results').classList.toggle('game');
    location.reload();
}

againButton.addEventListener('click',playAgain);
