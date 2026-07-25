"use strict";

/* ==========================================
   Support Ticket
========================================== */

async function createSupportTicket(name,email,subject,message){

try{

const ticket={

name,

email,

subject,

message,

status:"Open",

createdAt:serverTimestamp()

};

const id=await addDocument("supportTickets",ticket);

alert("Support ticket created successfully.");

console.log("Ticket ID:",id);

return id;

}catch(error){

console.error(error);

alert("Unable to create support ticket.");

return null;

}

}

/* ==========================================
   Support Form
========================================== */

const supportForm=document.getElementById("supportForm");

if(supportForm){

supportForm.addEventListener("submit",async(e)=>{

e.preventDefault();

const name=supportForm.name.value.trim();

const email=supportForm.email.value.trim();

const subject=supportForm.subject.value.trim();

const message=supportForm.message.value.trim();

await createSupportTicket(

name,

email,

subject,

message

);

supportForm.reset();

});

}

/* ==========================================
   Ticket Status
========================================== */

async function getSupportTickets(){

return await getDocuments("supportTickets");

}

/* ==========================================
   Export
========================================== */

window.createSupportTicket=createSupportTicket;

window.getSupportTickets=getSupportTickets;
/* ==========================================
   Live Chat Demo
========================================== */

const chatInput = document.getElementById("chatInput");
const chatSend = document.getElementById("chatSend");
const chatMessages = document.getElementById("chatMessages");

if(chatSend){

chatSend.addEventListener("click",()=>{

const message = chatInput.value.trim();

if(message==="") return;

chatMessages.innerHTML += `
<div class="user-message">
<b>You:</b> ${message}
</div>`;

setTimeout(()=>{

chatMessages.innerHTML += `
<div class="bot-message">
<b>SPM Support:</b> Thanks for contacting us. Our support team will reply as soon as possible.
</div>`;

chatMessages.scrollTop = chatMessages.scrollHeight;

},800);

chatInput.value="";

});

}

/* ==========================================
   FAQ Search
========================================== */

const faqSearch = document.getElementById("faqSearch");

if(faqSearch){

faqSearch.addEventListener("keyup",()=>{

const value = faqSearch.value.toLowerCase();

document.querySelectorAll(".faq-box details").forEach(item=>{

const text = item.innerText.toLowerCase();

item.style.display = text.includes(value) ? "block" : "none";

});

});

}

/* ==========================================
   Quick Contact Buttons
========================================== */

document.querySelectorAll("[data-support]").forEach(button=>{

button.addEventListener("click",()=>{

const type = button.dataset.support;

switch(type){

case "email":

window.location.href = "mailto:support@spmai.com";

break;

case "whatsapp":

window.open("https://wa.me/1234567890","_blank");

break;

case "telegram":

window.open("https://t.me/spmai","_blank");

break;

default:

alert("Support option not available.");

}

});

});

/* ==========================================
   Copy Support ID
========================================== */

document.querySelectorAll("[data-ticket]").forEach(button=>{

button.addEventListener("click",async()=>{

try{

await navigator.clipboard.writeText(button.dataset.ticket);

button.innerHTML="Copied ✓";

setTimeout(()=>{

button.innerHTML="Copy Ticket";

},2000);

}catch(error){

console.error(error);

}

});

});
/* ==========================================
   Feedback System
========================================== */

async function submitFeedback(name, rating, message){

try{

const feedback={

name,

rating,

message,

createdAt:serverTimestamp()

};

await addDocument("feedback",feedback);

alert("Thank you for your feedback!");

}catch(error){

console.error(error);

alert("Unable to submit feedback.");

}

}

const feedbackForm=document.getElementById("feedbackForm");

if(feedbackForm){

feedbackForm.addEventListener("submit",async(e)=>{

e.preventDefault();

const name=feedbackForm.name.value.trim();

const rating=feedbackForm.rating.value;

const message=feedbackForm.message.value.trim();

await submitFeedback(name,rating,message);

feedbackForm.reset();

});

}

/* ==========================================
   Load Ticket History
========================================== */

