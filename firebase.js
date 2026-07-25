/* ==========================================
   SPM AI - Firebase Configuration
========================================== */

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

import { getStorage } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-storage.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-analytics.js";

/* ==========================================
   Firebase Config
========================================== */

const firebaseConfig = {

    apiKey: "YOUR_API_KEY",

    authDomain: "YOUR_PROJECT.firebaseapp.com",

    projectId: "YOUR_PROJECT_ID",

    storageBucket: "YOUR_PROJECT.appspot.com",

    messagingSenderId: "YOUR_SENDER_ID",

    appId: "YOUR_APP_ID",

    measurementId: "YOUR_MEASUREMENT_ID"

};

/* ==========================================
   Initialize Firebase
========================================== */

const app = initializeApp(firebaseConfig);

/* ==========================================
   Firebase Services
========================================== */

const auth = getAuth(app);

const db = getFirestore(app);

const storage = getStorage(app);

const analytics = getAnalytics(app);

/* ==========================================
   Export
========================================== */

export {

    app,

    auth,

    db,

    storage,

    analytics

};
