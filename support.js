import { auth, db } from "./firebase.js";

import {

collection,
addDoc,
query,
where,
orderBy,
onSnapshot,
serverTimestamp

}

from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

/* ===========================
   CREATE TICKET
=========================== */

export async function createTicket(data){

const user = auth.currentUser;

if(!user){

throw new Error("Login required");

}

await addDoc(

collection(db,"support_tickets"),

{

uid:user.uid,

name:user.displayName || "User",

subject:data.subject,

message:data.message,

priority:data.priority,

status:"Open",

createdAt:serverTimestamp()

}

);

}

/* ===========================
   MY TICKETS
=========================== */

export function loadMyTickets(){

const user=auth.currentUser;

if(!user) return;

const q=query(

collection(db,"support_tickets"),

where("uid","==",user.uid),

orderBy("createdAt","desc")

);

onSnapshot(q,(snapshot)=>{

const list=document.getElementById("ticketList");

if(!list) return;

list.innerHTML="";

snapshot.forEach(doc=>{

const item=doc.data();

list.innerHTML+=`

<div class="ticket-card">

<h3>${item.subject}</h3>

<p>${item.message}</p>

<span>${item.priority}</span>

<strong>${item.status}</strong>

</div>

`;

});

});

}
