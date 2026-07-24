/* ==========================================
SPM AI v2.0
Powered by SPM TOP AGENCY
========================================== */

document.addEventListener("DOMContentLoaded", () => {

initLoader();

initSupportStatus();

initLiveClock();

initBackToTop();

initMouseGlow();

initSmoothScroll();

});

/* ==========================================
LOADER
========================================== */

function initLoader(){

const loader=document.getElementById("loader");

window.addEventListener("load",()=>{

setTimeout(()=>{

loader.classList.add("hide");

setTimeout(()=>{

loader.remove();

},800);

},1200);

});

}

/* ==========================================
LIVE CLOCK
========================================== */

function initLiveClock(){

const clock=document.getElementById("liveClock");

if(!clock) return;

function update(){

const now=new Date();

clock.textContent=now.toLocaleTimeString([],{

hour:"2-digit",

minute:"2-digit",

second:"2-digit"

});

}

update();

setInterval(update,1000);

}

/* ==========================================
SUPPORT STATUS
08:00 AM - 02:00 AM
========================================== */

function initSupportStatus(){

const status=document.getElementById("supportStatus");

const dashboard=document.getElementById("supportLive");

function update(){

const now=new Date();

const hour=now.getHours();

const online=(hour>=8 || hour<2);

const text=online ?

"🟢 ONLINE"

:

"🔴 OFFLINE";

if(status){

status.textContent=text;

}

if(dashboard){

dashboard.textContent=text;

}

}

update();

setInterval(update,60000);

}

/* ==========================================
BACK TO TOP
========================================== */

