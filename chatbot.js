/* ==========================================
SPM AI Chatbot v2.0
Powered by SPM TOP AGENCY
========================================== */

const chatMessages = document.getElementById("chatWindow");
const chatInput = document.getElementById("chatInput");
const sendButton = document.getElementById("sendMessage");

const botName = "SPM AI";

/* ==========================================
WELCOME MESSAGE
========================================== */

window.addEventListener("load", () => {

addBotMessage(
`👋 Welcome to SPM AI!

I'm your AI Assistant.

I can help you with:

💰 Coin Recharge
👑 VIP Upgrade
💸 Paid Sending
🎉 Events
👥 Join Agency
📞 Official Support`
);

});

/* ==========================================
SEND MESSAGE
========================================== */

if(sendButton){

sendButton.addEventListener("click", sendMessage);

}

if(chatInput){

chatInput.addEventListener("keypress", e=>{

if(e.key==="Enter"){

sendMessage();

}

});

}

function sendMessage(){

const text = chatInput.value.trim();

if(text==="") return;

addUserMessage(text);

chatInput.value="";

showTyping();

setTimeout(()=>{

hideTyping();

reply(text);

},1000);

}

/* ==========================================
USER MESSAGE
========================================== */

function addUserMessage(message){

chatMessages.innerHTML += `

<div class="user-message">
${message}
</div>

`;

scrollBottom();

}

/* ==========================================
BOT MESSAGE
========================================== */

function addBotMessage(message){

chatMessages.innerHTML += `

<div class="bot-message">
${message}
</div>

`;

scrollBottom();

}

/* ==========================================
TYPING
========================================== */

function showTyping(){

chatMessages.innerHTML += `

<div class="bot-message" id="typing">

🤖 SPM AI is typing...

</div>

`;

scrollBottom();

}

function hideTyping(){

const typing=document.getElementById("typing");

if(typing){

typing.remove();

}

}

/* ==========================================
AUTO SCROLL
========================================== */

function scrollBottom(){

chatMessages.scrollTop=chatMessages.scrollHeight;

}
/* ==========================================
SMART REPLY ENGINE
========================================== */

function reply(message){

const text = message.toLowerCase().trim();

/* -------- Recharge -------- */

if(
text.includes("recharge") ||
text.includes("coin") ||
text.includes("coins")
){

addBotMessage(`💰 Coin Recharge Service

✅ Instant Recharge
✅ Safe Payment
✅ 24×7 Support

Official YOYO ID:
50873317`);

return;
}

/* -------- VIP -------- */

if(
text.includes("vip") ||
text.includes("upgrade")
){

addBotMessage(`👑 VIP Upgrade

We provide:

⭐ VIP Upgrade
⭐ Royal VIP
⭐ Fast Activation

Contact Official Support for details.`);

return;
}

/* -------- Paid Sending -------- */

if(
text.includes("paid") ||
text.includes("sending") ||
text.includes("gift")
){

addBotMessage(`💸 Paid Sending

✔ Fast Processing
✔ Trusted Service
✔ Secure Delivery

Available Daily.`);

return;
}

/* -------- Agency -------- */

if(
text.includes("agency") ||
text.includes("join")
){

addBotMessage(`👥 Join SPM TOP AGENCY

Agency Code:
100857

Benefits:

✅ Events
✅ VIP Support
✅ Coin Business
✅ Fast Help`);

return;
}

/* -------- Events -------- */

if(
text.includes("event") ||
text.includes("events")
){

addBotMessage(`🎉 Current Events

• Recharge Event
• VIP Event
• Agency Rewards

Visit the Events section for updates.`);

return;
}

/* -------- Contact -------- */

if(
text.includes("contact") ||
text.includes("help") ||
text.includes("support")
){

addBotMessage(`📞 Official Contacts

MR RISHI
+91 93296 87975

MR ABHI
+91 70700 28414

WhatsApp Channel:
https://whatsapp.com/channel/0029VbAyICF0rGiUGHjnkH34`);

return;
}

/* -------- Greeting -------- */

if(
text.includes("hi") ||
text.includes("hello") ||
text.includes("hey")
){

addBotMessage(`👋 Hello!

Welcome to SPM AI.

How can I help you today? 😊`);

return;
}

/* -------- Thanks -------- */

if(
text.includes("thanks") ||
text.includes("thank you")
){

addBotMessage(`❤️ You're welcome!

Have a wonderful day.

Thank you for choosing SPM AI.`);

return;
}

/* -------- Default -------- */

addBotMessage(`🤖 Sorry, I couldn't understand that.

You can ask me about:

💰 Recharge
👑 VIP
💸 Paid Sending
🎉 Events
👥 Agency
📞 Support`);

}
/* ==========================================
CHAT HISTORY
========================================== */

let chatHistory = JSON.parse(
localStorage.getItem("SPM_CHAT_HISTORY")
) || [];

function saveChat(type, message){

chatHistory.push({
type,
message,
time:new Date().toLocaleTimeString()
});

localStorage.setItem(
"SPM_CHAT_HISTORY",
JSON.stringify(chatHistory)
);

}

