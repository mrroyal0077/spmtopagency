/* ==========================================
SPM AI PRIME 5.0
script.js - Part 1
========================================== */

// Loader
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1200);
});

/* ==========================================
MOUSE GLOW
========================================== */

const glow = document.getElementById("mouse-glow");

document.addEventListener("mousemove", (e) => {

    glow.style.left = (e.clientX - 130) + "px";

    glow.style.top = (e.clientY - 130) + "px";

});

/* ==========================================
MOBILE MENU
========================================== */

const menuBtn = document.querySelector(".menu-toggle");

const nav = document.querySelector(".nav-container");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

nav.classList.toggle("active");

});

}

/* ==========================================
BACK TO TOP
========================================== */

const backTop = document.getElementById("backTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

backTop.style.display="flex";

}else{

backTop.style.display="none";

}

});

backTop.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

/* ==========================================
FADE UP ANIMATION
========================================== */

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach(section=>{

section.classList.add("fade-up");

observer.observe(section);

});
/* ==========================================
AUTO ONLINE / OFFLINE STATUS
08:00 AM → 02:00 AM
========================================== */

function updateStatus() {

const now = new Date();

const hour = now.getHours();

const minute = now.getMinutes();

const current = hour * 60 + minute;

const start = 8 * 60;      // 08:00 AM
const end = 2 * 60;        // 02:00 AM

const online =
(current >= start || current < end);

const whatsapp = document.getElementById("whatsappStatus");
const support = document.getElementById("supportStatus");
const room = document.getElementById("roomStatus");

if(online){

if(whatsapp){
whatsapp.innerHTML="🟢 Online";
whatsapp.className="status online";
}

if(support){
support.innerHTML="🟢 WhatsApp Online";
}

if(room){
room.innerHTML="LIVE NOW";
room.className="status online";
}

}else{

if(whatsapp){
whatsapp.innerHTML="🔴 Offline";
whatsapp.className="status offline";
}

if(support){
support.innerHTML="🔴 WhatsApp Offline";
}

if(room){
room.innerHTML="OFFLINE";
room.className="status offline";
}

}

}

updateStatus();

setInterval(updateStatus,60000);

/* ==========================================
AI COIN CALCULATOR
========================================== */

const amount=document.getElementById("amount");

const result=document.getElementById("coin-result");

const calcBtn=document.querySelector(".calculator .primary-btn");

if(calcBtn){

calcBtn.onclick=()=>{

let value=parseInt(amount.value);

if(isNaN(value)||value<=0){

result.innerHTML="Enter Valid Amount";

return;

}

let coins=value*12.6;

result.innerHTML=

coins.toLocaleString()+" Coins";

};

}

/* ==========================================
COUNTER ANIMATION
========================================== */

function animateCounter(el,target){

let count=0;

const speed=Math.ceil(target/80);

const timer=setInterval(()=>{

count+=speed;

if(count>=target){

count=target;

clearInterval(timer);

}

el.innerHTML=count.toLocaleString();

},20);

}

document.querySelectorAll(".hero-stats h2").forEach(item=>{

const text=item.innerText.replace(/,/g,'');

const number=parseInt(text);

if(!isNaN(number)){

animateCounter(item,number);

}

});

/* ==========================================
LIVE TIME
========================================== */

function updateClock(){

const clock=document.getElementById("liveClock");

if(!clock) return;

clock.innerHTML=

new Date().toLocaleTimeString();

}

updateClock();

setInterval(updateClock,1000);
/* ==========================================
AI CHATBOT
========================================== */

const chatToggle = document.getElementById("chat-toggle");
const chatWindow = document.querySelector(".chat-window");
const chatInput = document.querySelector(".chat-input input");
const sendBtn = document.querySelector(".chat-input button");
const messages = document.getElementById("chat-messages");

if (chatToggle && chatWindow) {

chatToggle.onclick = () => {

chatWindow.style.display =
chatWindow.style.display === "block"
? "none"
: "block";

};

}

function botReply(text){

const msg=document.createElement("div");

msg.className="bot-message";

msg.innerHTML=text;

messages.appendChild(msg);

messages.scrollTop=messages.scrollHeight;

}

function userMessage(text){

const msg=document.createElement("div");

msg.className="user-message";

msg.innerHTML=text;

messages.appendChild(msg);

messages.scrollTop=messages.scrollHeight;

}

function getReply(text){

text=text.toLowerCase();

if(text.includes("coin"))
return "💰 Coin Recharge is available 24/7.";

if(text.includes("vip"))
return "👑 VIP Upgrade service is available.";

if(text.includes("agency"))
return "🤝 Agency Code : 100857";

if(text.includes("room"))
return "🎤 Official Room ID : 4898612";

if(text.includes("event"))
return "🎉 Today's event is currently running.";

if(text.includes("hello") || text.includes("hi"))
return "👋 Welcome to SPM TOP AGENCY.";

return "🤖 Please contact WhatsApp Support for more details.";

}

if(sendBtn){

sendBtn.onclick=()=>{

const text=chatInput.value.trim();

if(text==="") return;

userMessage(text);

chatInput.value="";

setTimeout(()=>{

botReply(getReply(text));

},700);

};

}

/* ==========================================
QUICK BUTTONS
========================================== */

document.querySelectorAll(".quick-buttons button")

.forEach(btn=>{

btn.onclick=()=>{

userMessage(btn.innerText);

setTimeout(()=>{

botReply(getReply(btn.innerText));

},500);

};

});

/* ==========================================
SMOOTH NAVIGATION
========================================== */

document.querySelectorAll('a[href^="#"]')

.forEach(anchor=>{

anchor.onclick=function(e){

e.preventDefault();

const target=document.querySelector(

this.getAttribute("href")

);

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

};

});

/* ==========================================
ANNOUNCEMENT BAR
========================================== */

const announcements=[

"🟢 Official Room LIVE",

"💰 Fast Coin Recharge",

"🤖 AI Assistant Ready",

"🎉 Running Events Available",

"👑 VIP Upgrade Open"

];

const track=document.querySelector(".announcement-track");

if(track){

let index=0;

setInterval(()=>{

track.innerHTML=announcements[index];

index++;

if(index>=announcements.length){

index=0;

}

},4000);

}

/* ==========================================
AI ORB
========================================== */

const aiOrb=document.getElementById("aiOrb");

if(aiOrb){

aiOrb.onclick=()=>{

chatWindow.style.display="block";

};

}

/* ==========================================
WELCOME MESSAGE
========================================== */

setTimeout(()=>{

botReply("👋 Welcome to SPM AI PRIME.");

},1500);
