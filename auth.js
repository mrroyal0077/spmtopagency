import { auth, db } from "./firebase.js";

import {

GoogleAuthProvider,

signInWithPopup,

RecaptchaVerifier,

signInWithPhoneNumber,

onAuthStateChanged,

signOut

} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

import {

doc,

setDoc,

serverTimestamp

} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

/* ===========================
   GOOGLE LOGIN
=========================== */

const googleProvider = new GoogleAuthProvider();

export async function googleLogin() {

try {

const result = await signInWithPopup(auth, googleProvider);

const user = result.user;

await saveUser(user);

return user;

} catch (error) {

console.error(error);

}

}

/* ===========================
   PHONE LOGIN
=========================== */

window.recaptchaVerifier = new RecaptchaVerifier(

auth,

"recaptcha-container",

{

size: "normal"

}

);

export async function sendOTP(phoneNumber) {

const confirmation = await signInWithPhoneNumber(

auth,

phoneNumber,

window.recaptchaVerifier

);

window.confirmationResult = confirmation;

}

export async function verifyOTP(code) {

await window.confirmationResult.confirm(code);

}

/* ===========================
   SAVE USER
=========================== */

async function saveUser(user) {

await setDoc(

doc(db, "users", user.uid),

{

uid: user.uid,

name: user.displayName || "SPM User",

email: user.email || "",

phone: user.phoneNumber || "",

photo: user.photoURL || "",

createdAt: serverTimestamp(),

status: "active"

},

{ merge: true }

);

}

/* ===========================
   USER STATE
=========================== */

onAuthStateChanged(auth, (user) => {

if (user) {

console.log("Logged In");

document.body.classList.add("logged-in");

} else {

document.body.classList.remove("logged-in");

}

});

/* ===========================
   LOGOUT
=========================== */

export async function logout() {

await signOut(auth);

}
import {

googleLogin,

sendOTP,

verifyOTP

} from "./auth.js";

document

.getElementById("googleLogin")

.addEventListener("click", googleLogin);

document

.getElementById("sendOTP")

.addEventListener("click", () => {

sendOTP(

document.getElementById("phoneNumber").value

);

});

document

.getElementById("verifyOTP")

.addEventListener("click", () => {

verifyOTP(

document.getElementById("otpCode").value

);

});
