"use strict";

/* ==========================================
   Loader
========================================== */

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

if(loader){

loader.style.opacity = "0";

setTimeout(()=>{

loader.style.display = "none";

},500);

}

});

/* ==========================================
   Mobile Menu
========================================== */

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

if(menuToggle && navbar){

menuToggle.addEventListener("click",()=>{

navbar.classList.toggle("active");

});

}

/* ==========================================
   Smooth Scroll
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener("click",(e)=>{

const target = document.querySelector(link.getAttribute("href"));

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

if(navbar){

navbar.classList.remove("active");

}

}

});

});

/* ==========================================
   Sticky Header
========================================== */

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY > 80){

header.classList.add("sticky");

}else{

header.classList.remove("sticky");

}

});

/* ==========================================
   Counter Animation
========================================== */

const counters = document.querySelectorAll(".counter");

function runCounters(){

counters.forEach(counter=>{

const target = Number(counter.dataset.target);

let value = 0;

const speed = Math.max(10, Math.floor(target / 100));

const update = ()=>{

value += speed;

if(value >= target){

counter.innerText = target.toLocaleString();

}else{

counter.innerText = value.toLocaleString();

requestAnimationFrame(update);

}

};

update();

});

}

let counterStarted = false;

window.addEventListener("scroll",()=>{

const stats = document.querySelector(".statistics");

if(stats && !counterStarted){

const top = stats.getBoundingClientRect().top;

if(top < window.innerHeight - 100){

counterStarted = true;

runCounters();

}

}

});
/* ==========================================
   Coin Calculator
========================================== */

const calcBtn = document.getElementById("calculateBtn");
const coinInput = document.getElementById("coinInput");
const result = document.getElementById("calcResult");

if(calcBtn){

calcBtn.addEventListener("click",()=>{

const amount = Number(coinInput.value);

if(!amount || amount <= 0){

result.innerHTML = "Please enter a valid amount.";

return;

}

const coins = amount * 12.6;

result.innerHTML =
`${amount.toLocaleString()} = <strong>${coins.toLocaleString()} Coins</strong>`;

});

}

/* ==========================================
   AI Assistant Demo
========================================== */

const aiBtn = document.getElementById("askAI");
const aiInput = document.getElementById("aiInput");
const aiChat = document.getElementById("aiChat");

if(aiBtn){

aiBtn.addEventListener("click",()=>{

const question = aiInput.value.trim();

if(question===""){

aiChat.innerHTML="Please enter your question.";

return;

}

aiChat.innerHTML=
`<b>You:</b> ${question}<br><br>
<b>SPM AI:</b> Thanks for your question. Live AI integration will be connected soon.`;

aiInput.value="";

});

}

/* ==========================================
   Contact Form
========================================== */

const contactForm = document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you! Your message has been submitted.");

contactForm.reset();

});

}

/* ==========================================
   Scroll To Top
========================================== */

const topBtn = document.createElement("button");

topBtn.id="topBtn";

topBtn.innerHTML="↑";

document.body.appendChild(topBtn);

Object.assign(topBtn.style,{

position:"fixed",

right:"20px",

bottom:"20px",

width:"50px",

height:"50px",

border:"none",

borderRadius:"50%",

fontSize:"20px",

cursor:"pointer",

background:"#00e5ff",

color:"#000",

display:"none",

zIndex:"9999",

boxShadow:"0 10px 25px rgba(0,229,255,.3)"

});

window.addEventListener("scroll",()=>{

topBtn.style.display=window.scrollY>300?"block":"none";

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});
/* ==========================================
   Active Navigation
========================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("#navbar a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach((section) => {

const sectionTop = section.offsetTop - 120;
const sectionHeight = section.offsetHeight;

if (window.scrollY >= sectionTop) {

current = section.getAttribute("id");

}

});

navLinks.forEach((link) => {

link.classList.remove("active");

const href = link.getAttribute("href");

if (href === "#" + current) {

link.classList.add("active");

}

});

});

/* ==========================================
   Fade Up Animation
========================================== */

const fadeElements = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver((entries) => {

entries.forEach((entry) => {

if (entry.isIntersecting) {

entry.target.classList.add("show");

}

});

}, {

threshold: 0.2

});

fadeElements.forEach((item) => {

observer.observe(item);

});

/* ==========================================
   Live Date & Time
========================================== */

const liveClock = document.getElementById("liveClock");

function updateClock() {

if (!liveClock) return;

const now = new Date();

liveClock.innerHTML = now.toLocaleString();

}

setInterval(updateClock, 1000);

updateClock();

/* ==========================================
   Current Year
========================================== */

const currentYear = document.getElementById("currentYear");

if (currentYear) {

currentYear.textContent = new Date().getFullYear();

}

/* ==========================================
   Console Welcome
========================================== */

console.log("%cSPM AI Website Loaded Successfully 🚀",
"color:#00e5ff;font-size:16px;font-weight:bold;");
/* ==========================================
   Copy To Clipboard
========================================== */

document.querySelectorAll("[data-copy]").forEach((button)=>{

button.addEventListener("click",async()=>{

const text = button.dataset.copy;

try{

await navigator.clipboard.writeText(text);

const oldText = button.innerHTML;

button.innerHTML = "✓ Copied";

setTimeout(()=>{

button.innerHTML = oldText;

},2000);

}catch(error){

console.error("Copy failed:",error);

}

});

});

/* ==========================================
   Button Loading Effect
========================================== */

document.querySelectorAll(".loading-btn").forEach((button)=>{

button.addEventListener("click",()=>{

const originalText = button.innerHTML;

button.disabled = true;

button.innerHTML = "Please Wait...";

setTimeout(()=>{

button.disabled = false;

button.innerHTML = originalText;

},2000);

});

});

/* ==========================================
   Image Lazy Loading
========================================== */

document.querySelectorAll("img").forEach((img)=>{

if(!img.hasAttribute("loading")){

img.setAttribute("loading","lazy");

}

});

/* ==========================================
   Disable Right Click (Optional)
========================================== */

// document.addEventListener("contextmenu",(e)=>{

// e.preventDefault();

// });

/* ==========================================
   Disable Drag Images
========================================== */

document.querySelectorAll("img").forEach((img)=>{

img.addEventListener("dragstart",(e)=>{

e.preventDefault();

});

});

/* ==========================================
   App Initialization
========================================== */

document.addEventListener("DOMContentLoaded",()=>{

console.log("SPM AI initialized successfully.");

});

/* ==========================================
   Global Error Handler
========================================== */

window.addEventListener("error",(event)=>{

console.error("JavaScript Error:",event.message);

});

/* ==========================================
   Unhandled Promise Rejection
========================================== */

window.addEventListener("unhandledrejection",(event)=>{

console.error("Unhandled Promise:",event.reason);

});

/* ==========================================
   End Of File
========================================== */

console.log("app.js loaded successfully ✅");
