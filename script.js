'use strict';

//Selecting Elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold= document.querySelector(".btn--hold");


//starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");
let playing = true;

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

//Rolling the Dice Functionality:
btnRoll.addEventListener("click", function() {
    if (playing) {
        //Generating a random number
        const dice = Math.trunc((Math.random() * 6) + 1);
        console.log(dice)

        //Display dice
        diceEl.classList.remove("hidden");
        diceEl.src = `dice-${dice}.png`;
        
        //Check for roll 1: if true switch to next player:
        if(dice !== 1) {
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            switchPlayer();
        }
    };
    
});


// Hold Functionality:

btnHold.addEventListener("click", function() {

    if (playing) {

        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    

        if (scores[activePlayer] > 20) {
            document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
            document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
            playing = false;
            diceEl.classList.add("hidden");
        } else {
            switchPlayer();
        };
    };
    
});

//Newgame Functionality

btnNew.addEventListener("click", function() {

    player0El.classList.remove("player--active", "player--winner");
    player1El.classList.remove("player--active", "player--winner");
    current0El.textContent = 0;
    current1El.textContent = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;

    scores[0] = 0;
    scores[1] = 0;

    score0El.textContent = 0;
    score1El.textContent = 0;
    diceEl.classList.add("hidden");
    playing = true;
    currentScore = 0;
    activePlayer = 0;
    player0El.classList.add("player--active");
    
});



//functions :

function switchPlayer() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
};