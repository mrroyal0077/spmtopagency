// ==========================
// SPM AI ASSISTANT
// ==========================

const assistant = document.querySelector(".ai-assistant");
const assistantBtn = document.querySelector(".ai-toggle");

if (assistant && assistantBtn) {

    assistantBtn.addEventListener("click", () => {
        assistant.classList.toggle("open");
    });

}

const messages = [
    "👋 Welcome to SPM TOP AGENCY!",
    "🪙 Recharge Available 24/7",
    "💎 VIP Upgrade Available",
    "📱 Contact MR RISHI for Fast Service"
];

const text = document.getElementById("aiMessage");

if(text){

let index = 0;

setInterval(() => {

    text.textContent = messages[index];

    index++;

    if(index >= messages.length){

        index = 0;

    }

},3000);

}
