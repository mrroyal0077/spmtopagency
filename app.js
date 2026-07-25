/*==========================================================
  SPM AI 2050
  Powered by SPM TOP AGENCY
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

initializeApp();

});

/*==========================================================
  APP START
==========================================================*/

function initializeApp(){

loaderSystem();

welcomeNotification();

backToTopButton();

smoothScrolling();

animatedCounters();

}

/*==========================================================
  LOADER
==========================================================*/

function loaderSystem(){

const loader=document.getElementById("loader");

const progress=document.getElementById("progressFill");

const status=document.querySelector(".loader-status");

let percent=0;

const timer=setInterval(()=>{

percent++;

if(progress){

progress.style.width=percent+"%";

}

if(status){

status.innerText="Loading "+percent+"%";

}

if(percent>=100){

clearInterval(timer);

setTimeout(()=>{

if(loader){

loader.style.display="none";

document.body.classList.add("loaded");

}

},500);

}

},25);

}

/*==========================================================
  WELCOME NOTIFICATION
==========================================================*/

function welcomeNotification(){

const box=document.getElementById("notificationBox");

if(!box) return;

setTimeout(()=>{

box.classList.add("show");

},1200);

setTimeout(()=>{

box.classList.remove("show");

},5500);

}

/*==========================================================
  BACK TO TOP
==========================================================*/

function backToTopButton(){

const button=document.getElementById("backToTop");

if(!button) return;

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

button.style.display="flex";

}else{

button.style.display="none";

}

});

button.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

/*==========================================================
  SMOOTH NAVIGATION
==========================================================*/

function smoothScrolling(){

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener("click",function(e){

const target=document.querySelector(this.getAttribute("href"));

if(!target) return;

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

});

});

}

/*==========================================================
  DASHBOARD COUNTERS
==========================================================*/

function animatedCounters(){

const counters=document.querySelectorAll("[data-counter]");

counters.forEach(counter=>{

const target=parseInt(counter.dataset.counter);

let value=0;

const speed=Math.max(10,Math.floor(target/120));

const update=()=>{

value+=speed;

if(value>=target){

counter.innerText=target.toLocaleString();

return;

}

counter.innerText=value.toLocaleString();

requestAnimationFrame(update);

};

update();

});

}

/*==========================================================
  HELPER
==========================================================*/

function $(selector){

return document.querySelector(selector);

}

function $$(selector){

return document.querySelectorAll(selector);

  }
/*==========================================================
AUTO RGB THEME
==========================================================*/

const themeColors=[

"#00c6ff",

"#00ffe5",

"#8a2be2",

"#ff3cac",

"#00ff9d",

"#ff9f1c"

];

let colorIndex=0;

setInterval(()=>{

document.documentElement.style.setProperty(

"--blue",

themeColors[colorIndex]

);

colorIndex++;

if(colorIndex>=themeColors.length){

colorIndex=0;

}

},3000);

/*==========================================================
COIN CALCULATOR
==========================================================*/

const coinRates={

100:1260,

200:2520,

300:3780,

500:6300,

1000:12600,

3000:37800,

5000:63000,

10000:126000,

20000:252000

};

window.calculateCoins=function(){

const input=$("#coinAmount");

const output=$("#coinResult");

if(!input||!output)return;

const amount=parseInt(input.value);

if(isNaN(amount)||amount<=0){

output.innerHTML="Enter a valid amount";

return;

}

if(coinRates[amount]){

output.innerHTML=

coinRates[amount].toLocaleString()+" Coins";

return;

}

const coins=Math.floor(amount*12.6);

output.innerHTML=

coins.toLocaleString()+" Coins (Estimated)";

};

/*==========================================================
AI CHAT
==========================================================*/

const aiReplies={

hello:"Hello 👋 Welcome to SPM AI.",

hi:"Hi 👋 How can I help you today?",

coins:"Recharge services are available 24/7.",

vip:"VIP Upgrade is available instantly.",

agency:"Join SPM TOP AGENCY anytime.",

event:"Latest events are shown in the Events section.",

contact:"Contact Mr. Rishi or ABHI from the Contact section."

};

window.sendMessage=function(){

const input=$("#chatInput");

const messages=$("#chatMessages");

if(!input||!messages)return;

const text=input.value.trim();

if(text==="")return;

messages.innerHTML+=`

<div class="user-message">

${text}

</div>

`;

let reply=

"Sorry, I don't understand. Please contact support.";

const lower=text.toLowerCase();

Object.keys(aiReplies).forEach(key=>{

if(lower.includes(key)){

reply=aiReplies[key];

}

});

setTimeout(()=>{

messages.innerHTML+=`

<div class="bot-message">

${reply}

</div>

`;

messages.scrollTop=messages.scrollHeight;

},500);

input.value="";

messages.scrollTop=messages.scrollHeight;

};

/*==========================================================
ENTER KEY
==========================================================*/

const chatInput=$("#chatInput");

if(chatInput){

chatInput.addEventListener("keypress",e=>{

if(e.key==="Enter"){

sendMessage();

}

});

}

/*==========================================================
SCROLL ANIMATION
==========================================================*/

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{

threshold:.15

});

document.querySelectorAll(

".service-card,.dashboard-card,.testimonial-card,.contact-card,.announcement-card"

).forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(40px)";

card.style.transition=".8s";

observer.observe(card);

});
/*==========================================================
MULTI LANGUAGE
==========================================================*/

