// =========================
// SPM TOP AGENCY V100 ELITE
// =========================

// Welcome Screen
window.addEventListener("load", () => {

const welcome = document.getElementById("welcome");

setTimeout(() => {

welcome.style.opacity = "0";

welcome.style.visibility = "hidden";

},2500);

});

// Smooth Navigation

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});

// Header Blur

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>80){

header.style.background="rgba(8,15,30,.75)";

header.style.backdropFilter="blur(30px)";

}else{

header.style.background="rgba(255,255,255,.08)";

}

});

// Counter Animation

const counters=document.querySelectorAll(".stat-card h1");

counters.forEach(counter=>{

const target=counter.innerText;

if(!isNaN(target)){

let count=0;

const update=()=>{

count+=Math.ceil(target/100);

if(count<target){

counter.innerText=count;

requestAnimationFrame(update);

}else{

counter.innerText=target;

}

};

update();

}

});
// =========================
// Mouse Glow Effect
// =========================

const glow = document.createElement("div");
glow.className = "cursor-glow";
document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";
glow.style.top=e.clientY+"px";

});

// =========================
// Scroll Reveal Animation
// =========================

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.15
});

document.querySelectorAll(

".status-card,.coin-card,.vip-card,.update-card,.stat-card,.contact-card"

).forEach(el=>observer.observe(el));

// =========================
// Floating Particles
// =========================

const bg=document.querySelector(".aurora-bg");

for(let i=0;i<80;i++){

const p=document.createElement("span");

p.className="particle";

p.style.left=Math.random()*100+"%";

p.style.animationDuration=(6+Math.random()*12)+"s";

p.style.animationDelay=Math.random()*8+"s";

p.style.width=(2+Math.random()*6)+"px";

p.style.height=p.style.width;

bg.appendChild(p);

}

// =========================
// News Auto Change
// =========================

const news=[

"🔥 Welcome to SPM TOP AGENCY",

"🪙 Premium Coin Recharge 24×7",

"👑 VIP Upgrade Available",

"💸 Paid Sending Active",

"🎮 YOYO Voice Chat & Ludo",

"📢 Join Our Official WhatsApp Channel"

];

let index=0;

setInterval(()=>{

const ticker=document.getElementById("newsTicker");

if(ticker){

index=(index+1)%news.length;

ticker.innerHTML=news[index];

}

},4000);

// =========================
// Console Signature
// =========================

console.log("SPM TOP AGENCY V100 ELITE");
console.log("Designed with ❤️ Future AI UI");
// =============================
// Dynamic Theme Glow
// =============================

const colors = [

"#00ffff",
"#7b2cff",
"#ff2ea6",
"#ffd700",
"#22ff88",
"#00bfff"

];

let colorIndex = 0;

setInterval(() => {

document.documentElement.style.setProperty(
"--cyan",
colors[colorIndex]
);

colorIndex++;

if(colorIndex >= colors.length){

colorIndex = 0;

}

},3000);

// =============================
// Hero Floating Animation
// =============================

const heroLogo=document.querySelector(".hero-logo");

let angle=0;

function floating(){

angle+=0.02;

heroLogo.style.transform=

`translateY(${Math.sin(angle)*15}px)
rotate(${Math.sin(angle)*4}deg)`;

requestAnimationFrame(floating);

}

if(heroLogo){

floating();

}

// =============================
// Ripple Button Effect
// =============================

document.querySelectorAll(".btn,.coin-btn,.vip-btn,.contact-btn")

.forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

ripple.className="ripple";

const rect=this.getBoundingClientRect();

ripple.style.left=e.clientX-rect.left+"px";

ripple.style.top=e.clientY-rect.top+"px";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},700);

});

});

// =============================
// Random Glow Effect
// =============================

setInterval(()=>{

document.querySelectorAll(

".coin-card,.vip-card,.status-card"

).forEach(card=>{

card.style.boxShadow=

`0 0 ${20+Math.random()*40}px rgba(0,255,255,.35)`;

});

},2500);

