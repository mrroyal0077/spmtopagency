/*=========================================
 SPM TOP AGENCY V4
 Premium Banner Slider
=========================================*/

const banners = [
    "banner1.jpg",
    "banner2.jpg",
    "banner3.jpg"
];

const banner = document.getElementById("bannerImage");

let currentBanner = 0;

function changeBanner(){

    if(!banner) return;

    banner.style.opacity = "0";

    setTimeout(()=>{

        currentBanner++;

        if(currentBanner >= banners.length){

            currentBanner = 0;

        }

        banner.src = banners[currentBanner];

        banner.style.opacity = "1";

    },400);

}

setInterval(changeBanner,4000);
