/* ===================================================
   SPM TOP AGENCY
   APP.JS
=================================================== */

/* ---------- CONFIG ---------- */

const RATE = 12.6; // ₹100 = 1260 Coins

// Paid Sending Rate
// 100000 Coins = ₹6000
const PAID_RATE = 100000 / 6000;

/* ---------- SPLASH SCREEN ---------- */

window.addEventListener("load", () => {

  setTimeout(() => {

    document.getElementById("splash").classList.add("hide");

  }, 2500);

});

/* ---------- VISITOR COUNTER ---------- */

let visitors = Number(localStorage.getItem("spm_visitors") || 0);

visitors++;

localStorage.setItem("spm_visitors", visitors);

document.getElementById("statVisitors").textContent =
visitors.toLocaleString("en-IN");

/* ---------- DEMO STATS ---------- */

animateCounter("statCustomers", 12500);

animateCounter("statCoins", 35000000);

function animateCounter(id, end) {

  const el = document.getElementById(id);

  let start = 0;

  const speed = Math.max(1, Math.floor(end / 180));

  const timer = setInterval(() => {

    start += speed;

    if (start >= end) {

      start = end;

      clearInterval(timer);

    }

    el.textContent = start.toLocaleString("en-IN");

  }, 20);

}

/* ---------- COIN CALCULATOR ---------- */

const rsInput = document.getElementById("rsInput");

const coinResult = document.getElementById("coinResult");

if (rsInput) {

  rsInput.addEventListener("input", () => {

    const rupees = parseFloat(rsInput.value) || 0;

    const coins = Math.round(rupees * RATE);

    coinResult.textContent = coins.toLocaleString("en-IN");

  });

}

/* ---------- PAID SENDING ---------- */

const psCoinsInput = document.getElementById("psCoins");

const psRupeesEl = document.getElementById("psRupees");

if (psCoinsInput) {

  psCoinsInput.addEventListener("input", () => {

    const coins = parseFloat(psCoinsInput.value) || 0;

    const rupees = Math.round((coins / PAID_RATE) * 100) / 100;

    psRupeesEl.textContent =
      "₹" + rupees.toLocaleString("en-IN");

  });

}

function sendPaidSending() {

  const id = document.getElementById("psId").value.trim();

  const coins =
    document.getElementById("psCoins").value.trim();

  const dealer =
    document.getElementById("psDealer").value;

  if (!id || !coins) {

    alert("Please enter your ID and coin amount.");

    return;

  }

  const rupees =
    (
      Math.round(
        (parseFloat(coins) / PAID_RATE) * 100
      ) / 100
    ).toLocaleString("en-IN");

  const msg =
`Hello SPM TOP AGENCY (100857)

Paid Sending Request

ID : ${id}

Coins : ${coins}

Approx Value : ₹${rupees}`;

  window.open(

`https://wa.me/${dealer}?text=${encodeURIComponent(msg)}`,

"_blank"

  );

}
/* ===================================================
   ORDER SYSTEM
=================================================== */

function sendOrder() {

  const name = document.getElementById("orderName").value.trim();
  const amount = document.getElementById("orderAmount").value.trim();
  const dealer = document.getElementById("orderDealer").value;
  const gameId = document.getElementById("orderGameId").value.trim();

  if (!name || !amount) {
    alert("Please enter your name and amount.");
    return;
  }

  const coins = Math.round(parseFloat(amount) * RATE).toLocaleString("en-IN");

  let msg =
`Hello SPM TOP AGENCY (Code 100857)

🧑 Name : ${name}

💰 Recharge Amount : ₹${amount}

🪙 Coins : ${coins}`;

  if (gameId) {
    msg += `

🎮 Game/App ID : ${gameId}`;
  }

  window.open(
    `https://wa.me/${dealer}?text=${encodeURIComponent(msg)}`,
    "_blank"
  );

}

/* ===================================================
   COUNTDOWN TIMER
=================================================== */

const targetDate = new Date("2026-12-31T23:59:59").getTime();

function updateCountdown() {

  const now = new Date().getTime();

  const distance = targetDate - now;

  if (distance <= 0) {

    document.getElementById("cdDays").textContent = "00";
    document.getElementById("cdHours").textContent = "00";
    document.getElementById("cdMins").textContent = "00";
    document.getElementById("cdSecs").textContent = "00";

    return;

  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24))
    / (1000 * 60 * 60)
  );

  const mins = Math.floor(
    (distance % (1000 * 60 * 60))
    / (1000 * 60)
  );

  const secs = Math.floor(
    (distance % (1000 * 60))
    / 1000
  );

  document.getElementById("cdDays").textContent =
    String(days).padStart(2, "0");

  document.getElementById("cdHours").textContent =
    String(hours).padStart(2, "0");

  document.getElementById("cdMins").textContent =
    String(mins).padStart(2, "0");

  document.getElementById("cdSecs").textContent =
    String(secs).padStart(2, "0");

}

