/* ===========================
   SPM AI Assistant
=========================== */

const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const chatBox = document.getElementById("chatMessages");

async function askAI(message) {

const response = await fetch("/api/chat", {

method: "POST",

headers: {

"Content-Type": "application/json"

},

body: JSON.stringify({

message

})

});

if (!response.ok) {

throw new Error("Unable to contact AI service");

}

return await response.json();

}

function addBubble(text, type) {

const bubble = document.createElement("div");

bubble.className = `chat-bubble ${type}`;

bubble.textContent = text;

chatBox.appendChild(bubble);

chatBox.scrollTop = chatBox.scrollHeight;

}

if (chatForm) {

chatForm.addEventListener("submit", async (event) => {

event.preventDefault();

const message = chatInput.value.trim();

if (!message) return;

addBubble(message, "user");

chatInput.value = "";

addBubble("Thinking...", "ai");

try {

const result = await askAI(message);

chatBox.lastChild.textContent = result.reply;

} catch {

chatBox.lastChild.textContent =
"Sorry, I'm unable to respond right now.";

}

});

}
