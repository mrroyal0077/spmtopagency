/* =====================================
   SPM TOP AGENCY
   AI CONTROL SYSTEM
   app.js - Part 1
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ===========================
       LOADER
    =========================== */

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 2500);

    /* ===========================
       LIVE INDIA CLOCK
    =========================== */

    function updateClock() {

        const clock = document.getElementById("liveClock");

        if (!clock) return;

        const now = new Date();

        const indiaTime = now.toLocaleTimeString("en-IN", {

            timeZone: "Asia/Kolkata",
            hour12: true

        });

        clock.innerHTML = indiaTime;

    }

    updateClock();

    setInterval(updateClock, 1000);

    /* ===========================
       RECHARGE CALCULATOR
    =========================== */

    const rechargeBtn = document.getElementById("calculateRecharge");

    if (rechargeBtn) {

        rechargeBtn.addEventListener("click", () => {

            const amount = Number(document.getElementById("rechargeAmount").value);

            if (amount <= 0 || isNaN(amount)) {

                alert("Please enter a valid recharge amount.");

                return;

            }

            const coins = Math.round(amount * 12.6);

            document.getElementById("coinResult").innerHTML =

                coins.toLocaleString() + " Coins";

            document.getElementById("rechargeMessage").value =

`Hello SPM TOP AGENCY,

Recharge Request

Agency Code : 100857

Recharge Amount : ₹${amount}

Coins : ${coins}

Name :

UID :

Thank You.`;

        });

    }

    /* ===========================
       QUICK RECHARGE BUTTONS
    =========================== */

    document.querySelectorAll(".quick-btn").forEach(button => {

        button.addEventListener("click", () => {

            const amount = parseInt(button.innerText.replace("₹",""));

            document.getElementById("rechargeAmount").value = amount;

            rechargeBtn.click();

        });

    });

    /* ===========================
       COPY RECHARGE MESSAGE
    =========================== */

    const copyRecharge = document.getElementById("copyRechargeMessage");

    if(copyRecharge){

        copyRecharge.addEventListener("click", () => {

            const text = document.getElementById("rechargeMessage");

            navigator.clipboard.writeText(text.value);

            alert("Recharge message copied.");

        });

    }

    /* ===========================
       PAID SENDING CALCULATOR
    =========================== */

    const paidBtn = document.getElementById("calculatePaid");

    if (paidBtn) {

        paidBtn.addEventListener("click", () => {

            const coins = Number(document.getElementById("paidCoins").value);

            if (coins <= 0 || isNaN(coins)) {

                alert("Please enter coin amount.");

                return;

            }

            const amount = (coins / 10000) * 600;

            document.getElementById("paidResult").innerHTML =

                "₹" + amount.toLocaleString();

            document.getElementById("paidMessage").value =

`Hello SPM TOP AGENCY,

Paid Sending Request

Agency Code : 100857

Coins : ${coins}

Amount : ₹${amount}

UID :

Name :

Thank You.`;

        });

    }

    /* ===========================
       QUICK PAID BUTTONS
    =========================== */

    document.querySelectorAll(".quick-paid-btn").forEach(button => {

        button.addEventListener("click", () => {

            const txt = button.innerText.replace("K","000");

            document.getElementById("paidCoins").value = txt;

            paidBtn.click();

        });

    });

    /* ===========================
       COPY PAID MESSAGE
    =========================== */

    const copyPaid = document.getElementById("copyPaidMessage");

    if(copyPaid){

        copyPaid.addEventListener("click", () => {

            const text = document.getElementById("paidMessage");

            navigator.clipboard.writeText(text.value);

            alert("Paid Sending message copied.");

        });

    }

});
/* =====================================
   SPM TOP AGENCY
   AI CONTROL SYSTEM
   app.js - Part 2
===================================== */

/* ===========================
   AI CHAT
=========================== */

const chatInput = document.getElementById("chatInput");
const sendMessage = document.getElementById("sendMessage");
const chatBox = document.querySelector(".chat-box");

if (sendMessage && chatInput && chatBox) {

    sendMessage.addEventListener("click", sendAIMessage);
    chatInput.addEventListener("keypress", function(e){

        if(e.key==="Enter"){

            e.preventDefault();
            sendAIMessage();

        }

    });

}

function sendAIMessage(){

    const text = chatInput.value.trim();

    if(text==="") return;

    const user = document.createElement("div");

    user.className="chat-message";

    user.innerHTML="<strong>You :</strong><br>"+text;

    chatBox.appendChild(user);

    const ai=document.createElement("div");

    ai.className="chat-message ai";

    let reply="Welcome to SPM TOP AGENCY.";

    const msg=text.toLowerCase();

    if(msg.includes("hello")||msg.includes("hi"))
        reply="Hello 👋 Welcome to SPM TOP AGENCY.";

    else if(msg.includes("coin"))
        reply="Use the Recharge Calculator to calculate coins instantly.";

    else if(msg.includes("paid"))
        reply="Open the Paid Sending Calculator and enter your coin amount.";

    else if(msg.includes("timing"))
        reply="Recharge Timing : 08:00 AM to 01:59 AM (India Time).";

    else if(msg.includes("agency"))
        reply="Agency Code : 100857";

    else if(msg.includes("whatsapp"))
        reply="Join our official WhatsApp Channel from the website.";

    ai.innerHTML="<strong>SPM AI :</strong><br>"+reply;

    chatBox.appendChild(ai);

    chatInput.value="";

    chatBox.scrollTop=chatBox.scrollHeight;

}