setInterval(updateCountdown, 1000);

updateCountdown();

/* ===================================================
   FAQ
=================================================== */

document.querySelectorAll(".faq-item").forEach(item => {

  item.querySelector(".faq-q").addEventListener("click", () => {

    const open = item.classList.contains("open");

    document.querySelectorAll(".faq-item")
      .forEach(i => i.classList.remove("open"));

    if (!open) {
      item.classList.add("open");
    }

  });

});

/* ===================================================
   3D COIN EFFECT
=================================================== */

const coin = document.getElementById("coin3d");

if (coin) {

  let rotate = 0;

  setInterval(() => {

    rotate += 1;

    coin.style.transform =
      `rotateY(${rotate}deg) rotateX(10deg)`;

  }, 30);

}

/* ===================================================
   FLOATING CARDS
=================================================== */

document.querySelectorAll(".card").forEach((card, index) => {

  card.style.animation =
    `float ${4 + index * 0.3}s ease-in-out infinite`;

});
/* ===================================================
   AI CHATBOT
=================================================== */

function sendChat() {

  const input = document.getElementById("chatInput");
  const body = document.getElementById("chatBody");

  if (!input || !body) return;

  const msg = input.value.trim();

  if (!msg) return;

  const user = document.createElement("div");
  user.className = "chat-msg-user";
  user.textContent = msg;

  body.appendChild(user);

  input.value = "";

  let reply =
    "Thanks! Please contact our official dealers for confirmed rates.";

  const text = msg.toLowerCase();

  if (text.includes("coin") || text.includes("rate")) {

    reply = "Current Recharge Rate: ₹100 = 1260 Coins.";

  }

  else if (text.includes("paid")) {

    reply = "Paid Sending Rate: 100,000 Coins = ₹6,000.";

  }

  else if (text.includes("vip")) {

    reply = "VIP Upgrade Event is Live. Contact our official dealers.";

  }

  else if (text.includes("agency")) {

    reply = "Agency Code: 100857. Contact Mr. Abhi or Mr. Rishi to join.";

  }

  else if (text.includes("dealer")) {

    reply = "Official Dealers:\nMr. Abhi\nMr. Rishi";

  }

  else if (text.includes("hello") || text.includes("hi")) {

    reply = "👋 Welcome to SPM TOP AGENCY.";

  }

  setTimeout(() => {

    const bot = document.createElement("div");

    bot.className = "chat-msg-bot";

    bot.textContent = reply;

    body.appendChild(bot);

    body.scrollTop = body.scrollHeight;

  }, 500);

}

const chatInput = document.getElementById("chatInput");

if (chatInput) {

  chatInput.addEventListener("keypress", e => {

    if (e.key === "Enter") {

      sendChat();

    }

  });

}

/* ===================================================
   LANGUAGE BUTTONS
=================================================== */

["en","hi","pa"].forEach(lang => {

  const btn = document.getElementById("btn-" + lang);

  if (!btn) return;

  btn.addEventListener("click", () => {

    document
      .querySelectorAll(".lang-switch button")
      .forEach(b => b.classList.remove("active"));

    btn.classList.add("active");

    // Translation object can be added here later

  });

});

/* ===================================================
   3D STAR BACKGROUND
=================================================== */

if (typeof THREE !== "undefined") {

const scene = new THREE.Scene();

const camera =
new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

const renderer =
new THREE.WebGLRenderer({

canvas:document.getElementById("space-canvas"),

alpha:true

});

renderer.setSize(
window.innerWidth,
window.innerHeight
);

camera.position.z = 5;

const geometry =
new THREE.BufferGeometry();

const vertices = [];

for(let i=0;i<4000;i++){

vertices.push(

(Math.random()-0.5)*2000,
(Math.random()-0.5)*2000,
(Math.random()-0.5)*2000

);

}

geometry.setAttribute(

"position",

new THREE.Float32BufferAttribute(vertices,3)

);

const material =
new THREE.PointsMaterial({

color:0x00e5ff,

size:2

});

const stars =
new THREE.Points(

geometry,

material

);

scene.add(stars);

function animate(){

requestAnimationFrame(animate);

stars.rotation.y+=0.0006;

stars.rotation.x+=0.0002;

renderer.render(scene,camera);

}

animate();

window.addEventListener("resize",()=>{

camera.aspect=
window.innerWidth/window.innerHeight;

camera.updateProjectionMatrix();

renderer.setSize(

window.innerWidth,

window.innerHeight

);

});

}

/* ===================================================
   SMOOTH SCROLL
=================================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth",

block:"start"

});

}

});

});

/* ===================================================
   READY
=================================================== */

console.log("✅ SPM TOP AGENCY Loaded Successfully");
