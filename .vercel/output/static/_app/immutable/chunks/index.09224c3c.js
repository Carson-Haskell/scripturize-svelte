import{m as c}from"./scheduler.fa0b062a.js";function d(n){const t=n-1;return t*t*t+1}function U(n,{delay:t=0,duration:a=400,easing:e=d,x:i=0,y:f=0,opacity:u=0}={}){const o=getComputedStyle(n),s=+o.opacity,m=o.transform==="none"?"":o.transform,y=s*(1-u),[l,p]=c(i),[$,x]=c(f);return{delay:t,duration:a,easing:e,css:(r,_)=>`
			transform: ${m} translate(${(1-r)*l}${p}, ${(1-r)*$}${x});
			opacity: ${s-y*_}`}}export{U as f};
