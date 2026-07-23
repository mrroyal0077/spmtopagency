/*=========================================
 SPM TOP AGENCY
 Language Switcher
=========================================*/

const languageData = {

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
vip:"वीआईपी अपग्रेड",
contact:"संपर्क करें",
welcome:"SPM TOP AGENCY में आपका स्वागत है"
},

pa:{
home:"ਮੁੱਖ ਪੰਨਾ",
coins:"ਕੋਇਨ ਰੀਚਾਰਜ",
vip:"VIP ਅੱਪਗ੍ਰੇਡ",
contact:"ਸੰਪਰਕ",
welcome:"SPM TOP AGENCY ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ"
}

};

const selector = document.getElementById("languageSelect");

if(selector){

selector.addEventListener("change",()=>{

const lang = languageData[selector.value];

document.getElementById("navHome").innerHTML = lang.home;
document.getElementById("navCoins").innerHTML = lang.coins;
document.getElementById("navVip").innerHTML = lang.vip;
document.getElementById("navContact").innerHTML = lang.contact;
document.getElementById("heroTitle").innerHTML = lang.welcome;

});

}
