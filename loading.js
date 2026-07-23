// ==========================
// SPM LOADING ENGINE
// ==========================

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

if (!loader) return;

loader.classList.add("hide");

setTimeout(() => {

loader.remove();

},600);

});
