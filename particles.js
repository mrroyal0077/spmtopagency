/* =========================================
   SPM TOP AGENCY V4 - PARTICLES
========================================= */

const bg = document.querySelector(".bg-animation");

if (bg) {

  for (let i = 0; i < 40; i++) {

    const particle = document.createElement("span");

    particle.classList.add("particle");

    particle.style.left = Math.random() * 100 + "%";

    particle.style.top = Math.random() * 100 + "%";

    particle.style.width = (4 + Math.random() * 8) + "px";

    particle.style.height = particle.style.width;

    particle.style.animationDuration = (8 + Math.random() * 10) + "s";

    particle.style.animationDelay = (Math.random() * 5) + "s";

    bg.appendChild(particle);

  }

}
