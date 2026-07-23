// ==========================
// SPM ACCESSIBILITY
// ==========================

// Skip to Main Content
const skipLink = document.createElement("a");
skipLink.href = "#main";
skipLink.className = "skip-link";
skipLink.textContent = "Skip to Main Content";

document.body.prepend(skipLink);

// Keyboard Focus
document.addEventListener("keydown", (e) => {

    if (e.key === "Tab") {
        document.body.classList.add("keyboard-navigation");
    }

});

document.addEventListener("mousedown", () => {

    document.body.classList.remove("keyboard-navigation");

});

// ESC closes AI Assistant
document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        document.querySelector(".ai-assistant")
            ?.classList.remove("open");

    }

});
