/* get Element */
click = document.getElementById('click');
display = document.getElementById('display');
multiplicator = document.getElementById('multiplicator');
autoclick = document.getElementById('autoclick');

/* valeurs de base */

let score = 0;
let clickValue = 1;
let multiplier = 1;

/* fonctions */
    /* les displays */
function displayScore() {
    display.innerHTML = score;
}

function displayMultiplicator() {
    multiply.value = 'x' + multiplier;
}
    /* les scores*/
function clickScore() {
    score += clickValue;
    displayScore();
}

function multiplicatorScore() {
    multiplier += 1;
    displayScore();
    displayMultiplicator();
}
/* appels des fonctions de base */
click.addEventListener('click', clickScore);
displayScore();
displayMultiplicator(); 
