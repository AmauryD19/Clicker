let click = document.getElementById('click');
let affichage = document.getElementById('affichage');
let multiplier = document.getElementById('multiplier');
let autoclicker = document.getElementById('autoclicker');
let bonus = document.getElementById('bonus');

let score = 0;
let valeurClick = 1;
let multiplicateur = 1;
let prixMultipicateur= 50;
let prixAutoclicker = 200;
let prixBonus = 5000;
let bonusTimer = 30;

function augmenterMultiplicateur() {
    if (score >= prixMultipicateur) {
        score -= prixMultipicateur;
        multiplicateur += 1;
        prixMultipicateur *= 2;
        valeurClick = multiplicateur;
        afficherScore();
        multiplier.innerHTML = ("Multiplicateur x" +multiplicateur+ " pour "+prixMultipicateur+" Lavas");
    }
}

function autoclickerRun() {
    if (score >= prixAutoclicker) {
        score -= prixAutoclicker;
        autoclicker.style.display = "none";
        setInterval(function(){
        augmenterScore();
        }, 1000);
        afficherScore();
    }
}

function bonusTurnOff() {
    valeurClick /= 2;
    bonusTimer = 30;
    afficherScore();
    bonus.disabled = false;
}

function bonusTurnOnn() {
        if(bonusTimer <= 30 && score >= prixBonus) {
            score -= prixBonus;
            valeurClick *= 2;
            bonus.disabled = true;
            let interval = setInterval(function(){
                bonusTimer--;
                bonus.innerHTML = bonusTimer;
                afficherScore();
                if(bonusTimer === 0){
                    clearInterval(interval);
                    bonusTurnOff();
                }
            }, 1000);
        }
}

function augmenterScore() {
    score += valeurClick;
    afficherScore();
    if(score>=prixMultipicateur) {
        multiplier.disabled = false;
    }
    else {
        multiplier.disabled = true;
    }    
}

function afficherScore() {
    if(score<2) {
    affichage.innerHTML = score+" Lava";
    }
    else {
        affichage.innerHTML = score+" Lavas";
    }
}


click.addEventListener('mousedown', augmenterScore);
multiplier.addEventListener('mousedown', augmenterMultiplicateur);
autoclicker.addEventListener('mousedown', autoclickerRun);
bonus.addEventListener('mousedown', bonusTurnOnn);