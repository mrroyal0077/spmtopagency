"use strict";

/* ===========================
   SPM AI 2050
   Powered By SPM TOP AGENCY
=========================== */

document.addEventListener("DOMContentLoaded", () => {

const loader = document.getElementById("loader");

const menuButton = document.getElementById("menuButton");

const navMenu = document.querySelector(".nav-menu");

const themeButton = document.getElementById("themeButton");

/* ===========================
   AI LOADER
=========================== */

window.addEventListener("load", () => {

setTimeout(() => {

loader.style.opacity = "0";

loader.style.visibility = "hidden";

loader.style.pointerEvents = "none";

},2500);

});

/* ===========================
   MOBILE MENU
=========================== */

if(menuButton && navMenu){

menuButton.addEventListener("click",()=>{

navMenu.classList.toggle("active");

menuButton.classList.toggle("active");

});

}

/* ===========================
   THEME SWITCHER
=========================== */

let darkMode=true;

if(themeButton){

themeButton.addEventListener("click",()=>{

darkMode=!darkMode;

if(darkMode){

document.body.classList.remove("light-mode");

themeButton.innerHTML='<i class="fa-solid fa-moon"></i>';

}else{

document.body.classList.add("light-mode");

themeButton.innerHTML='<i class="fa-solid fa-sun"></i>';

}

});

}

/* ===========================
   SMOOTH NAVIGATION
=========================== */

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener("click",(e)=>{

const target=document.querySelector(link.getAttribute("href"));

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth",

block:"start"

});

}

});

});

});
/* ===========================
   AI COIN CALCULATOR
=========================== */

const rechargeInput = document.getElementById("rechargeAmount");
const coinOutput = document.getElementById("coinResult");

const coinRate = 12.6;

function updateCoinCalculator() {

if (!rechargeInput || !coinOutput) return;

const amount = Number(rechargeInput.value);

if (isNaN(amount) || amount <= 0) {

coinOutput.textContent = "0 Coins";

return;

}

const coins = Math.floor(amount * coinRate);

coinOutput.textContent = coins.toLocaleString() + " Coins";

}

if (rechargeInput) {

rechargeInput.addEventListener("input", updateCoinCalculator);

updateCoinCalculator();

}

/* ===========================
   ANIMATED COUNTERS
=========================== */

const counters = document.querySelectorAll("[data-counter]");

const animateCounter = (counter) => {

const target = Number(counter.dataset.counter);

let current = 0;

const increment = Math.max(1, Math.ceil(target / 120));

const timer = setInterval(() => {

current += increment;

if (current >= target) {

current = target;

clearInterval(timer);

}

counter.textContent = current.toLocaleString();

}, 20);

};

const counterObserver = new IntersectionObserver((entries) => {

entries.forEach((entry) => {

if (entry.isIntersecting) {

animateCounter(entry.target);

counterObserver.unobserve(entry.target);

}

});

}, {

threshold: 0.4

});

counters.forEach((counter) => {

counterObserver.observe(counter);

});

/* ===========================
   SCROLL REVEAL
=========================== */

const revealItems = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {

entries.forEach((entry) => {

if (entry.isIntersecting) {

entry.target.classList.add("show");

}

});

}, {

threshold: 0.15

});

revealItems.forEach((item) => {

revealObserver.observe(item);

});

/* ===========================
   PARALLAX GLOW
=========================== */

document.addEventListener("mousemove", (event) => {

const glow = document.querySelector(".cursor-glow");

if (!glow) return;

glow.style.left = event.clientX + "px";

glow.style.top = event.clientY + "px";

});

/* ===========================
   HERO FLOAT EFFECT
=========================== */

const floatingCards = document.querySelectorAll(".floating-card");

window.addEventListener("scroll", () => {

const scroll = window.scrollY;

floatingCards.forEach((card, index) => {

const speed = (index + 1) * 0.08;

card.style.transform = `translateY(${scroll * speed}px)`;

});

});

/* ===========================
   PAGE REVEAL
=========================== */

window.addEventListener("load", () => {

document.body.classList.add("page-loaded");

});
/* ===========================
   SPM AI CHAT
=========================== */

const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const chatMessages = document.getElementById("chatMessages");

const aiReplies = {
hello:"👋 Hello! Welcome to SPM AI.",
hi:"👋 Hi! How can I help you?",
coin:"💰 Coin Recharge is available 24/7.",
vip:"👑 VIP Upgrade service is available.",
agency:"🏆 SPM TOP AGENCY\nAgency Code : 100857",
support:"📲 Contact our official WhatsApp support.",
yoyo:"🎮 Official YOYO ID : 50873317",
thanks:"❤️ You're Welcome!"
};

