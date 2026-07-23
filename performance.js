// ==========================
// SPM PERFORMANCE ENGINE
// ==========================

// Lazy Loading Images
document.querySelectorAll("img").forEach(img => {

    img.loading = "lazy";

});

// Reveal Animation
const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(".fade-up").forEach(el=>{

    observer.observe(el);

});

// Back To Top Button
const topBtn=document.querySelector(".back-top");

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topBtn?.classList.add("visible");

    }else{

        topBtn?.classList.remove("visible");

    }

});

// Smooth Anchor Scroll
document.querySelectorAll('a[href^="#"]').forEach(link=>{

    link.addEventListener("click",e=>{

        e.preventDefault();

        const target=document.querySelector(link.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// Console Branding
console.log("%cSPM TOP AGENCY","font-size:26px;color:#00eaff;font-weight:bold;");
console.log("%cOfficial Dealer | Agency Code: 100857","font-size:16px;color:#ffd700;");
