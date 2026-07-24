/* ==========================================
firebase.js
Part 1
SPM AI v2.0
========================================== */

import { initializeApp } from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getFirestore,
collection,
addDoc,
serverTimestamp
} from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

/* ==========================================
FIREBASE CONFIG
Replace with your own config
========================================== */

const firebaseConfig = {

apiKey: "YOUR_API_KEY",

authDomain: "YOUR_PROJECT.firebaseapp.com",

projectId: "YOUR_PROJECT_ID",

storageBucket: "YOUR_PROJECT.appspot.com",

messagingSenderId: "YOUR_SENDER_ID",

appId: "YOUR_APP_ID"

};

/* ==========================================
INITIALIZE
========================================== */

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

/* ==========================================
SAVE YOYO USER
========================================== */

async function saveYOYOUser(yoyoID){

try{

await addDoc(

collection(db,"users"),

{

yoyoID:yoyoID,

createdAt:serverTimestamp(),

platform:"SPM AI"

}

);

console.log("User Saved");

}catch(error){

console.error(error);

}

}

/* ==========================================
LOGIN BUTTON
========================================== */

const loginBtn=document.getElementById("loginUser");

if(loginBtn){

loginBtn.addEventListener("click",()=>{

const input=document.getElementById("userID");

if(!input) return;

const id=input.value.trim();

if(id.length<5){

return;

}

saveYOYOUser(id);

});

}
/* ==========================================
CONTACT FORM
========================================== */

import {
collection,
addDoc,
serverTimestamp
} from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const contactForm=document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener("submit",async(e)=>{

e.preventDefault();

const name=document.getElementById("name").value.trim();

const email=document.getElementById("email").value.trim();

const message=document.getElementById("message").value.trim();

try{

await addDoc(

collection(db,"contact_messages"),

{

name,

email,

message,

createdAt:serverTimestamp()

}

);

showToast("Message Sent Successfully","success");

contactForm.reset();

}catch(error){

console.error(error);

showToast("Failed To Send Message","error");

}

});

}

/* ==========================================
SUPPORT REQUEST
========================================== */

async function saveSupportRequest(data){

try{

await addDoc(

collection(db,"support_requests"),

{

...data,

createdAt:serverTimestamp()

}

);

showToast("Support Request Submitted","success");

}catch(error){

console.error(error);

showToast("Request Failed","error");

}

}

/* ==========================================
RECHARGE REQUEST
========================================== */

async function saveRecharge(data){

try{

await addDoc(

collection(db,"recharge_requests"),

{

...data,

status:"Pending",

createdAt:serverTimestamp()

}

);

showToast("Recharge Request Submitted","success");

}catch(error){

console.error(error);

showToast("Recharge Failed","error");

}

}

/* ==========================================
EVENT REGISTRATION
========================================== */

async function registerEvent(data){

try{

await addDoc(

collection(db,"event_registration"),

{

...data,

createdAt:serverTimestamp()

}

);

showToast("Successfully Registered","success");

}catch(error){

console.error(error);

showToast("Registration Failed","error");

}

}

/* ==========================================
CHAT MESSAGE LOG
========================================== */

async function saveChat(message,user){

try{

await addDoc(

collection(db,"chat_logs"),

{

user,

message,

createdAt:serverTimestamp()

}

);

}catch(error){

console.error(error);

}

}

/* ==========================================
SIMPLE VALIDATION
========================================== */

function isValidEmail(email){

return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

}
/* ==========================================
firebase.js
Part 3 (Final)
========================================== */

import {
getAuth,
GoogleAuthProvider,
signInWithPopup,
signOut,
onAuthStateChanged
} from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
collection,
query,
orderBy,
limit,
onSnapshot,
getCountFromServer,
enableIndexedDbPersistence
} from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

/* ==========================================
AUTH
========================================== */

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

/* ==========================================
GOOGLE LOGIN
========================================== */

async function loginGoogle(){

try{

await signInWithPopup(auth,provider);

showToast("Google Login Successful","success");

}catch(error){

console.error(error);

showToast("Login Failed","error");

}

}

/* ==========================================
LOGOUT
========================================== */

async function logout(){

try{

await signOut(auth);

showToast("Logged Out","success");

}catch(error){

console.error(error);

}

}

/* ==========================================
USER STATUS
========================================== */

onAuthStateChanged(auth,user=>{

const profile=document.getElementById("userName");

if(!profile) return;

if(user){

profile.innerHTML=user.displayName;

}else{

profile.innerHTML="Guest";

}

});

/* ==========================================
REALTIME CHAT
========================================== */

const chatQuery=query(

collection(db,"chat_logs"),

orderBy("createdAt","desc"),

limit(20)

);

onSnapshot(chatQuery,snapshot=>{

console.log("Realtime Chat Updated");

});

/* ==========================================
LIVE DASHBOARD
========================================== */

async function updateDashboard(){

try{

const users=await getCountFromServer(

collection(db,"users")

);

const recharge=await getCountFromServer(

collection(db,"recharge_requests")

);

const support=await getCountFromServer(

collection(db,"support_requests")

);

document.getElementById("totalUsers").innerHTML=

users.data().count;

document.getElementById("totalRecharge").innerHTML=

recharge.data().count;

document.getElementById("totalSupport").innerHTML=

support.data().count;

}catch(error){

console.error(error);

}

}

updateDashboard();

/* ==========================================
OFFLINE CACHE
========================================== */

enableIndexedDbPersistence(db)

.catch(error=>{

console.log("Offline Cache Disabled");

});

/* ==========================================
NETWORK STATUS
========================================== */

window.addEventListener("online",()=>{

showToast("Connected","success");

});

window.addEventListener("offline",()=>{

showToast("Offline Mode","error");

});

/* ==========================================
GLOBAL FUNCTIONS
========================================== */

window.loginGoogle=loginGoogle;

window.logout=logout;

/* ==========================================
END
========================================== */

console.log("Firebase Connected Successfully");