function addMessage(message,type){

if(!chatMessages) return;

const bubble=document.createElement("div");

bubble.className=`chat-bubble ${type}`;

bubble.textContent=message;

chatMessages.appendChild(bubble);

chatMessages.scrollTop=chatMessages.scrollHeight;

}

function getReply(text){

const value=text.toLowerCase();

for(const key in aiReplies){

if(value.includes(key)){

return aiReplies[key];

}

}

return "🤖 Sorry, I didn't understand that. Please contact Support.";

}

if(chatForm){

chatForm.addEventListener("submit",(event)=>{

event.preventDefault();

const message=chatInput.value.trim();

if(message==="") return;

addMessage(message,"user");

chatInput.value="";

setTimeout(()=>{

typeReply(getReply(message));

},600);

});

}

/* ===========================
   AI TYPING EFFECT
=========================== */

function typeReply(text){

if(!chatMessages) return;

const bubble=document.createElement("div");

bubble.className="chat-bubble ai";

chatMessages.appendChild(bubble);

let index=0;

const typing=setInterval(()=>{

bubble.textContent=text.substring(0,index);

index++;

chatMessages.scrollTop=chatMessages.scrollHeight;

if(index>text.length){

clearInterval(typing);

}

},25);

}

/* ===========================
   VOICE AI
=========================== */

const voiceButton=document.getElementById("voiceButton");

if(

voiceButton &&

("webkitSpeechRecognition" in window || "SpeechRecognition" in window)

){

const SpeechRecognition=

window.SpeechRecognition ||

window.webkitSpeechRecognition;

const recognition=new SpeechRecognition();

recognition.lang="en-IN";

recognition.interimResults=false;

recognition.maxAlternatives=1;

voiceButton.addEventListener("click",()=>{

recognition.start();

});

recognition.onresult=(event)=>{

const transcript=event.results[0][0].transcript;

chatInput.value=transcript;

};

recognition.onerror=()=>{

alert("Voice recognition failed.");

};

}

/* ===========================
   LANGUAGE SWITCHER
=========================== */

const languageButtons=document.querySelectorAll(".language-btn");

languageButtons.forEach(button=>{

button.addEventListener("click",()=>{

languageButtons.forEach(item=>item.classList.remove("active"));

button.classList.add("active");

const language=button.dataset.lang;

document.documentElement.setAttribute("lang",language);

});

});

/* ===========================
   WELCOME MESSAGE
=========================== */

window.addEventListener("load",()=>{

setTimeout(()=>{

typeReply("👋 Welcome to SPM AI. How may I help you today?");

},1500);

});
/* ===========================
   VISITOR COUNTER
=========================== */

const visitorElement = document.getElementById("visitorCounter");

if (visitorElement) {

let visitors = Number(localStorage.getItem("spmVisitors")) || 0;

visitors++;

localStorage.setItem("spmVisitors", visitors);

visitorElement.textContent = visitors.toLocaleString();

}

/* ===========================
   LIVE ONLINE USERS
=========================== */

const onlineElement = document.getElementById("onlineUsers");

if (onlineElement) {

let online = 120 + Math.floor(Math.random() * 80);

onlineElement.textContent = online;

setInterval(() => {

online += Math.floor(Math.random() * 7) - 3;

online = Math.max(100, online);

onlineElement.textContent = online;

}, 5000);

}

/* ===========================
   EVENT COUNTDOWN
=========================== */

const countdown = document.getElementById("eventCountdown");

if (countdown) {

const targetDate = new Date("2026-12-31T23:59:59").getTime();

function updateCountdown() {

const now = Date.now();

const distance = targetDate - now;

if (distance <= 0) {

countdown.textContent = "Event Started";

return;

}

const days = Math.floor(distance / 86400000);

const hours = Math.floor((distance % 86400000) / 3600000);

const minutes = Math.floor((distance % 3600000) / 60000);

const seconds = Math.floor((distance % 60000) / 1000);

countdown.textContent =
`${days}d ${hours}h ${minutes}m ${seconds}s`;

}

updateCountdown();

setInterval(updateCountdown, 1000);

}

/* ===========================
   LIVE COIN STATS
=========================== */

const coinLive = document.getElementById("liveCoins");

if (coinLive) {

let coins = 126000;

coinLive.textContent = coins.toLocaleString();

setInterval(() => {

coins += Math.floor(Math.random() * 120);

coinLive.textContent = coins.toLocaleString();

}, 3000);

}

/* ===========================
   TOAST NOTIFICATION
=========================== */

