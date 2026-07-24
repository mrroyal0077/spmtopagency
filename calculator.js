/* ==========================================
SPM AI Coin Calculator v2.0
Powered by SPM TOP AGENCY
========================================== */

const coinRates = {
    100: 1260,
    200: 2520,
    300: 3780,
    500: 6300,
    1000: 12600,
    3000: 37800,
    5000: 63000,
    10000: 126000,
    20000: 252000
};

const amountInput = document.getElementById("amount");
const calculateBtn = document.getElementById("calculateCoins");
const resultCoins = document.getElementById("resultCoins");
const resultPrice = document.getElementById("resultPrice");

if (calculateBtn) {
    calculateBtn.addEventListener("click", calculateCoins);
}

function calculateCoins() {

    const amount = Number(amountInput.value);

    if (!amount || amount <= 0) {

        resultCoins.innerHTML = "0 Coins";
        resultPrice.innerHTML = "Enter valid amount";

        return;
    }

    let coins = amount * 12.6;

    resultCoins.innerHTML =
        coins.toLocaleString() + " Coins";

    resultPrice.innerHTML =
        "₹ " + amount.toLocaleString();
}

/* ==========================================
QUICK PACKAGE SELECT
========================================== */

document.querySelectorAll(".coin-card").forEach(card => {

    card.addEventListener("click", () => {

        const value = Number(card.dataset.amount);

        if (!value) return;

        amountInput.value = value;

        calculateCoins();

    });

});

/* ==========================================
FORMAT INPUT
========================================== */

if (amountInput) {

    amountInput.addEventListener("input", () => {

        amountInput.value =
            amountInput.value.replace(/[^0-9]/g, "");

    });

}

/* ==========================================
RESET
========================================== */

function resetCalculator() {

    amountInput.value = "";

    resultCoins.innerHTML = "0 Coins";

    resultPrice.innerHTML = "₹ 0";

}
/* ==========================================
BONUS COIN CALCULATOR
========================================== */

function calculateBonus(amount){

let bonus = 0;

if(amount >= 500){
bonus += amount * 0.02;
}

if(amount >= 3000){
bonus += amount * 0.03;
}

if(amount >= 10000){
bonus += amount * 0.05;
}

return Math.floor(bonus * 12.6);

}

/* ==========================================
CALCULATE TOTAL
========================================== */

function updateCalculation(){

const amount = Number(amountInput.value);

if(!amount || amount <= 0){

resultCoins.innerHTML = "0 Coins";
resultPrice.innerHTML = "₹ 0";

const bonus = document.getElementById("bonusCoins");
const total = document.getElementById("totalCoins");

if(bonus) bonus.innerHTML = "0";
if(total) total.innerHTML = "0";

return;

}

const coins = Math.floor(amount * 12.6);
const bonusCoins = calculateBonus(amount);
const totalCoins = coins + bonusCoins;

resultCoins.innerHTML = coins.toLocaleString() + " Coins";
resultPrice.innerHTML = "₹ " + amount.toLocaleString();

const bonus = document.getElementById("bonusCoins");
const total = document.getElementById("totalCoins");

if(bonus){
bonus.innerHTML = bonusCoins.toLocaleString();
}

if(total){
total.innerHTML = totalCoins.toLocaleString();
}

}

/* ==========================================
COPY RESULT
========================================== */

function copyCalculation(){

const text = `
SPM AI Coin Calculator

Amount : ₹${amountInput.value}

Coins : ${resultCoins.innerText}

Bonus : ${document.getElementById("bonusCoins")?.innerText || "0"}

Total : ${document.getElementById("totalCoins")?.innerText || "0"}
`;

navigator.clipboard.writeText(text);

if(typeof showToast==="function"){
showToast("Calculation Copied","success");
}

}

/* ==========================================
SHARE RESULT
========================================== */

