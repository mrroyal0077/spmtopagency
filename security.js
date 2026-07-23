// ==========================
// SPM SECURITY ENGINE
// ==========================

// Disable Right Click
document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
});

// Disable Common Developer Shortcuts
document.addEventListener("keydown", (e) => {

    if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["I","J","C"].includes(e.key.toUpperCase())) ||
        (e.ctrlKey && e.key.toUpperCase() === "U")
    ) {
        e.preventDefault();
    }

});

// Copy Protection (Optional)
document.addEventListener("copy", () => {
    console.log("Content copied.");
});

// Warn if Offline
window.addEventListener("offline", () => {
    alert("⚠️ Internet connection lost.");
});
