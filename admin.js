import { auth, db } from "./firebase.js";

import {
onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

import {
doc,
getDoc,
collection,
getDocs,
updateDoc,
serverTimestamp
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

/* ===========================
   ADMIN AUTH
=========================== */

let currentAdmin = null;

onAuthStateChanged(auth, async (user) => {

if (!user) {

window.location.href = "index.html";

return;

}

const adminRef = doc(db, "admins", user.uid);

const adminSnap = await getDoc(adminRef);

if (!adminSnap.exists()) {

window.location.href = "index.html";

return;

}

currentAdmin = adminSnap.data();

loadDashboard();

});

/* ===========================
   DASHBOARD
=========================== */

async function loadDashboard() {

loadUsers();

loadOrders();

loadTickets();

loadCoinRates();

}
async function loadUsers() {

const snapshot = await getDocs(collection(db, "users"));

document.getElementById("userCount").textContent =
snapshot.size;

}
async function loadOrders() {

const snapshot =
await getDocs(collection(db, "orders"));

document.getElementById("orderCount").textContent =
snapshot.size;

}
async function loadTickets() {

const snapshot =
await getDocs(collection(db, "support"));

document.getElementById("ticketCount").textContent =
snapshot.size;

}
async function updateCoinRate(rate) {

await updateDoc(

doc(db, "coin_rates", "standard"),

{

price: rate,

updated: serverTimestamp()

}

);

alert("Coin Rate Updated");

}
async function updateVIP(id, price) {

await updateDoc(

doc(db, "vip", id),

{

price,

updated: serverTimestamp()

}

);

}
async function approveOrder(orderId) {

await updateDoc(

doc(db, "orders", orderId),

{

status: "Approved",

approvedAt: serverTimestamp()

}

);

}
async function sendBroadcast(title, message) {

await addDoc(

collection(db, "broadcast"),

{

title,

message,

createdAt: serverTimestamp(),

status: "active"

}

);

}
import {
addDoc
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";
