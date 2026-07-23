// ==========================
// SPM NOTIFICATION ENGINE
// ==========================

const toast = document.getElementById("toast");

function showToast(message, type = "info") {

    if (!toast) return;

    toast.textContent = message;

    toast.className = `toast show ${type}`;

    clearTimeout(window.toastTimer);

    window.toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 3500);
}

// Welcome Message
window.addEventListener("load", () => {
    setTimeout(() => {
        showToast("👋 Welcome to SPM TOP AGENCY", "success");
    }, 1000);
});

// Example Buttons
document.querySelectorAll("[data-toast]").forEach(btn => {

    btn.addEventListener("click", () => {

        showToast(btn.dataset.toast, "success");

    });

});