function showToast(message) {

const toast = document.createElement("div");

toast.className = "toast-message";

toast.textContent = message;

document.body.appendChild(toast);

setTimeout(() => {

toast.classList.add("show");

}, 100);

setTimeout(() => {

toast.classList.remove("show");

setTimeout(() => {

toast.remove();

}, 300);

}, 3500);

}

window.addEventListener("load", () => {

setTimeout(() => {

showToast("🚀 Welcome to SPM AI");

}, 3000);

});

/* ===========================
   AUTO NOTIFICATIONS
=========================== */

const notices = [

"💰 Coin Recharge Available 24/7",

"👑 VIP Upgrade Active",

"📲 WhatsApp Support Online",

"🎁 New Recharge Event Started",

"🤖 Welcome to SPM AI"

];

let noticeIndex = 0;

setInterval(() => {

showToast(notices[noticeIndex]);

noticeIndex = (noticeIndex + 1) % notices.length;

}, 20000);
/* ===========================
   PREMIUM PARTICLE ENGINE
=========================== */

const particleContainer = document.getElementById("particles");

if (particleContainer) {

const particleCount = 60;

for (let i = 0; i < particleCount; i++) {

const particle = document.createElement("span");

particle.className = "particle";

particle.style.left = Math.random() * 100 + "%";
particle.style.top = Math.random() * 100 + "%";

particle.style.animationDuration =
6 + Math.random() * 10 + "s";

particle.style.animationDelay =
Math.random() * 5 + "s";

particle.style.opacity =
Math.random();

particleContainer.appendChild(particle);

}

}

/* ===========================
   CURSOR GLOW
=========================== */

const cursorGlow = document.querySelector(".cursor-glow");

if (cursorGlow) {

document.addEventListener("mousemove", (event) => {

requestAnimationFrame(() => {

cursorGlow.style.left = event.clientX + "px";
cursorGlow.style.top = event.clientY + "px";

});

});

}

/* ===========================
   PARALLAX BACKGROUND
=========================== */

const galaxy = document.querySelector(".galaxy-bg");

window.addEventListener("scroll", () => {

if (!galaxy) return;

const offset = window.scrollY * 0.25;

galaxy.style.transform =
`translateY(${offset}px)`;

});

/* ===========================
   LIVE DASHBOARD
=========================== */

const cpuUsage = document.getElementById("cpuUsage");
const ramUsage = document.getElementById("ramUsage");
const networkUsage = document.getElementById("networkUsage");

function random(min, max) {

return Math.floor(Math.random() * (max - min + 1)) + min;

}

function updateDashboard() {

if (cpuUsage) {

cpuUsage.textContent = random(20, 60) + "%";

}

if (ramUsage) {

ramUsage.textContent = random(35, 75) + "%";

}

if (networkUsage) {

networkUsage.textContent = random(90, 250) + " Mbps";

}

}

updateDashboard();

setInterval(updateDashboard, 4000);

/* ===========================
   BUTTON RIPPLE
=========================== */

document.querySelectorAll("button").forEach((button) => {

button.addEventListener("click", function (event) {

const ripple = document.createElement("span");

ripple.className = "ripple";

const rect = this.getBoundingClientRect();

const size = Math.max(rect.width, rect.height);

ripple.style.width = size + "px";
ripple.style.height = size + "px";

ripple.style.left =
event.clientX - rect.left - size / 2 + "px";

ripple.style.top =
event.clientY - rect.top - size / 2 + "px";

this.appendChild(ripple);

setTimeout(() => {

ripple.remove();

}, 700);

});

});

/* ===========================
   PERFORMANCE FPS
=========================== */

let previous = performance.now();

let frame = 0;

const fpsElement = document.getElementById("fpsCounter");

function fpsLoop(now) {

frame++;

if (now - previous >= 1000) {

if (fpsElement) {

fpsElement.textContent = frame + " FPS";

}

frame = 0;

previous = now;

}

requestAnimationFrame(fpsLoop);

}

requestAnimationFrame(fpsLoop);

/* ===========================
   CONNECTION STATUS
=========================== */

const connectionStatus =
document.getElementById("connectionStatus");

function updateConnection() {

if (!connectionStatus) return;

if (navigator.onLine) {

connectionStatus.textContent = "🟢 Online";

} else {

connectionStatus.textContent = "🔴 Offline";

}

}

window.addEventListener("online", updateConnection);

window.addEventListener("offline", updateConnection);

updateConnection();

/* ===========================
   COPYRIGHT YEAR
=========================== */

const year = document.getElementById("currentYear");

if (year) {

year.textContent = new Date().getFullYear();

}
