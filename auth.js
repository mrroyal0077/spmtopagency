/* ==========================================
   SPM AI - Authentication
========================================== */

import { auth, db } from "./firebase.js";

import {

GoogleAuthProvider,
signInWithPopup,
signOut,
onAuthStateChanged

} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

import {

doc,
setDoc,
serverTimestamp

} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

/* ==========================================
   Google Provider
========================================== */

const provider = new GoogleAuthProvider();

/* ==========================================
   Google Login
========================================== */

export async function login() {

    try {

        const result = await signInWithPopup(auth, provider);

        const user = result.user;

        await setDoc(

            doc(db, "users", user.uid),

            {

                uid: user.uid,

                name: user.displayName || "",

                email: user.email || "",

                photo: user.photoURL || "",

                provider: "google",

                createdAt: serverTimestamp(),

                role: "user"

            },

            {

                merge: true

            }

        );

        console.log("Login Success");

    }

    catch (error) {

        console.error(error);

    }

}

/* ==========================================
   Logout
========================================== */

export async function logout() {

    try {

        await signOut(auth);

        console.log("Logout Success");

    }

    catch (error) {

        console.error(error);

    }

}

/* ==========================================
   Current User
========================================== */

export function currentUser(callback) {

    onAuthStateChanged(auth, (user) => {

        callback(user);

    });

}

/* ==========================================
   Update UI
========================================== */

currentUser((user) => {

    const loginButton = document.getElementById("loginButton");

    const logoutButton = document.getElementById("logoutButton");

    const userName = document.getElementById("userName");

    const userPhoto = document.getElementById("userPhoto");

    if (!loginButton || !logoutButton) return;

    if (user) {

        loginButton.style.display = "none";

        logoutButton.style.display = "inline-block";

        if (userName) {

            userName.textContent =

                user.displayName;

        }

        if (userPhoto) {

            userPhoto.src =

                user.photoURL;

        }

    }

    else {

        loginButton.style.display = "inline-block";

        logoutButton.style.display = "none";

    }

});

/* ==========================================
   Button Events
========================================== */

const loginButton = document.getElementById("loginButton");

const logoutButton = document.getElementById("logoutButton");

loginButton?.addEventListener(

    "click",

    login

);

logoutButton?.addEventListener(

    "click",

    logout

);
