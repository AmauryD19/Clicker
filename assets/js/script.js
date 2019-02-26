let click = document.getElementById('click');
let affichage = document.getElementById('affichage');
let multiplier = document.getElementById('multiplier');
let autoclicker = document.getElementById('autoclicker');

let score = 200;
let valeurClick = 1;
let multiplicateur = 1;
let prixMultipicateur= 50;
let prixAutoclicker = 200;

function augmenterMultiplicateur() {
    if (score >= prixMultipicateur) {
        score -= prixMultipicateur;
        multiplicateur += 1;
        prixMultipicateur *= 2;
        console.log(prixMultipicateur);
        console.log(multiplicateur);
        valeurClick = multiplicateur;
        afficherScore();
        multiplier.innerHTML = ("Multiplicateur x" +multiplicateur+ " "+prixMultipicateur);
    }
}

function autoclickerTEST() {
    if (score >= prixAutoclicker) {
        score -= prixAutoclicker;
        autoclicker.style.display = "none";
        setInterval(function(){
        augmenterScore();
        }, 1000);
        afficherScore();
    }
}

function augmenterScore() {
    score += valeurClick;
    console.log(score);
    afficherScore();
}

function afficherScore() {
    affichage.innerHTML = score;
}


click.addEventListener('mousedown', augmenterScore);
multiplier.addEventListener('mousedown', augmenterMultiplicateur);
autoclicker.addEventListener('mousedown', autoclickerTEST);