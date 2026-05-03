(function () {
"use strict";

const WormXoSelector = {

storageKey:"WORMXO_SELECTED_SCRIPT",

scripts:{
wormworld:"https://wormxo.store/js/wormworld.js",
timmap:"https://wormxo.store/js/timmap.js"
},

init(){

const selected=localStorage.getItem(this.storageKey);

if(selected&&this.isValidScript(selected)){
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

isValidScript(url){
return Object.values(this.scripts).includes(url);
},

lockPage(){
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
document.head.appendChild(s);
},

/* ================= BACKGROUND COLORS ================= */

createAnimatedCircles(){

const container=document.createElement("div");
container.id="wormxo-circles-container";

const colors=[
{c1:"#0daf4b",c2:"#16c8e7",size:"65vw",top:"-15%",left:"-20%",dur:80},
{c1:"#6b6a10",c2:"#545523",size:"70vw",bottom:"-20%",right:"-15%",dur:85},
{c1:"#f709ff",c2:"#d400ff",size:"60vw",top:"40%",left:"30%",dur:75},
{c1:"#09c2fa",c2:"#15c02c",size:"68vw",bottom:"5%",left:"-25%",dur:90}
];

colors.forEach(color=>{

const circle=document.createElement("div");

let pos="";
if(color.top)pos+=`top:${color.top};`;
if(color.bottom)pos+=`bottom:${color.bottom};`;
if(color.left)pos+=`left:${color.left};`;
if(color.right)pos+=`right:${color.right};`;

circle.style.cssText=`
position:absolute;
${pos}
width:${color.size};
height:${color.size};
border-radius:50%;
background:radial-gradient(circle at 30% 30%,${color.c1},${color.c2});
filter:blur(120px);
opacity:.65;
animation:wormxoColorSwap ${color.dur}s infinite ease-in-out;
`;

container.appendChild(circle);

});

document.body.appendChild(container);
},

/* ================= SNOW ORBIT ================= */

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

/* 9 SNOW PIECES */
for(let i=0;i<9;i++){

const piece=document.createElement("div");

const size=60+Math.random()*25;
const duration=60+Math.random()*20;
const delay=i*1.2;

piece.style.cssText=`
position:absolute;
top:50%;
left:50%;
width:${size}px;
height:${size}px;
background:url('${img}') center/contain no-repeat;
transform-origin:-48vw center;
animation:wormxoSnowOrbit ${duration}s linear infinite;
animation-delay:${delay}s;
opacity:.9;
filter:none;
`;

container.appendChild(piece);
}

/* ORBIT + SELF ROTATION */
const style=document.createElement("style");
style.textContent=`

@keyframes wormxoSnowOrbit{

0%{
transform:
rotate(0deg)
translateX(48vw)
rotate(0deg)
scale(.9);
}

50%{
transform:
rotate(180deg)
translateX(48vw)
rotate(-360deg)
scale(1.15);
}

100%{
transform:
rotate(360deg)
translateX(48vw)
rotate(-720deg)
scale(.9);
}

}

/* COLOR SWAP SLOW MOVEMENT */

@keyframes wormxoColorSwap{

0%{transform:translate(0,0) scale(1);}
25%{transform:translate(6%,4%) scale(1.05);}
50%{transform:translate(-5%,7%) scale(.97);}
75%{transform:translate(4%,-6%) scale(1.03);}
100%{transform:translate(0,0) scale(1);}

}

#wormxo-circles-container{
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:#0a0a1a;
overflow:hidden;
pointer-events:none;
z-index:1;
}

`;

document.head.appendChild(style);
},

/* ================= UI ================= */

render(){

const root=document.createElement("div");
root.id="wormxo-select-root";

root.innerHTML=`
<div class="wormxo-card">
<img src="https://wormxo.store/image/wxo.png" class="wormxo-logo">
<h1>WormXo</h1>

<button class="wormxo-btn" data-script="wormworld">🌍 WORM WORLD</button>
<button class="wormxo-btn" data-script="timmap">🗺️ TIM MAP</button>

</div>
`;

document.body.appendChild(root);
},

bindEvents(){

document.querySelectorAll(".wormxo-btn").forEach(btn=>{
btn.onclick=()=>{
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

.wormxo-card{text-align:center;}

.wormxo-logo{
width:180px;
margin-bottom:20px;
animation:floatLogo 4s ease-in-out infinite;
}

.wormxo-btn{
display:block;
margin:12px auto;
padding:14px 26px;
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

@keyframes floatLogo{
0%,100%{transform:translateY(0);}
50%{transform:translateY(-12px);}
}

`;

document.head.appendChild(style);
}

};

WormXoSelector.init();

})();