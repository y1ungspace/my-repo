let buttonA = document.createElement('button');
buttonA.classList.add('play-button', 'nightingale');
document.body.append(buttonA);
let buttonB = document.createElement('button');
buttonB.classList.add('drozd');
document.body.append(buttonB);
let buttonC = document.createElement('button');
buttonC.classList.add('malinovka');
document.body.append(buttonC);
let buttonD = document.createElement('button');
buttonD.classList.add('lark');
document.body.append(buttonD);
let buttonE = document.createElement('button');
buttonE.classList.add('slavka');
document.body.append(buttonE);

let linkA = document.querySelector('.nightingale')
let linkB = document.querySelector('.drozd');
let linkC = document.querySelector('.malinovka');
let linkD = document.querySelector('.lark');
let linkE = document.querySelector('.slavka');

const background = document.querySelector('.main')


const button =  document.querySelector('.play-button')
const audio = new Audio();
let ifPlay = false

function pauseAudio() {
    audio.pause();
}
function ifPlayCheck() {
   if (ifPlay === false) {
       const value = true;
       ifPlay = value;
       const result = playAudio ();
       buttonA.classList.replace('play-button','stop-button')
       buttonB.classList.replace('play-button','stop-button')
       buttonC.classList.replace('play-button','stop-button')
       buttonD.classList.replace('play-button','stop-button')
       buttonE.classList.replace('play-button','stop-button')
   } else {
       const value = false;
       ifPlay = value;
       const result = pauseAudio();
       buttonA.classList.replace('stop-button','play-button')
       buttonB.classList.replace('stop-button','play-button')
       buttonC.classList.replace('stop-button','play-button')
       buttonD.classList.replace('stop-button','play-button')
       buttonE.classList.replace('stop-button','play-button')
   }
}
function playAudio (){
    if (buttonA.classList.contains('play-button') === true) {
        audio.src = 'assets/audio/solovey.mp3';
        audio.currentTime = 0;
        audio.play();
    } else if (buttonB.classList.contains('play-button') === true) {
        audio.src = 'assets/audio/drozd.mp3';
        audio.currentTime = 0;
        audio.play();
    } else if (buttonC.classList.contains('play-button') === true) {
        audio.src = 'assets/audio/zarynka.mp3';
        audio.currentTime = 0;
        audio.play();
    } else if (buttonD.classList.contains('play-button') === true) {
        audio.src = 'assets/audio/javoronok.mp3';
        audio.currentTime = 0;
        audio.play();
    } else {
        audio.src = 'assets/audio/slavka.mp3';
        audio.currentTime = 0;
        audio.play();
    }
}
function classChangerA () {
    buttonA.classList.add('play-button');
    buttonB.classList.remove('play-button', 'stop-button');
    buttonC.classList.remove('play-button', 'stop-button');
    buttonD.classList.remove('play-button', 'stop-button');
    buttonE.classList.remove('play-button', 'stop-button');
    linkA.classList.add('header-link');
    linkB.classList.remove('header-link');
    linkC.classList.remove('header-link');
    linkD.classList.remove('header-link');
    linkE.classList.remove('header-link');
    audio.pause();

}
function classChangerB () {
    buttonB.classList.add('play-button');
    buttonA.classList.remove('play-button', 'stop-button');
    buttonC.classList.remove('play-button', 'stop-button');
    buttonD.classList.remove('play-button', 'stop-button');
    buttonE.classList.remove('play-button', 'stop-button');
    linkA.classList.remove('header-link');
    linkB.classList.add('header-link');
    linkC.classList.remove('header-link');
    linkD.classList.remove('header-link');
    linkE.classList.remove('header-link');
    audio.pause();
}
function classChangerC () {
    buttonA.classList.remove('play-button', 'stop-button');
    buttonB.classList.remove('play-button', 'stop-button');
    buttonC.classList.add('play-button');
    buttonD.classList.remove('play-button', 'stop-button');
    buttonE.classList.remove('play-button', 'stop-button');
    linkA.classList.remove('header-link');
    linkB.classList.remove('header-link');
    linkC.classList.add('header-link');
    linkD.classList.remove('header-link');
    linkE.classList.remove('header-link');
    audio.pause();
}
function classChangerD () {
    buttonA.classList.remove('play-button', 'stop-button');
    buttonB.classList.remove('play-button', 'stop-button');
    buttonC.classList.remove('play-button', 'stop-button');
    buttonD.classList.add('play-button');
    buttonE.classList.remove('play-button', 'stop-button');
    linkA.classList.remove('header-link');
    linkB.classList.remove('header-link');
    linkC.classList.remove('header-link');
    linkD.classList.add('header-link');
    linkE.classList.remove('header-link');
    audio.pause();
}
function classChangerE () {
    buttonA.classList.remove('play-button', 'stop-button');
    buttonB.classList.remove('play-button', 'stop-button');
    buttonC.classList.remove('play-button', 'stop-button');
    buttonD.classList.remove('play-button', 'stop-button');
    buttonE.classList.add('play-button');
    linkA.classList.remove('header-link');
    linkB.classList.remove('header-link');
    linkC.classList.remove('header-link');
    linkD.classList.remove('header-link');
    linkE.classList.add('header-link');
    audio.pause();
}

buttonA.addEventListener('click', ifPlayCheck);
buttonB.addEventListener('click', ifPlayCheck);
buttonC.addEventListener('click', ifPlayCheck);
buttonD.addEventListener('click', ifPlayCheck);
buttonE.addEventListener('click', ifPlayCheck);

linkA.addEventListener('click', classChangerA);
linkB.addEventListener('click', classChangerB);
linkC.addEventListener('click', classChangerC);
linkD.addEventListener('click', classChangerD);
linkE.addEventListener('click', classChangerE);





