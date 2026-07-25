/* ===========================
   SPM TOP AGENCY
   Powered By SPM AI
=========================== */

// Loader
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1500);
});

// ===========================
// Recharge Calculator
// ₹100 = 1260 Coins
// ===========================

function calculateCoins() {

    const amount = parseFloat(document.getElementById("rupees").value) || 0;

    const coins = amount * 12.6;

    document.getElementById("coinResult").innerHTML =
        coins.toLocaleString() + " Coins";

}

// ===========================
// Paid Sending Calculator
// 100000 Coins = ₹6000
// ===========================

function calculatePaid() {

    const coins = parseFloat(document.getElementById("paidCoins").value) || 0;

    const price = (coins / 100000) * 6000;

    document.getElementById("paidResult").innerHTML =
        "₹ " + price.toLocaleString();

}

// ===========================
// Animated Counter
// ===========================

function counter(id, target, speed) {

    let count = 0;

    const element = document.getElementById(id);

    const timer = setInterval(() => {

        count += Math.ceil(target / speed);

        if (count >= target) {

            count = target;

            clearInterval(timer);

        }

        element.innerHTML = count.toLocaleString() + "+";

    }, 20);

}

window.addEventListener("load", () => {

    if(document.getElementById("totalUsers"))
        counter("totalUsers",25000,120);

    if(document.getElementById("totalCoins"))
        counter("totalCoins",500,80);

});

// ===========================
// Mobile Menu
// ===========================

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

navbar.classList.toggle("show");

});

}
/* ===========================
   SPM AI CHAT
=========================== */

const replies = {
"hello":"👋 Hello! Welcome to SPM TOP AGENCY.",
"hi":"👋 Hi! How can I help you today?",
"coin":"🪙 Recharge Calculator: ₹100 = 1260 Coins.",
"recharge":"⚡ Instant Coin Recharge Available 24×7.",
"paid":"💸 Paid Sending Rate: 100,000 Coins = ₹6,000.",
"vip":"👑 VIP Upgrade Available.",
"agency":"🏆 Agency Code: 100857.",
"support":"📲 Contact us on WhatsApp for instant support."
};

function sendMessage(){

const input=document.getElementById("userInput");
const chat=document.getElementById("chatMessages");

if(!input||!chat)return;

const text=input.value.trim();

if(text==="")return;

chat.innerHTML+=`
<div class="user-msg">
<b>You:</b> ${text}
</div>
`;

let answer="🤖 Sorry, I didn't understand. Please contact our WhatsApp support.";

const lower=text.toLowerCase();

for(const key in replies){

if(lower.includes(key)){

answer=replies[key];
break;

}

}

setTimeout(()=>{

chat.innerHTML+=`
<div class="bot-msg">
<b>SPM AI:</b> ${answer}
</div>
`;

chat.scrollTop=chat.scrollHeight;

},500);

input.value="";

}

/* Enter Key */

const userInput=document.getElementById("userInput");

if(userInput){

userInput.addEventListener("keypress",function(e){

if(e.key==="Enter"){

sendMessage();

}

});

}

/* ===========================
   SCROLL ANIMATION
=========================== */

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

});

document.querySelectorAll(".service-card,.stat-card,.dealer-card,.faq-item,.contact-card").forEach(el=>{

observer.observe(el);

});

/* ===========================
   PARTICLE BACKGROUND
=========================== */

const canvas=document.getElementById("bgCanvas");

if(canvas){

const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let particles=[];

for(let i=0;i<70;i++){

particles.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*2+1,
dx:(Math.random()-0.5),
dy:(Math.random()-0.5)

});

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{

ctx.beginPath();
ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
ctx.fillStyle="rgba(255,215,0,.7)";
ctx.fill();

p.x+=p.dx;
p.y+=p.dy;

if(p.x<0||p.x>canvas.width)p.dx*=-1;
if(p.y<0||p.y>canvas.height)p.dy*=-1;

});

requestAnimationFrame(animate);

}

animate();

window.addEventListener("resize",()=>{

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

});

}

/* ===========================
   SERVICE WORKER
=========================== */

if("serviceWorker" in navigator){

window.addEventListener("load",()=>{

navigator.serviceWorker.register("service-worker.js")
.then(()=>console.log("Service Worker Registered"))
.catch(err=>console.log(err));

});

}

/* ===========================
   PWA INSTALL
=========================== */

let deferredPrompt;

window.addEventListener("beforeinstallprompt",(e)=>{

e.preventDefault();

deferredPrompt=e;

const installBtn=document.getElementById("installBtn");

if(installBtn){

installBtn.style.display="inline-block";

installBtn.onclick=()=>{

deferredPrompt.prompt();

};

}

});

console.log("🚀 Powered By SPM AI");
