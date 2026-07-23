// ==========================
// SPM ANALYTICS ENGINE
// ==========================

// Session Counter
let visits = Number(localStorage.getItem("spm_visits") || 0);
visits++;
localStorage.setItem("spm_visits", visits);

const visitBox = document.getElementById("visitCount");

if (visitBox) {
    visitBox.textContent = visits.toLocaleString();
}

// Page Load Time
window.addEventListener("load", () => {
    const loadTime = performance.now().toFixed(0);

    const loadBox = document.getElementById("loadTime");

    if (loadBox) {
        loadBox.textContent = `${loadTime} ms`;
    }
});

// Online / Offline Status
const statusBox = document.getElementById("networkStatus");

function updateStatus() {
    if (!statusBox) return;

    statusBox.textContent = navigator.onLine ? "🟢 Online" : "🔴 Offline";
}

window.addEventListener("online", updateStatus);
window.addEventListener("offline", updateStatus);

updateStatus();
