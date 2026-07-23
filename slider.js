// ==========================
// SPM TOP AGENCY HERO SLIDER
// ==========================

const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".slider-dot");

let current = 0;

function showSlide(index){

slides.forEach((slide,i)=>{

slide.classList.toggle("active",i===index);

});

dots.forEach((dot,i)=>{

dot.classList.toggle("active",i===index);

});

current=index;

}

function nextSlide(){

let next=current+1;

if(next>=slides.length){

next=0;

}

showSlide(next);

}

let slider=setInterval(nextSlide,5000);

dots.forEach((dot,index)=>{

dot.addEventListener("click",()=>{

clearInterval(slider);

showSlide(index);

slider=setInterval(nextSlide,5000);

});

});
