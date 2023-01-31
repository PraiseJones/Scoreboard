const scoreHome = document.getElementById('score');
const scoreGuest = document.getElementById('scoreg');

let scoreh = 0;
let scoreg = 0;

function addoneh() {
    scoreh += 1
    scoreHome.textContent = scoreh;
}

function addtwoh() {
    scoreh += 2
    scoreHome.textContent = scoreh;
}

function addthreeh() {
    scoreh += 3
    scoreHome.textContent = scoreh;
}

function addoneg() {
    scoreg += 1
    scoreGuest.textContent = scoreg;
}

function addtwog() {
    scoreg += 2
    scoreGuest.textContent = scoreg;
}

function addthreeg() {
    scoreg += 3
    scoreGuest.textContent = scoreg;
}



                