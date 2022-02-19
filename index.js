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
  startGame();
}
// button.remove();
// title.remove();
//playground------------------------------------------
function startGame(){
    showCards
}
function showCards() {
   var card = document.createElement('div');
   var playground = document.createElement('section');
   card.classList.add('card-front', 'card-back');
   playground.classList.add('palyground');
   document.body.append(playground);
}
var cards = document.querySelectorAll('.card')

function cardFlip() {
    this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', cardFlip));

