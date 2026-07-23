/*=========================================
 SPM TOP AGENCY V4 ULTRA
=========================================*/

// Welcome Screen
window.addEventListener("load", () => {
  const welcome = document.getElementById("welcome");

  setTimeout(() => {
    if (welcome) {
      welcome.style.opacity = "0";
      welcome.style.visibility = "hidden";
      welcome.style.transition = "1s";
    }
  }, 3000);
});

// Active Navigation
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach((section) => {

    const top = section.offsetTop - 120;
    const height = section.offsetHeight;

    if (window.scrollY >= top) {
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach((link) => {

    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }

  });

});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function(e){

    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if(target){

      target.scrollIntoView({
        behavior:"smooth"
      });

    }

  });

});

// Fade Animation
const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:0.15});

document.querySelectorAll(
".coin-card,.vip-card,.update-card,.why-card,.contact-card,.stat-card"
).forEach((el)=>{

observer.observe(el);

});

// Console
console.log("SPM TOP AGENCY V4 Loaded Successfully 🚀");
