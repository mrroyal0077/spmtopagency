// ===============================
// SPM TOP AGENCY - AI PARTICLES
// ===============================

const particleContainer = document.createElement("div");
particleContainer.id = "particles";
document.body.appendChild(particleContainer);

for(let i=0;i<120;i++){

const p=document.createElement("span");

p.className="particle";

p.style.left=Math.random()*100+"vw";
p.style.top=Math.random()*100+"vh";

const size=2+Math.random()*6;

p.style.width=size+"px";
p.style.height=size+"px";

p.style.animationDuration=(8+Math.random()*15)+"s";
p.style.animationDelay=Math.random()*10+"s";

particleContainer.appendChild(p);

}
