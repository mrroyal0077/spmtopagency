/*=========================================
 SPM TOP AGENCY
 Breaking News Ticker
=========================================*/

const news = [
"🎉 Coin Recharge Available 24/7",
"💎 VIP Upgrade & New VIP ID Available",
"🔥 Paid Sending Service Open",
"📢 Join Our Official WhatsApp Channel",
"⭐ Welcome to SPM TOP AGENCY 100857"
];

const ticker = document.getElementById("newsTicker");

if (ticker) {

let i = 0;

ticker.innerHTML = news[0];

setInterval(() => {

i++;

if (i >= news.length) i = 0;

ticker.style.opacity = "0";

setTimeout(() => {

ticker.innerHTML = news[i];

ticker.style.opacity = "1";

},300);

},4000);

}
