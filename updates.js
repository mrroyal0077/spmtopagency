/*=========================================
 SPM TOP AGENCY V4
 Official Updates
=========================================*/

const updates = [

{
title:"🎉 Welcome",
date:"Today",
text:"Welcome to SPM TOP AGENCY Official Website."
},

{
title:"🪙 Coin Recharge",
date:"24/7",
text:"Coin Recharge Available 24 Hours."
},

{
title:"💎 VIP Upgrade",
date:"Latest",
text:"VIP Upgrade & VIP New ID Available."
},

{
title:"📢 Official Announcement",
date:"Update",
text:"Join our WhatsApp Channel for all latest news."
}

];

const container = document.getElementById("updatesContainer");

if(container){

updates.forEach(item=>{

container.innerHTML += `

<div class="update-card">

<h3>${item.title}</h3>

<small>${item.date}</small>

<p>${item.text}</p>

</div>

`;

});

}