/* ===========================
   COUNTER ANIMATION
=========================== */

function animateCounter(id,target){

    const el=document.getElementById(id);

    if(!el) return;

    let count=0;

    const speed=Math.max(10,Math.floor(target/150));

    const timer=setInterval(()=>{

        count+=speed;

        if(count>=target){

            count=target;

            clearInterval(timer);

        }

        el.innerHTML=count.toLocaleString();

    },20);

}

animateCounter("counter1",25000);
animateCounter("counter2",180000);
animateCounter("counter3",65000);
animateCounter("counter4",24);

/* ===========================
   SCROLL TOP
=========================== */

const scrollBtn=document.getElementById("scrollTop");

window.addEventListener("scroll",()=>{

    if(!scrollBtn) return;

    if(window.scrollY>400){

        scrollBtn.style.display="block";

    }else{

        scrollBtn.style.display="none";

    }

});

if(scrollBtn){

scrollBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

/* ===========================
   MOBILE MENU
=========================== */

const menu=document.querySelector(".menu-btn");

const nav=document.querySelector("nav");

if(menu && nav){

menu.addEventListener("click",()=>{

nav.classList.toggle("active");

});

}

/* ===========================
   CUSTOM CURSOR
=========================== */

const cursor=document.querySelector(".cursor");

if(cursor){

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

});

}

/* ===========================
   NEWS ROTATION
=========================== */

const news=document.getElementById("newsText");

const newsList=[

"Welcome to SPM TOP AGENCY.",

"Recharge Calculator Ready.",

"Paid Sending System Online.",

"AI Control Activated.",

"Thank you for choosing SPM TOP AGENCY."

];

let newsIndex=0;

if(news){

setInterval(()=>{

newsIndex++;

if(newsIndex>=newsList.length){

newsIndex=0;

}

news.innerHTML=newsList[newsIndex];

},5000);

}

/* ===========================
   WELCOME POPUP
=========================== */

setTimeout(()=>{

alert("👋 Welcome to SPM TOP AGENCY");

},3000);
/* =====================================
   SPM TOP AGENCY
   AI CONTROL SYSTEM
   app.js - Part 3 (Final)
===================================== */

/* ===========================
   TYPEWRITER EFFECT
=========================== */

const typingTitle = document.querySelector(".hero-content h2");

if (typingTitle) {

    const originalText = typingTitle.textContent;
    typingTitle.textContent = "";

    let i = 0;

    function typeEffect() {

        if (i < originalText.length) {

            typingTitle.textContent += originalText.charAt(i);
            i++;

            setTimeout(typeEffect, 80);

        }

    }

    setTimeout(typeEffect, 1000);

}

/* ===========================
   CARD ANIMATION
=========================== */

const revealItems = document.querySelectorAll(
".card,.panel,.feature-card,.feature-box,.chart-card,.contact-card,.glass-card,.status-box,.counter-card,.faq-item"
);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:0.15
});

revealItems.forEach(item=>{

    item.style.opacity="0";
    item.style.transform="translateY(40px)";
    item.style.transition="all .8s ease";

    observer.observe(item);

});

/* ===========================
   RGB BUTTON EFFECT
=========================== */

setInterval(()=>{

document.querySelectorAll(".primary-btn,.btn").forEach(btn=>{

const hue=Math.floor(Math.random()*360);

btn.style.filter=`hue-rotate(${hue}deg)`;

});

},3000);

/* ===========================
   PARALLAX EFFECT
=========================== */

window.addEventListener("scroll",()=>{

const bg=document.querySelector(".background");

if(bg){

bg.style.transform=
`translateY(${window.scrollY*0.15}px)`;

}

});

/* ===========================
   AI STATUS
=========================== */

const statusText=[
"AI READY",
"SYSTEM ONLINE",
"SECURE CONNECTION",
"SERVER ACTIVE",
"SMART CONTROL"
];

const statusBox=document.querySelector(".status-box p");

if(statusBox){

let index=0;

setInterval(()=>{

statusBox.textContent=statusText[index];

index++;

if(index>=statusText.length){

index=0;

}

},4000);

}

/* ===========================
   LIVE DATE
=========================== */

console.log(
"SPM TOP AGENCY AI CONTROL STARTED"
);

console.log(
new Date().toLocaleDateString()
);

/* ===========================
   BUTTON RIPPLE
=========================== */

document.querySelectorAll(".primary-btn,.btn").forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

const x=e.offsetX;

const y=e.offsetY;

circle.style.left=x+"px";
circle.style.top=y+"px";

circle.classList.add("ripple");

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});

/* ===========================
   CONSOLE MESSAGE
=========================== */

console.log("%cSPM TOP AGENCY",
"font-size:30px;color:#00ffff;font-weight:bold;");

console.log("%cPowered By SPM AI",
"font-size:18px;color:#8b5cf6;");

/* ===========================
   END
=========================== */

console.log("Website Loaded Successfully");