function initBackToTop(){

const btn=document.getElementById("backTop");

if(!btn) return;

window.addEventListener("scroll",()=>{

btn.style.display=

window.scrollY>500

?

"flex"

:

"none";

});

btn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

/* ==========================================
SMOOTH SCROLL
========================================== */

function initSmoothScroll(){

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener("click",e=>{

e.preventDefault();

const target=document.querySelector(

link.getAttribute("href")

);

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

}

/* ==========================================
MOUSE GLOW
========================================== */

function initMouseGlow(){

const glow=document.getElementById("mouseGlow");

if(!glow) return;

window.addEventListener("mousemove",e=>{

glow.style.left=e.clientX-120+"px";

glow.style.top=e.clientY-120+"px";

});

}
/* ==========================================
YOYO ID LOGIN
========================================== */

function initUserLogin(){

const input=document.getElementById("userID");
const btn=document.getElementById("loginUser");
const output=document.getElementById("showUserID");

if(!input||!btn) return;

const saved=localStorage.getItem("SPM_USER_ID");

if(saved){

output.textContent="YOYO ID : "+saved;
input.value=saved;

}

btn.addEventListener("click",()=>{

const id=input.value.trim();

if(id.length<5){

showToast("Enter Valid YOYO ID","error");

return;

}

localStorage.setItem("SPM_USER_ID",id);

output.textContent="YOYO ID : "+id;

showToast("Welcome Back!","success");

});

}

/* ==========================================
AI COMMAND SEARCH
========================================== */

function initCommandBar(){

const command=document.getElementById("aiCommand");

if(!command) return;

command.addEventListener("keydown",e=>{

if(e.key!=="Enter") return;

const text=command.value.toLowerCase();

if(text.includes("recharge")){

document.querySelector("#recharge").scrollIntoView({
behavior:"smooth"
});

}

else if(text.includes("vip")){

document.querySelector("#vip").scrollIntoView({
behavior:"smooth"
});

}

else if(text.includes("event")){

document.querySelector("#events").scrollIntoView({
behavior:"smooth"
});

}

else if(text.includes("contact")){

document.querySelector("#contact").scrollIntoView({
behavior:"smooth"
});

}

else{

showToast("SPM AI couldn't find that command.","error");

}

command.value="";

});

}

/* ==========================================
ANNOUNCEMENT ROTATOR
========================================== */

function initAnnouncement(){

const box=document.querySelector(".announcement-scroll");

if(!box) return;

const news=[

"🔥 Welcome To SPM AI",

"💰 Official YOYO Coin Seller",

"👑 VIP Upgrade Available",

"💸 Paid Sending Available",

"🎉 Join SPM TOP AGENCY",

"🤖 AI Assistant Online"

];

let i=0;

setInterval(()=>{

box.textContent=news[i];

i++;

if(i>=news.length){

i=0;

}

},4000);

}

/* ==========================================
QUICK ACTIONS
========================================== */

function initQuickActions(){

document.querySelectorAll(".service-card")

.forEach(card=>{

card.addEventListener("click",()=>{

showToast(

card.innerText+" Opened",

"success"

);

});

});

}

/* ==========================================
TOAST MESSAGE
========================================== */

function showToast(message,type){

let toast=document.createElement("div");

toast.className="toast";

toast.innerHTML=message;

if(type==="success"){

toast.classList.add("success");

}

else{

toast.classList.add("error");

}

document.body.appendChild(toast);

setTimeout(()=>{

toast.classList.add("show");

},100);

setTimeout(()=>{

toast.classList.remove("show");

setTimeout(()=>{

toast.remove();

},400);

},3000);

}

/* ==========================================
START MODULES
========================================== */

initUserLogin();

initCommandBar();

initAnnouncement();

initQuickActions();
/* ==========================================
AI CHAT ENGINE
========================================== */

function initAIChat(){

const input=document.querySelector(".chat-input input");
const button=document.querySelector(".chat-input button");
const windowBox=document.getElementById("chatWindow");

if(!input||!button||!windowBox) return;

button.addEventListener("click",sendMessage);

input.addEventListener("keypress",e=>{

if(e.key==="Enter"){

sendMessage();

}

});

function sendMessage(){

const text=input.value.trim();

if(text==="") return;

addUser(text);

input.value="";

setTimeout(()=>{

reply(text);

},800);

}

function addUser(msg){

windowBox.innerHTML+=`

<div class="user-message">

${msg}

</div>

`;

windowBox.scrollTop=windowBox.scrollHeight;

}

function addBot(msg){

windowBox.innerHTML+=`

<div class="bot-message">

${msg}

</div>

`;

windowBox.scrollTop=windowBox.scrollHeight;

}

function reply(message){

const text=message.toLowerCase();

if(text.includes("recharge")){

addBot("Recharge service is available.");

}

else if(text.includes("vip")){

addBot("VIP Upgrade service is available.");

}

else if(text.includes("paid")){

addBot("Paid Sending is available.");

}

else if(text.includes("join")){

addBot("You can join SPM TOP AGENCY.");

}

else if(text.includes("event")){

addBot("Latest events are available in Event Center.");

}

else{

addBot("Please contact Official Support.");

}

}

}

/* ==========================================
COIN CALCULATOR
========================================== */

function initCalculator(){

const amount=document.querySelector(".calculator input");

const button=document.querySelector(".calculator button");

const result=document.getElementById("coinOutput");

if(!amount||!button||!result) return;

button.addEventListener("click",()=>{

let value=parseInt(amount.value);

if(isNaN(value)){

result.innerHTML="0";

return;

}

result.innerHTML=value*12.6;

});

}

/* ==========================================
COUNTER
========================================== */

function counter(id,end){

const item=document.getElementById(id);

if(!item) return;

let start=0;

const timer=setInterval(()=>{

start++;

item.innerHTML=start;

if(start>=end){

clearInterval(timer);

}

},15);

}

/* ==========================================
COUNTDOWN
========================================== */

function initCountdown(){

const target=new Date("2026-12-31");

setInterval(()=>{

const now=new Date();

const diff=target-now;

if(diff<=0) return;

const days=Math.floor(diff/86400000);

const hours=Math.floor(diff%86400000/3600000);

const minutes=Math.floor(diff%3600000/60000);

const seconds=Math.floor(diff%60000/1000);

document.getElementById("days").innerHTML=days;

document.getElementById("hours").innerHTML=hours;

document.getElementById("minutes").innerHTML=minutes;

document.getElementById("seconds").innerHTML=seconds;

},1000);

}

/* ==========================================
SCROLL REVEAL
========================================== */

function initReveal(){

const cards=document.querySelectorAll(

".glass,.coin-card,.vip-card,.event-card,.contact-card"

);

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

cards.forEach(card=>{

observer.observe(card);

});

}

/* ==========================================
START
========================================== */

initAIChat();

initCalculator();

initCountdown();

initReveal();
/* ==========================================
AUTO ONLINE / OFFLINE STATUS
Official Time:
08:00 AM → 02:00 AM
========================================== */

function updateSupportStatus(){

const status=document.getElementById("supportStatus");
const live=document.getElementById("supportLive");

const now=new Date();

const hour=now.getHours();

const online=(hour>=8||hour<2);

if(online){

status.innerHTML="🟢 ONLINE";
live.innerHTML="🟢 ONLINE";

status.style.color="#10b981";
live.style.color="#10b981";

}else{

status.innerHTML="🔴 OFFLINE";
live.innerHTML="🔴 OFFLINE";

status.style.color="#ef4444";
live.style.color="#ef4444";

}

}

updateSupportStatus();

setInterval(updateSupportStatus,60000);

/* ==========================================
THEME SWITCH
========================================== */

const theme=document.getElementById("themeToggle");

if(theme){

theme.onclick=()=>{

document.body.classList.toggle("light-theme");

localStorage.setItem(

"theme",

document.body.classList.contains("light-theme")

?

"light"

:

"dark"

);

};

}

const savedTheme=localStorage.getItem("theme");

if(savedTheme==="light"){

document.body.classList.add("light-theme");

}

/* ==========================================
WELCOME USER
========================================== */

const savedID=localStorage.getItem("SPM_USER_ID");

if(savedID){

showToast(

"Welcome Back "+savedID,

"success"

);

}

/* ==========================================
NOTIFICATION
========================================== */

function notify(text){

if(!("Notification" in window)) return;

Notification.requestPermission().then(permission=>{

if(permission==="granted"){

new Notification("SPM AI",{

body:text,

icon:"assets/logo/logo.png"

});

}

});

}

/* ==========================================
COPY TO CLIPBOARD
========================================== */

function copyText(text){

navigator.clipboard.writeText(text);

showToast("Copied","success");

}

/* ==========================================
BUTTON RIPPLE
========================================== */

document.querySelectorAll("button")

.forEach(btn=>{

btn.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

ripple.className="ripple";

ripple.style.left=e.clientX-rect.left+"px";

ripple.style.top=e.clientY-rect.top+"px";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

/* ==========================================
PAGE LOADER
========================================== */

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});

/* ==========================================
NETWORK STATUS
========================================== */

window.addEventListener("online",()=>{

showToast(

"Internet Connected",

"success"

);

});

window.addEventListener("offline",()=>{

showToast(

"No Internet",

"error"

);

});

/* ==========================================
CONSOLE MESSAGE
========================================== */

console.log(

"%cSPM AI v2.0",

"color:#3b82f6;font-size:24px;font-weight:bold;"

);

console.log(

"Powered by SPM TOP AGENCY"

);

/* ==========================================
END
========================================== */

console.log(

"Website Loaded Successfully"

);
