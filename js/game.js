(function () {
"use strict";

const WormXoSelector = {

storageKey: "WORMXO_SELECTED_SCRIPT",

scripts: {
wormworld: "https://wormxo.store/js/wormworld.js",
timmap: "https://wormxo.store/js/timmap.js"
},

init() {

const selected = localStorage.getItem(this.storageKey);

if (selected && this.isValidScript(selected)) {
this.loadSelected(selected);
return;
}

this.lockPage();
this.injectStyle();
this.injectCircleStyles();
this.createAnimatedCircles();
this.createConfettiPieces();
this.render();
this.bindEvents();
},

isValidScript(url) {
return Object.values(this.scripts).includes(url);
},

lockPage() {
document.documentElement.style.overflow="hidden";
document.body.style.overflow="hidden";
document.body.innerHTML="";
},

selectScript(url){
localStorage.setItem(this.storageKey,url);
window.location.reload();
},

loadSelected(url){
const s=document.createElement("script");
s.src=url+"?v="+Date.now();
s.async=false;
document.head.appendChild(s);
},

/* ================= CIRCLES ================= */

createAnimatedCircles(){

const container=document.createElement("div");
container.id="wormxo-circles-container";

const colors=[
{color1:"#0daf4b",color2:"#16c8e7",size:"65vw",top:"-15%",left:"-20%",duration:45},
{color1:"#6b6a10",color2:"#545523",size:"70vw",bottom:"-20%",right:"-15%",duration:50},
{color1:"#f709ff",color2:"#d400ff",size:"60vw",top:"40%",left:"30%",duration:48},
{color1:"#09c2fa",color2:"#15c02c",size:"68vw",bottom:"5%",left:"-25%",duration:52}
];

colors.forEach(c=>{
const div=document.createElement("div");

let pos="";
if(c.top)pos+=`top:${c.top};`;
if(c.bottom)pos+=`bottom:${c.bottom};`;
if(c.left)pos+=`left:${c.left};`;
if(c.right)pos+=`right:${c.right};`;

div.style.cssText=`
position:absolute;
${pos}
width:${c.size};
height:${c.size};
border-radius:50%;
background:radial-gradient(circle at 30% 30%,${c.color1},${c.color2});
animation:wormxoFloatRotate ${c.duration}s infinite ease-in-out;
opacity:.55;
filter:none;
`;

container.appendChild(div);
});

document.body.appendChild(container);

document.addEventListener("mousemove",e=>{
const x=(e.clientX/window.innerWidth-.5)*12;
const y=(e.clientY/window.innerHeight-.5)*8;
container.style.transform=`translate(${x}px,${y}px)`;
});

},

/* ================= CONFETTI ================= */

createConfettiPieces(){

const container=document.createElement("div");
container.id="wormxo-confetti-container";

container.style.cssText=`
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
pointer-events:none;
z-index:25;
`;

document.body.appendChild(container);

const img="https://timmapwormate.com/images/store/confetti-tmw.png";

for(let i=0;i<8;i++){

const piece=document.createElement("div");

const size=60+Math.random()*25;
const duration=25+Math.random()*10;
const delay=i*.6;

piece.style.cssText=`
position:absolute;
left:${Math.random()*100}%;
top:${Math.random()*100}%;
width:${size}px;
height:${size}px;
background:url('${img}') center/contain no-repeat;
animation:wormxoConfettiFloat ${duration}s infinite linear;
animation-delay:${delay}s;
opacity:.85;
`;

piece.style.setProperty('--rotate-dir',i%2?1:-1);
piece.style.setProperty('--scale-min',0.8);
piece.style.setProperty('--scale-max',1.25);

container.appendChild(piece);
}

/* ORBIT ANIMATION */
const style=document.createElement("style");
style.textContent=`

@keyframes wormxoConfettiFloat{

0%{
transform:
rotate(0deg)
translateX(6vw)
rotate(0deg)
scale(var(--scale-min));
opacity:.7;
}

50%{
transform:
rotate(180deg)
translateX(6vw)
rotate(calc(-180deg * var(--rotate-dir)))
scale(var(--scale-max));
opacity:1;
}

100%{
transform:
rotate(360deg)
translateX(6vw)
rotate(calc(-360deg * var(--rotate-dir)))
scale(var(--scale-min));
opacity:.7;
}

}

#wormxo-confetti-container{
filter:none;
}
`;

document.head.appendChild(style);

},

/* ================= STYLES ================= */

injectCircleStyles(){

const style=document.createElement("style");

style.textContent=`

#wormxo-circles-container{
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:#0a0a1a;
z-index:1;
overflow:hidden;
pointer-events:none;
}

@keyframes wormxoFloatRotate{
0%,100%{transform:translate(0,0) scale(1);}
50%{transform:translate(3%,4%) scale(1.04);}
}

`;

document.head.appendChild(style);
},

render(){

const root=document.createElement("div");
root.id="wormxo-select-root";

root.innerHTML=`
<div class="wormxo-card">

<img src="https://wormxo.store/image/wxo.png" class="wormxo-logo">

<h1>WormXo</h1>

<button class="wormxo-btn" data-script="wormworld">
🌍 WORM WORLD
</button>

<button class="wormxo-btn" data-script="timmap">
🗺️ TIM MAP
</button>

</div>
`;

document.body.appendChild(root);
},

bindEvents(){

document.querySelectorAll(".wormxo-btn").forEach(btn=>{

btn.onclick=e=>{

const key=btn.dataset.script;
const url=this.scripts[key];
if(!url)return;

btn.textContent="LOADING...";
this.selectScript(url);
};

});

},

injectStyle(){

const style=document.createElement("style");

style.textContent=`

#wormxo-select-root{
position:fixed;
inset:0;
z-index:9999;
display:flex;
justify-content:center;
align-items:center;
font-family:Segoe UI;
}

.wormxo-card{
text-align:center;
}

.wormxo-logo{
width:180px;
margin-bottom:20px;
}

.wormxo-btn{
display:block;
margin:10px auto;
padding:14px 25px;
font-size:18px;
border-radius:12px;
border:none;
cursor:pointer;
background:#ff8c00;
color:#fff;
font-weight:bold;
transition:.2s;
}

.wormxo-btn:hover{
transform:scale(1.05);
background:#fff;
color:#ff8c00;
}

`;

document.head.appendChild(style);
}

};

WormXoSelector.init();

})();