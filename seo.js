// ==========================
// SPM SEO ENGINE
// ==========================

// Dynamic Title
document.addEventListener("visibilitychange", () => {

if (document.hidden) {

document.title = "👋 Come Back | SPM TOP AGENCY";

} else {

document.title = "SPM TOP AGENCY | Official Dealer";

}

});

// Canonical URL
const canonical = document.createElement("link");
canonical.rel = "canonical";
canonical.href = window.location.href.split("#")[0];
document.head.appendChild(canonical);

// Theme Color
const theme = document.createElement("meta");
theme.name = "theme-color";
theme.content = "#00eaff";
document.head.appendChild(theme);

// Console Branding
console.log("%cSPM TOP AGENCY", "font-size:24px;font-weight:bold;color:#00eaff;");
