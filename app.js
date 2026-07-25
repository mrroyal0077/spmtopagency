/* ==========================================
   SPM AI - App.js
   Part 1
========================================== */

"use strict";

/* ==========================================
   Loader
========================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");
    const website = document.getElementById("website");

    setTimeout(() => {

        if (loader) {

            loader.style.display = "none";

        }

        if (website) {

            website.style.display = "block";

        }

    }, 1500);

});

/* ==========================================
   Smooth Scroll
========================================== */

const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth",
                block: "start"

            });

        }

    });

});

/* ==========================================
   Sticky Header
========================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 80) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});

/* ==========================================
   Coin Calculator
========================================== */

const calculator = document.querySelector("#calculator");
const amountInput = calculator?.querySelector('input[type="number"]');
const coinInput = calculator?.querySelector('input[readonly]');
const calculateButton = calculator?.querySelector("button");

function calculateCoins() {

    if (!amountInput || !coinInput) return;

    const amount = Number(amountInput.value);

    if (!amount || amount <= 0) {

        coinInput.value = "";

        return;

    }

    const coins = amount * 12.6;

    coinInput.value = `${coins.toLocaleString()} Coins`;

}

calculateButton?.addEventListener("click", calculateCoins);

/* ==========================================
   Counter Animation
========================================== */

function animateCounter(element, endValue) {

    let current = 0;

    const speed = Math.max(10, Math.floor(endValue / 100));

    const timer = setInterval(() => {

        current += speed;

        if (current >= endValue) {

            current = endValue;

            clearInterval(timer);

        }

        element.textContent = current.toLocaleString();

    }, 20);

}

/* ==========================================
   Statistics
========================================== */

const totalUsers = document.getElementById("totalUsers");
const todayRecharge = document.getElementById("todayRecharge");
const vipMembers = document.getElementById("vipMembers");
const onlineUsers = document.getElementById("onlineUsers");

if (totalUsers) animateCounter(totalUsers, 25840);

if (todayRecharge) animateCounter(todayRecharge, 865);

if (vipMembers) animateCounter(vipMembers, 3210);

if (onlineUsers) animateCounter(onlineUsers, 428);

/* ==========================================
   Visitor Counter
========================================== */

const visitorCount = document.getElementById("visitorCount");

if (visitorCount) {

    animateCounter(visitorCount, 158942);

}
/* ==========================================
   Mobile Navigation
========================================== */

const menuButton = document.getElementById("menuButton");
const navigation = document.querySelector("nav ul");

if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {

        navigation.classList.toggle("active");

    });

}

/* ==========================================
   Scroll Reveal Animation
========================================== */

const revealItems = document.querySelectorAll(

    "section, article, .about-card, .contact-card"

);

function revealOnScroll() {

    revealItems.forEach(item => {

        const top = item.getBoundingClientRect().top;

        const visible = window.innerHeight - 100;

        if (top < visible) {

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/* ==========================================
   Active Navigation
========================================== */

const sections = document.querySelectorAll("section");

const menuLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        const height = section.offsetHeight;

        if (window.scrollY >= top &&
            window.scrollY < top + height) {

            current = section.getAttribute("id");

        }

    });

    menuLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/* ==========================================
   Language Switch
========================================== */

const languageButtons = document.querySelectorAll(

    ".language-grid button"

);

languageButtons.forEach(button => {

    button.addEventListener("click", () => {

        languageButtons.forEach(item => {

            item.classList.remove("selected");

        });

        button.classList.add("selected");

    });

});

/* ==========================================
   AI Chat Demo
========================================== */

const chatForm = document.getElementById("chatForm");

const chatInput = document.getElementById("chatInput");

const chatMessages = document.getElementById("chatMessages");

if (chatForm && chatInput && chatMessages) {

    chatForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const text = chatInput.value.trim();

        if (!text) return;

        const userMessage = document.createElement("div");

        userMessage.className = "chat-message user";

        userMessage.innerHTML = `

<h4>You</h4>

<p>${text}</p>

`;

        chatMessages.appendChild(userMessage);

        chatInput.value = "";

        chatMessages.scrollTop = chatMessages.scrollHeight;

        setTimeout(() => {

            const aiMessage = document.createElement("div");

            aiMessage.className = "chat-message ai";

            aiMessage.innerHTML = `

<h4>SPM AI</h4>

<p>

Thank you for contacting SPM AI.

Our support team will assist you shortly.

</p>

`;

            chatMessages.appendChild(aiMessage);

            chatMessages.scrollTop = chatMessages.scrollHeight;

        }, 1000);

    });

}
/* ==========================================
   Countdown Timer
========================================== */

const countdownElement = document.getElementById("countdown");

if (countdownElement) {

    const targetDate = new Date("December 31, 2026 23:59:59").getTime();

    function updateCountdown() {

        const now = new Date().getTime();

        const distance = targetDate - now;

        if (distance <= 0) {

            countdownElement.innerHTML = "Event Started";

            return;

        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML =

            `${days}d ${hours}h ${minutes}m ${seconds}s`;

    }

    updateCountdown();

    setInterval(updateCountdown, 1000);

}

/* ==========================================
   Live Clock
========================================== */

const liveClock = document.getElementById("liveClock");

function updateClock() {

    if (!liveClock) return;

    const now = new Date();

    liveClock.textContent = now.toLocaleTimeString();

}

updateClock();

setInterval(updateClock, 1000);

/* ==========================================
   Theme Switch
========================================== */

const themeButton = document.getElementById("themeToggle");

themeButton?.addEventListener("click", () => {

    document.body.classList.toggle("light-theme");

});

/* ==========================================
   Back To Top
========================================== */

const topButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (!topButton) return;

    if (window.scrollY > 400) {

        topButton.classList.add("show");

    } else {

        topButton.classList.remove("show");

    }

});

