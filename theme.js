/*=========================================
 SPM TOP AGENCY
 Theme Switcher
=========================================*/

const themeBtn = document.getElementById("themeToggle");

if (themeBtn) {

    // Load saved theme
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-theme");
        themeBtn.innerHTML = "🌙";
    } else {
        themeBtn.innerHTML = "☀️";
    }

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light-theme");

        if (document.body.classList.contains("light-theme")) {
            localStorage.setItem("theme", "light");
            themeBtn.innerHTML = "🌙";
        } else {
            localStorage.setItem("theme", "dark");
            themeBtn.innerHTML = "☀️";
        }

    });

}
