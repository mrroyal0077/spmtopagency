import { db } from "./firebase.js";

import {
collection,
addDoc,
serverTimestamp
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

/* ===========================
   CREATE PAYMENT RECORD
=========================== */

export async function createPayment(data){

return await addDoc(

collection(db,"payments"),

{

userId:data.userId,

amount:data.amount,

coins:data.coins,

method:data.method,

status:"Pending",

transactionId:"",

createdAt:serverTimestamp()

}

);

}
import { storage } from "./firebase.js";

import {

ref,

uploadBytes,

getDownloadURL

}

from "https://www.gstatic.com/firebasejs/11.6.1/firebase-storage.js";

export async function uploadScreenshot(file){

const path=

`payments/${Date.now()}_${file.name}`;

const fileRef=ref(storage,path);

await uploadBytes(fileRef,file);

return await getDownloadURL(fileRef);

}
import {

doc,

updateDoc

}

from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

export async function saveProof(

paymentId,

imageUrl

){

await updateDoc(

doc(db,"payments",paymentId),

{

proof:imageUrl

}

);

}
import {

collection,

query,

where,

getDocs

}

from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

export async function loadHistory(uid){

const q=query(

collection(db,"payments"),

where("userId","==",uid)

);

const snapshot=await getDocs(q);

return snapshot.docs.map(doc=>({

id:doc.id,

...doc.data()

}));

}
import {

doc,

updateDoc,

serverTimestamp

}

from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

export async function approvePayment(id){

await updateDoc(

doc(db,"payments",id),

{

status:"Approved",

approvedAt:serverTimestamp()

}

);

}
export async function rejectPayment(id){

await updateDoc(

doc(db,"payments",id),

{

status:"Rejected",

approvedAt:serverTimestamp()

}

);

}
import {

collection,

getDocs

}

from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

export async function loadRevenue(){

const snapshot=

await getDocs(collection(db,"payments"));

let total=0;

snapshot.forEach(doc=>{

const payment=doc.data();

if(payment.status==="Approved"){

total+=Number(payment.amount||0);

}

});

document.getElementById("revenue")

.textContent=total.toLocaleString();

}
