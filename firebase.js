"use strict";

/* ==========================================
   Firebase Configuration
========================================== */

/*
Replace the values below with your own
Firebase project configuration.
*/

const firebaseConfig = {

apiKey: "YOUR_API_KEY",

authDomain: "YOUR_PROJECT.firebaseapp.com",

projectId: "YOUR_PROJECT_ID",

storageBucket: "YOUR_PROJECT.appspot.com",

messagingSenderId: "YOUR_SENDER_ID",

appId: "YOUR_APP_ID"

};

/* ==========================================
   Initialize Firebase
========================================== */

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = firebase.firestore();

const storage = firebase.storage();

/* ==========================================
   Firestore Settings
========================================== */

db.settings({

ignoreUndefinedProperties: true

});

/* ==========================================
   Global Access
========================================== */

window.auth = auth;

window.db = db;

window.storage = storage;

console.log("Firebase initialized successfully ✅");
/* ==========================================
   Authentication State Listener
========================================== */

auth.onAuthStateChanged((user) => {

if(user){

console.log("User Signed In:", user.email || user.uid);

window.currentUser = user;

updateUserUI(user);

}else{

console.log("No user signed in.");

window.currentUser = null;

updateUserUI(null);

}

});

/* ==========================================
   Update User Interface
========================================== */

function updateUserUI(user){

const userName = document.getElementById("userName");
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");

if(user){

if(userName){

userName.textContent =
user.displayName || user.email || "SPM User";

}

if(loginBtn){

loginBtn.style.display = "none";

}

if(logoutBtn){

logoutBtn.style.display = "inline-block";

}

}else{

if(userName){

userName.textContent = "Guest";

}

if(loginBtn){

loginBtn.style.display = "inline-block";

}

if(logoutBtn){

logoutBtn.style.display = "none";

}

}

}

/* ==========================================
   Keep User Logged In
========================================== */

auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)

.then(()=>{

console.log("Session persistence enabled.");

})

.catch((error)=>{

console.error("Persistence Error:", error.message);

});

/* ==========================================
   Logout Function
========================================== */

function logoutUser(){

auth.signOut()

.then(()=>{

alert("Logged out successfully.");

})

.catch((error)=>{

alert(error.message);

});

}

window.logoutUser = logoutUser;
/* ==========================================
   Firestore - Add Document
========================================== */

async function addDocument(collectionName, data){

try{

const docRef = await db.collection(collectionName).add(data);

console.log("Document Added:", docRef.id);

return docRef.id;

}catch(error){

console.error("Add Document Error:", error);

return null;

}

}

/* ==========================================
   Firestore - Get Documents
========================================== */

async function getDocuments(collectionName){

try{

const snapshot = await db.collection(collectionName).get();

const data = [];

snapshot.forEach((doc)=>{

data.push({

id: doc.id,

...doc.data()

});

});

return data;

}catch(error){

console.error("Get Documents Error:", error);

return [];

}

}

/* ==========================================
   Firestore - Update Document
========================================== */

async function updateDocument(collectionName, documentId, data){

try{

await db.collection(collectionName)

.doc(documentId)

.update(data);

console.log("Document Updated");

}catch(error){

console.error("Update Error:", error);

}

}

/* ==========================================
   Firestore - Delete Document
========================================== */

async function deleteDocument(collectionName, documentId){

try{

await db.collection(collectionName)

.doc(documentId)

.delete();

console.log("Document Deleted");

}catch(error){

console.error("Delete Error:", error);

}

}

/* ==========================================
   Storage - Upload File
========================================== */

async function uploadFile(file, folder="uploads"){

try{

const fileName = `${Date.now()}_${file.name}`;

const ref = storage.ref(`${folder}/${fileName}`);

await ref.put(file);

const url = await ref.getDownloadURL();

console.log("File Uploaded:", url);

return url;

}catch(error){

console.error("Upload Error:", error);

return null;

}

}

/* ==========================================
   Storage - Delete File
========================================== */

async function deleteFile(filePath){

try{

await storage.ref(filePath).delete();

console.log("File Deleted");

}catch(error){

console.error("Delete File Error:", error);

}

}

/* ==========================================
   Export Helpers
========================================== */

window.addDocument = addDocument;

window.getDocuments = getDocuments;

window.updateDocument = updateDocument;

window.deleteDocument = deleteDocument;

window.uploadFile = uploadFile;

window.deleteFile = deleteFile;
/* ==========================================
   Firestore Real-Time Listener
========================================== */

function listenCollection(collectionName, callback){

return db.collection(collectionName)

.onSnapshot((snapshot)=>{

const data=[];

snapshot.forEach((doc)=>{

data.push({

id:doc.id,

...doc.data()

});

});

if(typeof callback==="function"){

callback(data);

}

},(error)=>{

console.error("Realtime Listener Error:",error);

});

}

window.listenCollection=listenCollection;

/* ==========================================
   Server Timestamp
========================================== */

function serverTimestamp(){

return firebase.firestore.FieldValue.serverTimestamp();

}

window.serverTimestamp=serverTimestamp;

/* ==========================================
   Internet Status
========================================== */

function updateNetworkStatus(){

const status=document.getElementById("networkStatus");

if(!status) return;

if(navigator.onLine){

status.textContent="🟢 Online";

status.style.color="#00ff99";

}else{

status.textContent="🔴 Offline";

status.style.color="#ff4d4d";

}

}

window.addEventListener("online",updateNetworkStatus);
window.addEventListener("offline",updateNetworkStatus);

updateNetworkStatus();

/* ==========================================
   Firebase Health Check
========================================== */

async function firebaseHealthCheck(){

try{

await db.collection("_health").limit(1).get();

console.log("Firebase Connected ✅");

return true;

}catch(error){

console.error("Firebase Connection Failed:",error);

return false;

}

}

window.firebaseHealthCheck=firebaseHealthCheck;

/* ==========================================
   Get Current User
========================================== */

function getCurrentUser(){

return auth.currentUser;

}

window.getCurrentUser=getCurrentUser;

/* ==========================================
   Generate Document ID
========================================== */

function generateDocumentId(collectionName){

return db.collection(collectionName).doc().id;

}

window.generateDocumentId=generateDocumentId;

/* ==========================================
   End Of File
========================================== */

console.log("firebase.js loaded successfully ✅");