async function shareCalculation(){

const text =
`Recharge ₹${amountInput.value}
Coins: ${resultCoins.innerText}`;

if(navigator.share){

try{

await navigator.share({

title:"SPM AI Coin Calculator",

text:text

});

}catch(e){}

}else{

copyCalculation();

}

}

/* ==========================================
BEST VALUE TAG
========================================== */

document.querySelectorAll(".coin-card").forEach(card=>{

const amount = Number(card.dataset.amount);

if(amount >= 10000){

const tag = document.createElement("span");

tag.className = "best-value";

tag.innerText = "⭐ Best Value";

card.appendChild(tag);

}

});

/* ==========================================
AUTO UPDATE
========================================== */

if(amountInput){

amountInput.addEventListener("input",updateCalculation);

}

if(calculateBtn){

calculateBtn.addEventListener("click",updateCalculation);

}
/* ==========================================
RECHARGE COMPARISON
========================================== */

function comparePackage(){

const amount = Number(amountInput.value);

const recommendation = document.getElementById("recommendation");

if(!recommendation) return;

if(amount < 1000){

recommendation.innerHTML =
"💡 Recommended Package: ₹1,000";

}

else if(amount < 5000){

recommendation.innerHTML =
"💎 Best Choice: ₹5,000";

}

else if(amount < 10000){

recommendation.innerHTML =
"🚀 Better Value: ₹10,000";

}

else{

recommendation.innerHTML =
"👑 Premium Choice: ₹20,000";

}

}

/* ==========================================
SAVINGS CALCULATOR
========================================== */

function calculateSavings(){

const amount = Number(amountInput.value);

const saving = document.getElementById("savingAmount");

if(!saving) return;

let discount = 0;

if(amount>=3000){

discount=2;

}

if(amount>=10000){

discount=5;

}

if(amount>=20000){

discount=8;

}

saving.innerHTML=discount+"%";

}

/* ==========================================
PROGRESS BAR
========================================== */

function updateProgress(){

const progress=document.getElementById("progressBar");

if(!progress) return;

const amount=Number(amountInput.value);

let width=(amount/20000)*100;

if(width>100){

width=100;

}

progress.style.width=width+"%";

}

/* ==========================================
PACKAGE RECOMMENDATION
========================================== */

function recommendPackage(){

const amount=Number(amountInput.value);

const packageBox=document.getElementById("packageBox");

if(!packageBox) return;

if(amount<=500){

packageBox.innerHTML="₹500 Package";

}

else if(amount<=1000){

packageBox.innerHTML="₹1,000 Package";

}

else if(amount<=3000){

packageBox.innerHTML="₹3,000 Package";

}

else if(amount<=5000){

packageBox.innerHTML="₹5,000 Package";

}

else if(amount<=10000){

packageBox.innerHTML="₹10,000 Package";

}

else{

packageBox.innerHTML="₹20,000 Premium Package";

}

}

/* ==========================================
PRINT RESULT
========================================== */

function printCalculation(){

window.print();

}

/* ==========================================
DOWNLOAD TEXT
========================================== */

function downloadCalculation(){

const content=`
SPM AI Coin Calculator

Amount:
₹${amountInput.value}

Coins:
${resultCoins.innerText}

Bonus:
${document.getElementById("bonusCoins")?.innerText||0}

Total:
${document.getElementById("totalCoins")?.innerText||0}
`;

const blob=new Blob([content],{

type:"text/plain"

});

const link=document.createElement("a");

link.href=URL.createObjectURL(blob);

link.download="SPM_Calculation.txt";

link.click();

}

/* ==========================================
AUTO UPDATE
========================================== */

function refreshCalculator(){

updateCalculation();

comparePackage();

calculateSavings();

updateProgress();

recommendPackage();

}

if(amountInput){

amountInput.addEventListener(

"input",

refreshCalculator

);

}

refreshCalculator();

/* ==========================================
END
========================================== */

console.log("SPM Calculator Ready");
