import { auth, db } from "./firebase.js";

import {

collection,

addDoc,

query,

orderBy,

limit,

onSnapshot,

serverTimestamp

}

from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

/* ===========================
   CHAT ROOM
=========================== */

const roomId = "support";

const chatBox = document.getElementById("chatMessages");

const chatInput = document.getElementById("chatInput");

const chatForm = document.getElementById("chatForm");

/* ===========================
   SEND MESSAGE
=========================== */

export async function sendMessage(text){

const user = auth.currentUser;

if(!user) return;

await addDoc(

collection(db,"chat_rooms",roomId,"messages"),

{

uid:user.uid,

name:user.displayName || "User",

photo:user.photoURL || "",

message:text,

createdAt:serverTimestamp()

}

);

}

/* ===========================
   RECEIVE MESSAGES
=========================== */

const messagesQuery = query(

collection(db,"chat_rooms",roomId,"messages"),

orderBy("createdAt","asc"),

limit(100)

);

onSnapshot(messagesQuery,(snapshot)=>{

if(!chatBox) return;

chatBox.innerHTML="";

snapshot.forEach(doc=>{

const data=doc.data();

const bubble=document.createElement("div");

bubble.className="chat-bubble";

bubble.innerHTML=`

<strong>${data.name}</strong><br>

${data.message}

`;

chatBox.appendChild(bubble);

});

chatBox.scrollTop=chatBox.scrollHeight;

});

/* ===========================
   SUBMIT
=========================== */

if(chatForm){

chatForm.addEventListener("submit",async(event)=>{

event.preventDefault();

const text=chatInput.value.trim();

if(!text) return;

await sendMessage(text);

chatInput.value="";

});

}
import {

doc,

setDoc,

serverTimestamp

}

from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

export async function updatePresence(){

const user=auth.currentUser;

if(!user) return;

await setDoc(

doc(db,"presence",user.uid),

{

online:true,

lastSeen:serverTimestamp()

},

{merge:true}

);

}

updatePresence();
import {

doc,

setDoc

}

from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

chatInput.addEventListener("input",async()=>{

const user=auth.currentUser;

if(!user) return;

await setDoc(

doc(db,"typing",user.uid),

{

typing:chatInput.value.length>0

},

{merge:true}

);

});
