import { db } from "./firebase.js";

import {
doc,
runTransaction,
serverTimestamp
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

/* ===========================
   CREDIT COINS
=========================== */

export async function creditCoins(uid, coins) {

const userRef = doc(db, "users", uid);

await runTransaction(db, async (transaction) => {

const userDoc = await transaction.get(userRef);

if (!userDoc.exists()) {

throw new Error("User not found");

}

const currentCoins = userDoc.data().coins || 0;

transaction.update(userRef, {

coins: currentCoins + Number(coins),

lastRecharge: serverTimestamp()

});

});

}

/* ===========================
   VIP UPGRADE
=========================== */

export async function upgradeVIP(uid, vipPlan) {

const userRef = doc(db, "users", uid);

await runTransaction(db, async (transaction) => {

transaction.update(userRef, {

vip: vipPlan,

vipActivated: serverTimestamp()

});

});

}
import {

collection,

addDoc,

serverTimestamp

}

from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

export async function createNotification(uid, title, message) {

await addDoc(

collection(db, "notifications"),

{

uid,

title,

message,

read: false,

createdAt: serverTimestamp()

}

);

}
export async function createSupportTicket(uid, subject, message) {

await addDoc(

collection(db, "support"),

{

uid,

subject,

message,

status: "Open",

createdAt: serverTimestamp()

}

);

}
export async function logActivity(uid, action) {

await addDoc(

collection(db, "activity_logs"),

{

uid,

action,

time: serverTimestamp()

}

);

}