const translations={

en:{
welcome:"Welcome To SPM AI",
support:"24/7 Support Available"
},

hi:{
welcome:"SPM AI में आपका स्वागत है",
support:"24/7 सहायता उपलब्ध है"
},

pa:{
welcome:"SPM AI ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ",
support:"24/7 ਸਹਾਇਤਾ ਉਪਲਬਧ ਹੈ"
}

};

const languageSelect=$("#languageSelect");

if(languageSelect){

languageSelect.addEventListener("change",function(){

const lang=this.value;

const data=translations[lang];

if(!data)return;

const notification=$(".notification-text");

if(notification){

notification.innerText=data.welcome;

}

});

}

/*==========================================================
LIVE NOTIFICATIONS
==========================================================*/

const liveMessages=[

"🔥 Welcome to SPM AI",

"🪙 Coin Recharge Available 24/7",

"💎 VIP Upgrade Active",

"🚀 Join SPM TOP AGENCY",

"🎉 New Events Available",

"🤖 AI Assistant Online"

];

let liveIndex=0;

setInterval(()=>{

const notification=$(".notification-text");

if(notification){

notification.innerText=liveMessages[liveIndex];

}

liveIndex++;

if(liveIndex>=liveMessages.length){

liveIndex=0;

}

},8000);

/*==========================================================
LIVE DASHBOARD
==========================================================*/

setInterval(()=>{

$$("[data-live]").forEach(item=>{

let value=parseInt(item.innerText.replace(/,/g,""));

if(isNaN(value)) value=0;

value+=Math.floor(Math.random()*5);

item.innerText=value.toLocaleString();

});

},4000);

/*==========================================================
SMART AI CHAT
==========================================================*/

const smartReplies=[

{

keywords:["price","coin","coins","recharge"],

reply:"🪙 Coin recharge service is available 24/7."

},

{

keywords:["vip"],

reply:"💎 VIP Upgrade is completed instantly."

},

{

keywords:["agency","join"],

reply:"🚀 You can join SPM TOP AGENCY anytime."

},

{

keywords:["hello","hi","hey"],

reply:"👋 Hello! Welcome to SPM AI."

},

{

keywords:["support","help"],

reply:"📞 Our support team is available 24/7."

},

{

keywords:["event"],

reply:"🎉 Visit the Events section to see the latest activities."

}

];

window.sendMessage=function(){

const input=$("#chatInput");

const messages=$("#chatMessages");

if(!input||!messages)return;

const text=input.value.trim();

if(text==="") return;

messages.innerHTML+=`

<div class="user-message">

${text}

</div>

`;

let response="🤖 Sorry, I couldn't understand your question.";

const message=text.toLowerCase();

smartReplies.forEach(item=>{

item.keywords.forEach(word=>{

if(message.includes(word)){

response=item.reply;

}

});

});

setTimeout(()=>{

messages.innerHTML+=`

<div class="bot-message">

${response}

</div>

`;

messages.scrollTop=messages.scrollHeight;

},500);

input.value="";

};

/*==========================================================
AI FLOATING BUTTON
==========================================================*/

const aiButton=$("#aiFloatingButton");

if(aiButton){

aiButton.addEventListener("click",()=>{

const chat=document.querySelector("#chatbot");

if(chat){

chat.scrollIntoView({

behavior:"smooth"

});

}

});

}
/*==========================================================
AI PARTICLE BACKGROUND
==========================================================*/

const canvas=document.getElementById("particles");

if(canvas){

const ctx=canvas.getContext("2d");

let particles=[];

function resizeCanvas(){

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize",resizeCanvas);

for(let i=0;i<80;i++){

particles.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

r:Math.random()*3+1,

dx:(Math.random()-.5)*0.8,

dy:(Math.random()-.5)*0.8

});

}

function animateParticles(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{

p.x+=p.dx;

p.y+=p.dy;

if(p.x<0||p.x>canvas.width)p.dx*=-1;

if(p.y<0||p.y>canvas.height)p.dy*=-1;

ctx.beginPath();

ctx.arc(p.x,p.y,p.r,0,Math.PI*2);

ctx.fillStyle="#00ffe5";

ctx.fill();

});

requestAnimationFrame(animateParticles);

}

animateParticles();

}

/*==========================================================
LOCAL STORAGE
==========================================================*/

if(languageSelect){

const savedLanguage=localStorage.getItem("spm-language");

if(savedLanguage){

languageSelect.value=savedLanguage;

languageSelect.dispatchEvent(new Event("change"));

}

languageSelect.addEventListener("change",()=>{

localStorage.setItem(

"spm-language",

languageSelect.value

);

});

}

/*==========================================================
BACK TO TOP ENHANCED
==========================================================*/

window.addEventListener("scroll",()=>{

const button=$("#backToTop");

if(!button)return;

button.style.opacity=

window.scrollY>500?"1":"0";

});

/*==========================================================
PERFORMANCE
==========================================================*/

document.querySelectorAll("img").forEach(img=>{

img.loading="lazy";

});

/*==========================================================
GLOBAL ERROR HANDLER
==========================================================*/

window.addEventListener("error",event=>{

console.error(

"SPM AI Error:",

event.message

);

});

/*==========================================================
FINAL STARTUP
==========================================================*/

window.addEventListener("load",()=>{

console.log(

"🚀 SPM AI 2050 Loaded Successfully"

);

const notification=$("#notificationBox");

if(notification){

notification.classList.add("show");

setTimeout(()=>{

notification.classList.remove("show");

},4000);

}

});
