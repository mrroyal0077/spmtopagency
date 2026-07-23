// ==========================
// SPM PWA ENGINE
// ==========================

if ("serviceWorker" in navigator) {

window.addEventListener("load", () => {

navigator.serviceWorker.register("service-worker.js")

.then((registration) => {

console.log("✅ Service Worker Registered");

})

.catch((error) => {

console.log("❌ Service Worker Failed:", error);

});

});

}

// Install Prompt

let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {

e.preventDefault();

deferredPrompt = e;

const installBtn = document.getElementById("installApp");

if (installBtn) {

installBtn.style.display = "inline-flex";

installBtn.addEventListener("click", async () => {

deferredPrompt.prompt();

await deferredPrompt.userChoice;

deferredPrompt = null;

installBtn.style.display = "none";

});

}

});
