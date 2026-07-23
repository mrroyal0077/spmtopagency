// ==========================
// SPM ADMIN PANEL (LOCAL)
// ==========================

const adminToggle = document.getElementById("adminToggle");
const adminPanel = document.getElementById("adminPanel");
const saveAnnouncement = document.getElementById("saveAnnouncement");
const announcementInput = document.getElementById("announcementInput");
const announcementText = document.getElementById("announcementText");

adminToggle?.addEventListener("click", () => {
    adminPanel.classList.toggle("open");
});

const saved = localStorage.getItem("spm_announcement");

if (saved && announcementText) {
    announcementText.textContent = saved;
}

saveAnnouncement?.addEventListener("click", () => {

    const value = announcementInput.value.trim();

    if (!value) return;

    localStorage.setItem("spm_announcement", value);

    if (announcementText) {
        announcementText.textContent = value;
    }

    alert("✅ Announcement Updated");

});
