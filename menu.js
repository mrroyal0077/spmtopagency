// ===============================
// SPM TOP AGENCY - AI MENU
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

nav.classList.toggle("active");

if(nav.classList.contains("active")){

menuBtn.innerHTML="✕";

}else{

menuBtn.innerHTML="☰";

}

});

}

document.querySelectorAll("nav a").forEach(link=>{

link.addEventListener("click",()=>{

nav.classList.remove("active");

menuBtn.innerHTML="☰";

});

});
