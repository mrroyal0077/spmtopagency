// ======================================
// SPM TOP AGENCY - Latest Updates
// ======================================

const updates = [

{
title: "🔥 Welcome",
date: "July 2026",
text: "Welcome to SPM TOP AGENCY Official Website."
},

{
title: "🪙 Coin Recharge",
date: "24/7",
text: "Coin Recharge Service Available 24 Hours."
},

{
title: "👑 VIP Upgrade",
date: "Available",
text: "Fast VIP Upgrade with Trusted Service."
},

{
title: "🤝 Join Agency",
date: "Open",
text: "Join SPM TOP AGENCY Today."
}

];

const container = document.getElementById("updates-container");

if(container){

container.innerHTML = "";

updates.forEach(update=>{

container.innerHTML += `

<div class="card">

<h3>${update.title}</h3>

<p><strong>${update.date}</strong></p>

<p>${update.text}</p>

</div>

`;

});

}

console.log("Latest Updates Loaded");
