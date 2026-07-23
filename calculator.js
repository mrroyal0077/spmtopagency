// ==========================
// SPM TOP AGENCY
// COIN CALCULATOR
// ==========================

const rate = 12.6;

const amountInput = document.getElementById("amount");
const coinResult = document.getElementById("coinResult");

if(amountInput && coinResult){

function calculateCoins(){

const amount = Number(amountInput.value);

if(amount <= 0 || isNaN(amount)){

coinResult.innerHTML = "0 Coins";
return;

}

const coins = Math.floor(amount * rate);

coinResult.innerHTML = coins.toLocaleString() + " Coins";

}

amountInput.addEventListener("input", calculateCoins);

calculateCoins();

}
