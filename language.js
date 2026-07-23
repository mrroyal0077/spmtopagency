// ==========================
// SPM LANGUAGE ENGINE
// ==========================

const translations = {

en:{
home:"Home",
coins:"Coin Recharge",
vip:"VIP Upgrade",
contact:"Contact",
welcome:"Welcome to SPM TOP AGENCY"
},

hi:{
home:"होम",
coins:"कॉइन रिचार्ज",
vip:"VIP अपग्रेड",
contact:"संपर्क",
welcome:"SPM TOP AGENCY में आपका स्वागत है"
},

pa:{
home:"ਮੁੱਖ ਪੰਨਾ",
coins:"ਕੋਇਨ ਰੀਚਾਰਜ",
vip:"VIP ਅਪਗ੍ਰੇਡ",
contact:"ਸੰਪਰਕ",
welcome:"SPM TOP AGENCY ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ"
}

};

const selector = document.getElementById("language");

if(selector){

selector.addEventListener("change",()=>{

const lang = translations[selector.value];

document.querySelector("[data-home]").textContent = lang.home;
document.querySelector("[data-coins]").textContent = lang.coins;
document.querySelector("[data-vip]").textContent = lang.vip;
document.querySelector("[data-contact]").textContent = lang.contact;
document.querySelector("[data-welcome]").textContent = lang.welcome;

});

}
