let click = document.getElementById('click');
let affichage = document.getElementById('affichage');
let multiplier = document.getElementById('multiplier');
let autoclicker = document.getElementById('autoclicker');
let bonus = document.getElementById('bonus');

let score = 5000;
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
/*
function bonusUP() {
    if (score < prixBonus) {
        bonus.style.display = "none";
        bonusUP()
    }
    else {
        bonus.style.display = "";
        bonusUP()
    }
}
function bonusTEST() {
    for(bonusTime=0; bonusTime<=30; bonusTime++) {
        valeurClick *= 2;
        bonusUP()
    }
}*/

/*function bonusTEST() {
    score -= prixBonus;
    bonusTimer = setInterval(function(){
        score += 2*valeurClick;
        bonusTimer--;
        if (bonusTimer>0) {
            bonus.innerHTML = bonusTimer;
            console.log(bonusTimer);
        }
        if (bonusTEST<=0) {
            bonusTEST();
        }
    }, 1000);
}*/

function bonusTEST() {
    if(score>=prixBonus) {
        score -= prixBonus;
        let scoreBonus = 2*valeurClick
        score += scoreBonus;
        bonusTimer--;
        console.log("look "+scoreBonus);
        bonus.innerHTML = bonusTimer;
        afficherScore();
        if (bonusTimer===0) {
            bonusOver();
        }
    }
}

function bonusOver(){
    score += valeurClick;
    afficherScore();
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
bonus.addEventListener('mousedown', bonusTEST);
