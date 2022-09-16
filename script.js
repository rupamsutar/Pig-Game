'use strict';

//Selecting Elements
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

let currentScore = 0;

//Rolling the Dice Functionality:
btnRoll.addEventListener("click", function() {
    //Generating a random number
    const dice = Math.trunc((Math.random() * 6) + 1);
    console.log(dice)

    //Display dice
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;
    
    //Check for roll 1: if true switch to next player:
    if(dice !== 1) {
        currentScore += dice;
        current0El.textContent = currentScore;
    }
});