// =============================
// Digital Clock
// =============================

function updateClock(){

const clock=document.getElementById("liveClock");

if(clock){

const d=new Date();

clock.innerHTML=d.toLocaleTimeString();

}

}

setInterval(updateClock,1000);

updateClock();

// =============================
// Footer Year
// =============================

const year=document.getElementById("year");

if(year){

year.innerHTML=new Date().getFullYear();

}

console.log("🚀 SPM TOP AGENCY V100 ULTRA AI Loaded");
// =============================
// AI Typing Effect
// =============================

const typing = document.getElementById("typingText");

if (typing) {

const words = [

"Premium Coin Recharge",

"VIP Upgrade",

"YOYO Official Dealer",

"24×7 Live Support",

"Future AI Platform"

];

let word = 0;
let char = 0;
let deleting = false;

function typeEffect() {

const current = words[word];

if (!deleting) {

typing.innerHTML = current.substring(0, char++);
if (char > current.length) {
deleting = true;
setTimeout(typeEffect, 1500);
return;
}

} else {

typing.innerHTML = current.substring(0, char--);

if (char < 0) {
deleting = false;
word = (word + 1) % words.length;
}

}

setTimeout(typeEffect, deleting ? 40 : 80);

}

typeEffect();

}

// =============================
// Scroll Progress Bar
// =============================

const progress = document.createElement("div");

progress.id = "scrollProgress";

document.body.appendChild(progress);

window.addEventListener("scroll", () => {

const total =
document.documentElement.scrollHeight -
window.innerHeight;

const percent =
(window.scrollY / total) * 100;

progress.style.width = percent + "%";

});

// =============================
// Back To Top
// =============================

const topBtn = document.querySelector(".top");

if (topBtn) {

window.addEventListener("scroll", () => {

topBtn.style.display =
window.scrollY > 400 ? "flex" : "none";

});

}

// =============================
// AI Welcome Message
// =============================

setTimeout(() => {

console.log("🤖 Welcome to SPM TOP AGENCY");

},3000);

// =============================
// Finish
// =============================

console.log("V100 ULTRA AI WEBSITE READY");
// =====================================
// MATRIX BACKGROUND EFFECT
// =====================================

const canvas = document.createElement("canvas");
canvas.id = "matrixCanvas";
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "01SPMTOPAGENCYYOYO";
const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);
const drops = Array(columns).fill(1);

function drawMatrix() {

ctx.fillStyle = "rgba(5,8,22,0.08)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle = "#00ffff";
ctx.font = fontSize + "px monospace";

for(let i=0;i<drops.length;i++){

const text =
letters[Math.floor(Math.random()*letters.length)];

ctx.fillText(text,i*fontSize,drops[i]*fontSize);

if(drops[i]*fontSize>canvas.height &&
Math.random()>0.98){

drops[i]=0;

}

drops[i]++;

}

}

setInterval(drawMatrix,35);

window.addEventListener("resize",()=>{

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

});

// =====================================
// RANDOM AI GLOW
// =====================================

setInterval(()=>{

document.querySelectorAll(".coin-card,.vip-card,.contact-card")
.forEach(card=>{

card.style.transform=
`translateY(${-Math.random()*5}px)`;

});

},2500);

// =====================================
// LIVE TIME
// =====================================

function liveTime(){

const el=document.getElementById("liveClock");

if(!el) return;

el.innerHTML=new Date().toLocaleString();

}

setInterval(liveTime,1000);

liveTime();

// =====================================
// PAGE READY
// =====================================

console.clear();

console.log("%cSPM TOP AGENCY",
"color:#00ffff;font-size:30px;font-weight:bold;");

console.log("%cV100 ULTRA AI WEBSITE",
"color:#ffd700;font-size:18px;");
