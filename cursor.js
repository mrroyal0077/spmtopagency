// ==========================
// AI CURSOR
// ==========================

const cursor=document.createElement("div");
cursor.className="ai-cursor";

document.body.appendChild(cursor);

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";

});

document.querySelectorAll("a,button,.coin-card,.vip-card,.contact-card").forEach(item=>{

item.addEventListener("mouseenter",()=>{

cursor.classList.add("cursor-hover");

});

item.addEventListener("mouseleave",()=>{

cursor.classList.remove("cursor-hover");

});

});