function loadChat(){

if(chatHistory.length===0) return;

chatMessages.innerHTML="";

chatHistory.forEach(chat=>{

if(chat.type==="user"){

chatMessages.innerHTML+=`
<div class="user-message">
${chat.message}
</div>
`;

}else{

chatMessages.innerHTML+=`
<div class="bot-message">
${chat.message}
</div>
`;

}

});

scrollBottom();

}

window.addEventListener("load",loadChat);

/* ==========================================
UPDATE MESSAGE FUNCTIONS
========================================== */

const oldUserMessage=addUserMessage;

addUserMessage=function(message){

oldUserMessage(message);

saveChat("user",message);

};

const oldBotMessage=addBotMessage;

addBotMessage=function(message){

oldBotMessage(message);

saveChat("bot",message);

};

/* ==========================================
CLEAR CHAT
========================================== */

function clearChat(){

chatHistory=[];

localStorage.removeItem("SPM_CHAT_HISTORY");

chatMessages.innerHTML="";

addBotMessage("👋 Chat cleared successfully.");

}

/* ==========================================
QUICK REPLIES
========================================== */

const quickReplies=[

"Recharge",

"VIP",

"Paid Sending",

"Join Agency",

"Events",

"Support"

];

function createQuickReplies(){

const box=document.getElementById("quickReplies");

if(!box) return;

box.innerHTML="";

quickReplies.forEach(item=>{

const button=document.createElement("button");

button.className="quick-btn";

button.innerText=item;

button.onclick=()=>{

chatInput.value=item;

sendMessage();

};

box.appendChild(button);

});

}

createQuickReplies();

/* ==========================================
COPY CONTACT
========================================== */

function copySupport(){

const text=`MR RISHI
+91 9329687975

MR ABHI
+91 7070028414`;

navigator.clipboard.writeText(text);

addBotMessage("✅ Support contact copied.");

}

/* ==========================================
WHATSAPP SUPPORT
========================================== */

function openWhatsApp(){

window.open(

"https://wa.me/919329687975",

"_blank"

);

}

/* ==========================================
SESSION COUNTER
========================================== */

let totalMessages=0;

function increaseCounter(){

totalMessages++;

const counter=document.getElementById("messageCount");

if(counter){

counter.innerText=totalMessages;

}

}

/* Update Counters */

const previousUser=addUserMessage;

addUserMessage=function(msg){

previousUser(msg);

increaseCounter();

};

const previousBot=addBotMessage;

addBotMessage=function(msg){

previousBot(msg);

increaseCounter();

};
/* ==========================================
TIME BASED GREETING
========================================== */

function getGreeting(){

const hour = new Date().getHours();

if(hour>=5 && hour<12){

return "🌅 Good Morning";

}

if(hour>=12 && hour<17){

return "☀️ Good Afternoon";

}

if(hour>=17 && hour<21){

return "🌇 Good Evening";

}

return "🌙 Good Night";

}

/* ==========================================
SMART FAQ
========================================== */

const faq = {

price:"💰 Please contact our official support for the latest coin prices.",

timing:"🟢 Support Time: 8:00 AM - 2:00 AM",

payment:"💳 UPI, Bank Transfer and other supported payment methods are available.",

seller:"✅ Official YOYO ID: 50873317",

agency:"👥 Agency Code: 100857"

};

function checkFAQ(text){

text=text.toLowerCase();

for(const key in faq){

if(text.includes(key)){

return faq[key];

}

}

return null;

}

/* ==========================================
MULTI LANGUAGE
========================================== */

function translateInput(text){

const lower=text.toLowerCase();

if(lower.includes("namaste")){

return "hello";

}

if(lower.includes("recharj")){

return "recharge";

}

if(lower.includes("vip")){

return "vip";

}

return lower;

}

/* ==========================================
UPDATE REPLY
========================================== */

const oldReply = reply;

reply = function(message){

const input = translateInput(message);

const answer = checkFAQ(input);

if(answer){

addBotMessage(answer);

return;

}

oldReply(input);

};

/* ==========================================
SUGGESTED QUESTIONS
========================================== */

const suggestions=[

"Recharge",

"VIP Upgrade",

"Paid Sending",

"Join Agency",

"Latest Events",

"Support"

];

function loadSuggestions(){

const box=document.getElementById("suggestions");

if(!box) return;

box.innerHTML="";

suggestions.forEach(item=>{

const btn=document.createElement("button");

btn.className="quick-btn";

btn.textContent=item;

btn.onclick=()=>{

chatInput.value=item;

sendMessage();

};

box.appendChild(btn);

});

}

window.addEventListener("load",loadSuggestions);

/* ==========================================
CHAT STATISTICS
========================================== */

function chatStats(){

const total=chatHistory.length;

console.log("Messages :",total);

}

/* ==========================================
ERROR HANDLER
========================================== */

window.addEventListener("error",function(e){

console.error("Chatbot Error:",e.message);

});

/* ==========================================
WELCOME
========================================== */

window.addEventListener("load",()=>{

addBotMessage(

`${getGreeting()} 👋

Welcome to SPM AI.

I'm here to help you with:

💰 Coin Recharge
👑 VIP Upgrade
💸 Paid Sending
🎉 Events
👥 Agency Support`

);

});

/* ==========================================
END
========================================== */

console.log("SPM AI Chatbot Ready");
