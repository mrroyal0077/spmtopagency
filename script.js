/*====================================
 SPM TOP AGENCY
 Premium Script
====================================*/

// Current Year
const year = document.getElementById("copyright");
if (year) {
  year.innerHTML =
    "© " + new Date().getFullYear() + " SPM TOP AGENCY. All Rights Reserved.";
}

// Active Navigation
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const top = section.offsetTop - 120;
    const height = section.offsetHeight;

    if (pageYOffset >= top) {
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

// Fade Animation
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  {
    threshold: 0.15,
  }
);

document
  .querySelectorAll(
    ".coin-card,.service-card,.vip-card,.update-card,.contact-card,.banner-box"
  )
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "0.8s";
    observer.observe(el);
  });

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// Welcome Message
console.log("SPM TOP AGENCY Premium Website Loaded Successfully 🚀");