async function loadTicketHistory(){

const container=document.getElementById("ticketHistory");

if(!container) return;

container.innerHTML="Loading...";

const tickets=await getSupportTickets();

if(tickets.length===0){

container.innerHTML="<p>No support tickets found.</p>";

return;

}

container.innerHTML="";

tickets.forEach(ticket=>{

container.innerHTML+=`

<div class="ticket-card">

<h3>${ticket.subject}</h3>

<p><strong>Status:</strong> ${ticket.status}</p>

<p>${ticket.message}</p>

</div>

`;

});

}

/* ==========================================
   Real-Time Support Tickets
========================================== */

const ticketContainer=document.getElementById("liveTickets");

if(ticketContainer){

listenCollection("supportTickets",(tickets)=>{

ticketContainer.innerHTML="";

tickets.forEach(ticket=>{

ticketContainer.innerHTML+=`

<div class="ticket-card">

<h4>${ticket.subject}</h4>

<p>${ticket.status}</p>

</div>

`;

});

});

}

/* ==========================================
   Star Rating
========================================== */

document.querySelectorAll(".rating-star").forEach((star)=>{

star.addEventListener("click",()=>{

const rating=star.dataset.rating;

const ratingInput=document.getElementById("ratingValue");

if(ratingInput){

ratingInput.value=rating;

}

document.querySelectorAll(".rating-star").forEach((item)=>{

item.classList.remove("active");

});

star.classList.add("active");

});

});

/* ==========================================
   Export
========================================== */

window.submitFeedback=submitFeedback;

window.loadTicketHistory=loadTicketHistory;
/* ==========================================
   Support Status
========================================== */

function updateSupportStatus(){

const status=document.getElementById("supportStatus");

if(!status) return;

const hour=new Date().getHours();

if(hour>=9 && hour<21){

status.textContent="🟢 Support Online";

status.style.color="#00ff99";

}else{

status.textContent="🟡 Offline - We'll reply soon";

status.style.color="#ffcc00";

}

}

updateSupportStatus();

setInterval(updateSupportStatus,60000);

/* ==========================================
   Notification
========================================== */

function showNotification(message,type="success"){

const notice=document.createElement("div");

notice.className="support-notification";

notice.textContent=message;

notice.style.position="fixed";
notice.style.top="20px";
notice.style.right="20px";
notice.style.padding="15px 20px";
notice.style.borderRadius="10px";
notice.style.zIndex="99999";
notice.style.color="#fff";
notice.style.fontWeight="600";

notice.style.background=

type==="error"

? "#ef4444"

: "#10b981";

document.body.appendChild(notice);

setTimeout(()=>{

notice.style.opacity="0";

notice.style.transition=".4s";

setTimeout(()=>{

notice.remove();

},400);

},2500);

}

/* ==========================================
   Auto Reply
========================================== */

function autoReply(message){

const text=message.toLowerCase();

if(text.includes("coin")){

return "Coin recharge support is available 24/7.";

}

if(text.includes("vip")){

return "VIP upgrades are completed after payment verification.";

}

if(text.includes("agency")){

return "Please contact the SPM TOP AGENCY administrator.";

}

if(text.includes("event")){

return "Event rewards are distributed according to official rules.";

}

return "Thanks for contacting SPM Support. We'll reply as soon as possible.";

}

/* ==========================================
   Chat Auto Response
========================================== */

if(chatSend){

chatSend.addEventListener("click",()=>{

const msg=chatInput.value.trim();

if(msg==="") return;

setTimeout(()=>{

if(chatMessages){

chatMessages.innerHTML+=`

<div class="bot-message">

<b>SPM AI:</b> ${autoReply(msg)}

</div>

`;

chatMessages.scrollTop=

chatMessages.scrollHeight;

}

},1000);

});

}

/* ==========================================
   Support Initialization
========================================== */

document.addEventListener("DOMContentLoaded",()=>{

console.log("Support System Ready ✅");

});

/* ==========================================
   Export Helpers
========================================== */

window.showNotification=showNotification;

window.autoReply=autoReply;

/* ==========================================
   End Of File
========================================== */

console.log("support.js loaded successfully ✅");
