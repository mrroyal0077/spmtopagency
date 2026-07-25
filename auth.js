"use strict";

/* ==========================================
   Register User
========================================== */

async function registerUser(email, password){

try{

const userCredential = await auth.createUserWithEmailAndPassword(

email,

password

);

console.log("User Registered:", userCredential.user.uid);

alert("Registration Successful!");

return userCredential.user;

}catch(error){

console.error(error);

alert(error.message);

return null;

}

}

/* ==========================================
   Login User
========================================== */

async function loginUser(email, password){

try{

const userCredential = await auth.signInWithEmailAndPassword(

email,

password

);

console.log("Login Successful:", userCredential.user.uid);

alert("Welcome Back!");

return userCredential.user;

}catch(error){

console.error(error);

alert(error.message);

return null;

}

}

/* ==========================================
   Login Form
========================================== */

const loginForm = document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit", async(e)=>{

e.preventDefault();

const email = loginForm.email.value.trim();

const password = loginForm.password.value;

await loginUser(email,password);

});

}

/* ==========================================
   Register Form
========================================== */

const registerForm = document.getElementById("registerForm");

if(registerForm){

registerForm.addEventListener("submit", async(e)=>{

e.preventDefault();

const email = registerForm.email.value.trim();

const password = registerForm.password.value;

await registerUser(email,password);

});

}

/* ==========================================
   Export Functions
========================================== */

window.loginUser = loginUser;

window.registerUser = registerUser;
/* ==========================================
   Google Sign-In
========================================== */

const googleProvider = new firebase.auth.GoogleAuthProvider();

async function googleLogin(){

try{

const result = await auth.signInWithPopup(googleProvider);

console.log("Google Login:", result.user.uid);

alert("Google Sign-In Successful!");

return result.user;

}catch(error){

console.error(error);

alert(error.message);

return null;

}

}

const googleLoginBtn = document.getElementById("googleLogin");

if(googleLoginBtn){

googleLoginBtn.addEventListener("click",googleLogin);

}

/* ==========================================
   Password Reset
========================================== */

async function resetPassword(email){

try{

await auth.sendPasswordResetEmail(email);

alert("Password reset email sent.");

}catch(error){

console.error(error);

alert(error.message);

}

}

const resetBtn = document.getElementById("resetPassword");

if(resetBtn){

resetBtn.addEventListener("click",()=>{

const email = prompt("Enter your email address:");

if(email){

resetPassword(email.trim());

}

});

}

/* ==========================================
   Email Verification
========================================== */

async function sendEmailVerification(){

const user = auth.currentUser;

if(!user){

alert("Please login first.");

return;

}

try{

await user.sendEmailVerification();

alert("Verification email sent.");

}catch(error){

console.error(error);

alert(error.message);

}

}

/* ==========================================
   Logout
========================================== */

const logoutBtn = document.getElementById("logoutBtn");

if(logoutBtn){

logoutBtn.addEventListener("click",async()=>{

try{

await auth.signOut();

alert("Logged out successfully.");

}catch(error){

console.error(error);

alert(error.message);

}

});

}

/* ==========================================
   Export Functions
========================================== */

window.googleLogin = googleLogin;

window.resetPassword = resetPassword;

window.sendEmailVerification = sendEmailVerification;
/* ==========================================
   Update User Profile
========================================== */

async function updateUserProfile(name, photoURL = ""){

const user = auth.currentUser;

if(!user){

alert("Please login first.");

return;

}

try{

await user.updateProfile({

displayName: name,

photoURL: photoURL

});

alert("Profile updated successfully.");

}catch(error){

console.error(error);

alert(error.message);

}

}

/* ==========================================
   Change Password
========================================== */

async function changePassword(newPassword){

const user = auth.currentUser;

if(!user){

alert("Please login first.");

return;

}

try{

await user.updatePassword(newPassword);

alert("Password changed successfully.");

}catch(error){

console.error(error);

alert(error.message);

}

}

/* ==========================================
   Delete Account
========================================== */

async function deleteAccount(){

const user = auth.currentUser;

if(!user){

alert("Please login first.");

return;

}

const confirmDelete = confirm(

"Are you sure you want to permanently delete your account?"

);

if(!confirmDelete){

return;

}

try{

await user.delete();

alert("Account deleted successfully.");

}catch(error){

console.error(error);

alert(error.message);

}

}

/* ==========================================
   Authentication UI
========================================== */

auth.onAuthStateChanged((user)=>{

const guestArea = document.getElementById("guestArea");

const userArea = document.getElementById("userArea");

const profileName = document.getElementById("profileName");

if(user){

if(guestArea){

guestArea.style.display="none";

}

if(userArea){

userArea.style.display="block";

}

if(profileName){

profileName.textContent=

user.displayName ||

user.email ||

"SPM User";

}

}else{

if(guestArea){

guestArea.style.display="block";

}

if(userArea){

userArea.style.display="none";

}

}

});

/* ==========================================
   Export Functions
========================================== */

window.updateUserProfile = updateUserProfile;

window.changePassword = changePassword;

window.deleteAccount = deleteAccount;
/* ==========================================
   Re-authenticate User
========================================== */

async function reauthenticateUser(password){

const user = auth.currentUser;

if(!user){

throw new Error("No user is logged in.");

}

const credential = firebase.auth.EmailAuthProvider.credential(

user.email,

password

);

return user.reauthenticateWithCredential(credential);

}

/* ==========================================
   Reload Current User
========================================== */

async function reloadCurrentUser(){

try{

const user = auth.currentUser;

if(user){

await user.reload();

console.log("User data refreshed.");

}

}catch(error){

console.error(error);

}

}

/* ==========================================
   Check Email Verification
========================================== */

function isEmailVerified(){

const user = auth.currentUser;

return user ? user.emailVerified : false;

}

/* ==========================================
   Get Current User Info
========================================== */

function getUserInfo(){

const user = auth.currentUser;

if(!user){

return null;

}

return{

uid:user.uid,

name:user.displayName,

email:user.email,

photo:user.photoURL,

verified:user.emailVerified

};

}

/* ==========================================
   Authentication Error Messages
========================================== */

function getAuthError(error){

switch(error.code){

case "auth/user-not-found":

return "User not found.";

case "auth/wrong-password":

return "Incorrect password.";

case "auth/email-already-in-use":

return "Email is already registered.";

case "auth/weak-password":

return "Password is too weak.";

case "auth/invalid-email":

return "Invalid email address.";

case "auth/network-request-failed":

return "Network connection error.";

default:

return error.message;

}

}

/* ==========================================
   Auth Ready
========================================== */

let authReady = false;

auth.onAuthStateChanged(()=>{

authReady = true;

});

function isAuthReady(){

return authReady;

}

/* ==========================================
   Export Helpers
========================================== */

window.reauthenticateUser = reauthenticateUser;

window.reloadCurrentUser = reloadCurrentUser;

window.isEmailVerified = isEmailVerified;

window.getUserInfo = getUserInfo;

window.getAuthError = getAuthError;

window.isAuthReady = isAuthReady;

/* ==========================================
   End Of File
========================================== */

console.log("auth.js loaded successfully ✅");
