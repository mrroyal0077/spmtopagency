// Firebase SDK

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";

import {
getFirestore
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

import {
getAuth
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

import {
getStorage
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-storage.js";

import {
getAnalytics
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-analytics.js";

/* Replace these values with your Firebase project settings */

const firebaseConfig = {

apiKey: "YOUR_API_KEY",

authDomain: "YOUR_PROJECT.firebaseapp.com",

projectId: "YOUR_PROJECT_ID",

storageBucket: "YOUR_PROJECT.appspot.com",

messagingSenderId: "YOUR_SENDER_ID",

appId: "YOUR_APP_ID",

measurementId: "YOUR_MEASUREMENT_ID"

};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const analytics = getAnalytics(app);
import {

doc,

getDoc,

updateDoc,

increment,

setDoc

}

from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

import { db } from "./firebase.js";

async function updateVisitors(){

const ref=doc(db,"website","stats");

const snap=await getDoc(ref);

if(!snap.exists()){

await setDoc(ref,{

visitors:1

});

return;

}

await updateDoc(ref,{

visitors:increment(1)

});

}

updateVisitors();
import {

doc,

getDoc

}

from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

import { db } from "./firebase.js";

async function loadCoinRate(){

const snap=await getDoc(

doc(db,"coin_rates","standard")

);

if(snap.exists()){

const data=snap.data();

document.getElementById("coinRate").textContent=

data.price;

}

}

loadCoinRate();
