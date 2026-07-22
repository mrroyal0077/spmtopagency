// ===============================
// SPM TOP AGENCY
// script.js
// ===============================

// Loader
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    if (loader) {
        loader.style.opacity = "0";
        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }
});

// Mobile Menu
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Counter Animation
const counters = document.querySelectorAll(".stat-box h2");

counters.forEach(counter => {

    const targetText = counter.innerText;

    const number = parseInt(targetText);

    if(isNaN(number)) return;

    let count = 0;

    const speed = Math.ceil(number / 100);

    const update = () => {

        count += speed;

        if(count >= number){

            counter.innerText = targetText;

        }else{

            counter.innerText = count + "+";

            requestAnimationFrame(update);

        }

    };

    update();

});

// Active Navbar
window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.background="#000";

header.style.boxShadow="0 0 20px gold";

}else{

header.style.background="#111";

header.style.boxShadow="none";

}

});

// Fade Animation
const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".service-card,.package-card,.stat-box").forEach(el=>{

observer.observe(el);

});

console.log("SPM TOP AGENCY Loaded Successfully");
