// ==========================
// SPM OFFLINE ENGINE
// ==========================

const banner = document.getElementById("offlineBanner");

function updateConnection() {

    if (!banner) return;

    if (navigator.onLine) {

        banner.classList.remove("show");
        banner.textContent = "";

    } else {

        banner.classList.add("show");
        banner.textContent = "📡 No Internet Connection";

    }

}

window.addEventListener("online", updateConnection);
window.addEventListener("offline", updateConnection);

updateConnection();
