/*=========================================
 SPM TOP AGENCY V4
 Visitor Counter (Demo)
=========================================*/

// Total Visitors
let total = localStorage.getItem("spm_total_visitors");

if (!total) {
    total = 1000;
}

total++;

localStorage.setItem("spm_total_visitors", total);

const visitor = document.getElementById("visitorCount");

if (visitor) {

    let count = 0;

    const counter = setInterval(() => {

        count += Math.ceil(total / 80);

        if (count >= total) {

            count = total;

            clearInterval(counter);

        }

        visitor.innerHTML = count.toLocaleString();

    }, 25);

}

// Online Users (Random Demo)

const online = document.getElementById("onlineUsers");

if (online) {

    online.innerHTML = Math.floor(Math.random() * 40) + 10;

}
