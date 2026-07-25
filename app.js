// ===============================
// SPM TOP AGENCY
// Powered By SPM AI
// ===============================

// Recharge Calculator
function calculateCoins() {

const amount = Number(document.getElementById("amount").value);

const result = document.getElementById("coinResult");

if (!amount || amount <= 0) {

result.innerHTML = "Enter Valid Amount";

return;

}

const coins = amount * 12.6;

result.innerHTML = coins.toLocaleString() + " Coins";

}

// Paid Sending Calculator
function calculatePaid() {

const coins = Number(document.getElementById("paidCoins").value);

const result = document.getElementById("paidResult");

if (!coins || coins <= 0) {

result.innerHTML = "Enter Valid Coins";

return;

}

const price = (coins / 100000) * 6000;

result.innerHTML = "₹ " + price.toLocaleString();

}

// ===============================
// SPM AI Assistant
// ===============================

function sendMessage() {

const input = document.getElementById("userInput");

const chat = document.getElementById("chatMessages");

const msg = input.value.trim();

if (msg === "") return;

let reply = "";

const text = msg.toLowerCase();

if (text.includes("coin")) {

reply = "🪙 Coin Recharge is available 24×7.";

}

else if (text.includes("vip")) {

reply = "👑 VIP Upgrade is available instantly.";

}

else if (text.includes("agency")) {

reply = "🏆 Agency Code : 100857";

}

else if (text.includes("paid")) {

reply = "💸 100,000 Coins = ₹6,000";

}

else if (text.includes("hello") || text.includes("hi")) {

reply = "👋 Welcome to SPM TOP AGENCY.";

}

else {

reply = "🤖 Thank you. Please contact our official dealer for more information.";

}

chat.innerHTML += `

<div style="margin-top:15px">

<b>You :</b> ${msg}

<br><br>

<b>SPM AI :</b> ${reply}

<hr style="margin-top:15px;border-color:#333">

</div>

`;

input.value = "";

chat.scrollTop = chat.scrollHeight;

}

// ===============================
// Counter Animation
// ===============================

const counters = document.querySelectorAll(".stat-box h2");

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if (entry.isIntersecting) {

const counter = entry.target;

const target = parseInt(counter.innerText);

if (isNaN(target)) return;

let current = 0;

const speed = target / 100;

const update = () => {

current += speed;

if (current < target) {

counter.innerText = Math.floor(current);

requestAnimationFrame(update);

}

else {

counter.innerText = target + "+";

}

};

update();

}

});

});

counters.forEach(counter => observer.observe(counter));

// ===============================
// Header Shadow
// ===============================

window.addEventListener("scroll", () => {

const header = document.querySelector("header");

if (window.scrollY > 50) {

header.style.boxShadow = "0 10px 30px rgba(0,0,0,.4)";

}

else {

header.style.boxShadow = "none";

}

});

// ===============================
// Fade Animation
// ===============================

const hidden = document.querySelectorAll(

".card,.dealer-card,.feature,.calc-box,.ai-box,.stat-box"

);

const fade = new IntersectionObserver(entries => {

entries.forEach(entry => {

if (entry.isIntersecting) {

entry.target.style.opacity = "1";

entry.target.style.transform = "translateY(0)";

}

});

});

hidden.forEach(item => {

item.style.opacity = "0";

item.style.transform = "translateY(40px)";

item.style.transition = ".8s";

fade.observe(item);

});

// ===============================
// Service Worker
// ===============================

if ("serviceWorker" in navigator) {

window.addEventListener("load", () => {

navigator.serviceWorker.register("service-worker.js");

});

}
