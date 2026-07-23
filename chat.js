/*=========================================
 SPM TOP AGENCY V4
 Live Chat (WhatsApp)
=========================================*/

const chatBtn = document.getElementById("chatButton");

if (chatBtn) {

  chatBtn.addEventListener("click", () => {

    const message = encodeURIComponent(
      "Hello SPM TOP AGENCY, I need information about Coin Recharge / VIP Upgrade."
    );

    window.open(
      "https://wa.me/919039812174?text=" + message,
      "_blank"
    );

  });

}
