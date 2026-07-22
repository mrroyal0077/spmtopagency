/*====================================
 SPM TOP AGENCY
 Dynamic Updates System
====================================*/

// ===== Latest Updates =====
const latestUpdates = [
  {
    title: "🔥 New Event",
    message: "Latest agency events and offers will appear here."
  },
  {
    title: "🪙 Coin Rate Update",
    message: "Updated coin prices will be posted here."
  },
  {
    title: "👑 VIP Upgrade",
    message: "Premium VIP Upgrade is available 24/7."
  },
  {
    title: "📤 Paid Sending",
    message: "Daily paid sending updates available."
  }
];

// ===== Coin Rates =====
const coinRates = [
  { amount: "₹100", coins: "1260 Coins" },
  { amount: "₹200", coins: "2520 Coins" },
  { amount: "₹300", coins: "3780 Coins" },
  { amount: "₹500", coins: "6300 Coins" },
  { amount: "₹1000", coins: "12600 Coins" },
  { amount: "₹3000", coins: "37800 Coins" },
  { amount: "₹5000", coins: "63000 Coins" },
  { amount: "₹10000", coins: "126000 Coins" }
];

// ===== Render Latest Updates =====
const updatesContainer = document.getElementById("updates-container");

if (updatesContainer) {
  updatesContainer.innerHTML = "";

  latestUpdates.forEach(update => {
    updatesContainer.innerHTML += `
      <div class="update-card">
        <h3>${update.title}</h3>
        <p>${update.message}</p>
      </div>
    `;
  });
}

// ===== Console =====
console.log("Updates loaded successfully ✅");