topButton?.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ==========================================
   Toast Notification
========================================== */

function showToast(message) {

    const toast = document.createElement("div");

    toast.className = "toast";

    toast.textContent = message;

    document.body.appendChild(toast);

    setTimeout(() => {

        toast.classList.add("show");

    }, 100);

    setTimeout(() => {

        toast.classList.remove("show");

        setTimeout(() => {

            toast.remove();

        }, 400);

    }, 3000);

}

/* Demo */

setTimeout(() => {

    showToast("Welcome to SPM AI");

}, 2000);
/* ==========================================
   Particle Background
========================================== */

const particleContainer = document.getElementById("particles");

if (particleContainer) {

    for (let i = 0; i < 40; i++) {

        const particle = document.createElement("span");

        particle.className = "particle";

        particle.style.left = Math.random() * 100 + "%";
        particle.style.top = Math.random() * 100 + "%";

        particle.style.animationDuration =
            5 + Math.random() * 10 + "s";

        particle.style.animationDelay =
            Math.random() * 5 + "s";

        particleContainer.appendChild(particle);

    }

}

/* ==========================================
   Mouse Glow Effect
========================================== */

const mouseGlow = document.getElementById("mouseGlow");

document.addEventListener("mousemove", (event) => {

    if (!mouseGlow) return;

    mouseGlow.style.left = event.clientX + "px";
    mouseGlow.style.top = event.clientY + "px";

});

/* ==========================================
   Hero Parallax
========================================== */

const heroImage = document.querySelector(".hero-right img");

window.addEventListener("scroll", () => {

    if (!heroImage) return;

    const offset = window.scrollY * 0.2;

    heroImage.style.transform =
        `translateY(${offset}px)`;

});

/* ==========================================
   Auto Number Counter
========================================== */

const autoCounters = document.querySelectorAll("[data-counter]");

autoCounters.forEach(counter => {

    const target = Number(counter.dataset.counter);

    let current = 0;

    const increment = Math.max(1, Math.ceil(target / 100));

    const timer = setInterval(() => {

        current += increment;

        if (current >= target) {

            current = target;

            clearInterval(timer);

        }

        counter.textContent = current.toLocaleString();

    }, 20);

});

/* ==========================================
   Online / Offline Detection
========================================== */

function updateConnectionStatus() {

    if (navigator.onLine) {

        showToast("Internet Connected");

    } else {

        showToast("Internet Disconnected");

    }

}

window.addEventListener("online", updateConnectionStatus);

window.addEventListener("offline", updateConnectionStatus);

/* ==========================================
   Current Year
========================================== */

const copyrightYear = document.getElementById("copyrightYear");

if (copyrightYear) {

    copyrightYear.textContent =
        new Date().getFullYear();

}

/* ==========================================
   Page Visibility
========================================== */

document.addEventListener("visibilitychange", () => {

    if (document.hidden) {

        console.log("User Left Website");

    } else {

        console.log("User Returned");

    }

});
/* ==========================================
   Contact Form Validation
========================================== */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const inputs = contactForm.querySelectorAll(

            "input, textarea"

        );

        let valid = true;

        inputs.forEach(input => {

            if (input.value.trim() === "") {

                valid = false;

                input.focus();

            }

        });

        if (!valid) {

            showToast("Please fill all fields.");

            return;

        }

        showToast("Message Sent Successfully.");

        contactForm.reset();

    });

}

/* ==========================================
   Recharge Form Validation
========================================== */

const rechargeForm = document.getElementById("rechargeForm");

if (rechargeForm) {

    rechargeForm.addEventListener("submit", function (event) {

        event.preventDefault();

        showToast("Recharge request submitted.");

        rechargeForm.reset();

    });

}

/* ==========================================
   Copy Text Helper
========================================== */

function copyText(text) {

    navigator.clipboard.writeText(text)

        .then(() => {

            showToast("Copied Successfully");

        })

        .catch(() => {

            showToast("Copy Failed");

        });

}

/* ==========================================
   WhatsApp Channel
========================================== */

const whatsappButton = document.getElementById("joinWhatsapp");

whatsappButton?.addEventListener("click", () => {

    window.open(

        "https://whatsapp.com/channel/0029VbAyICF0rGiUGHjnkH34",

        "_blank"

    );

});

/* ==========================================
   YOYO Download
========================================== */

const downloadButton = document.getElementById("downloadYoyo");

downloadButton?.addEventListener("click", () => {

    window.open(

        "https://play.google.com/store/apps/details?id=com.fun.share",

        "_blank"

    );

});

/* ==========================================
   Performance
========================================== */

window.addEventListener("load", () => {

    if ("requestIdleCallback" in window) {

        requestIdleCallback(() => {

            console.log("Background tasks completed.");

        });

    }

});

/* ==========================================
   Global Error Handler
========================================== */

window.addEventListener("error", (event) => {

    console.error(

        "Application Error:",

        event.message

    );

});

/* ==========================================
   Welcome
========================================== */

console.log(

    "SPM AI Loaded Successfully"

);
