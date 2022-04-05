var z=Object.defineProperty,j=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var w=(e,t,r)=>t in e?z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))N.call(t,r)&&w(e,r,t[r]);if(k)for(var r of k(t))$.call(t,r)&&w(e,r,t[r]);return e},x=(e,t)=>j(e,E(t));import{c as C,j as l,F as W,a as o,B as L,C as _,b as h,M as b,d as M,e as B,f as I,g as Y,I as S,T as R,h as H,r as q,u as T,i as K,A as X,k as G,R as J,l as Q}from"./vendor.4551a386.js";const U=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const p of i.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}};U();const Z=C(),f={1:"1.5px 1.5px 0px #000",2:"4px 4px 0px #000"},g={1:"1px 1px 0px #000",2:"3px 3px 0px #000"},c=C({palette:{primary:{main:"#B7E879",dark:"#83C134"},secondary:{main:"#8DE2DB",dark:"#3FAAA1"},info:{main:"#F2E391",dark:"#CDB84A"}},shadows:{1:g[1],2:g[2]},typography:{fontFamily:"Red Hat Mono, monospace",color:"white",h1:{fontFamily:"Yesteryear, cursive",fontSize:"5rem",WebkitTextStroke:"2.5px #000",textShadow:f[2]},h2:{fontFamily:"Yesteryear, cursive",fontSize:"3.5rem",WebkitTextStroke:"1.5px #000",textShadow:f[2]},h3:{fontSize:"2.7rem",fontWeight:700,WebkitTextStroke:"2.5px #000",textShadow:f[2]},h4:{fontSize:"2.2rem",fontWeight:700,WebkitTextStroke:"2px #000",textShadow:f[2]}},components:{MuiButton:{styleOverrides:{root:{borderRadius:0,border:"3px solid #000",boxShadow:g[2],fontWeight:"bold",fontSize:"1rem","&:hover":{boxShadow:g[1]}}}},MuiContainer:{styleOverrides:{root:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center",gap:Z.spacing(3)}}}}});function ee({isStarted:e,showStart:t,timerProgress:r,timerString:s,handleStart:a,handlePause:i,handleNext:p}){return l(W,{children:[o(L,{sx:{width:240},children:o(_,{value:e?r:100,maxValue:100,text:s,strokeWidth:10,counterClockwise:!0,background:!0,styles:{root:{overflow:"visible"},background:{fill:"var(--cream-color)",stroke:"black",strokeWidth:"14px",r:"45"},text:{textShadow:c.shadows[2],fill:c.palette.primary.main,paintOrder:"stroke",stroke:"black",strokeWidth:"3px",fontWeight:"bold",fontSize:"1.1rem",transform:"translateY(2px)"},path:{strokeLinecap:"butt",stroke:c.palette.primary.main},trail:{stroke:"var(--cream-color)",filter:"drop-shadow(4px 4px 0 black)"}}})}),l(h,{sx:{justifyContent:"center",gap:2},children:[t?l(b,{variant:"contained",onClick:a,children:["Resume ",o(M,{})]}):l(b,{variant:"contained",onClick:i,children:["Pause ",o(B,{})]}),l(b,{variant:"contained",onClick:p,children:["Next ",o(I,{})]})]})]})}var te="/standup-timer/assets/total-time.91b91273.svg";function F({imgSrc:e,tilted:t}){return o(Y,{sx:{width:"8rem",transform:t?"translateX(-50px) rotate(350deg)":"none"},children:o(S,{src:e,duration:0,style:{filter:"drop-shadow(2px 2px 0 black)"}})})}function re({totalTimeString:e}){return l(h,{sx:{flexDirection:"column",gap:1,padding:"2rem",backgroundColor:c.palette.secondary.main,borderWidth:"6px",borderStyle:"dashed",borderColor:c.palette.secondary.dark,borderRadius:"24px"},children:[o(F,{imgSrc:te,tilted:!0}),o(R,{variant:"h3",children:e})]})}var oe="/standup-timer/assets/per-person.be06b5c3.svg";function ae({timeList:e}){return l(h,{sx:{flexDirection:"column",gap:1,padding:"2rem 2rem 4rem",backgroundColor:c.palette.info.main,borderWidth:"6px",borderStyle:"dashed",borderColor:c.palette.info.dark,borderRadius:"24px"},children:[o(F,{imgSrc:oe,tilted:!0}),e.map((t,r)=>o(R,{variant:"h4",children:t},r+"-"+t))]})}const se={play:M,pause:B,next:I,reset:H};function v({text:e,handleFunction:t,iconType:r}){const s=se[r];return l(b,{variant:"contained",onClick:t,children:[e," ",o(s,{})]})}var ie="/standup-timer/assets/standup-timer.973e3468.svg",ne="/standup-timer/assets/start-time.58cda0c0.svg";function de(){const[e,t]=q.exports.useState({startTime:30,showStart:!0,isStarted:!1,timeList:[]}),[r]=T(),[s]=T(),a=n=>{let d=n,u=0;for(;d>59;)d-=60,u+=1;return u<10&&(u="0"+u),d<10&&(d="0"+d),u+":"+d},i=n=>{let[d,u]=n.split(":");for(d=parseInt(d),u=parseInt(u);d>0;)u+=60,d-=1;return u},p=()=>{const n=[];for(let d=1;d<61;d++)n.push({label:a(d*30)});return n},D=n=>Math.round(n/e.startTime*100),P=n=>{n.preventDefault(),t(x(m({},e),{startTime:i(n.target.innerHTML)}))},y=()=>{s.start({countdown:!0,startValues:{seconds:e.startTime}}),r.start(),t(x(m({},e),{showStart:!1,isStarted:!0}))},A=()=>{s.pause(),r.pause(),t(x(m({},e),{showStart:!0}))},O=()=>{s.pause(),r.pause();const n=Math.round(e.startTime-s.getTotalTimeValues().seconds);t(x(m({},e),{showStart:!1,timeList:[...e.timeList,a(n)]})),s.reset(),r.start()},V=()=>{s.reset(),s.stop(),r.reset(),r.stop(),t(x(m({},e),{showStart:!0,isStarted:!1,timeList:[]}))};return l(K,{theme:c,children:[o(L,{mt:6,mx:"auto",sx:{width:"28rem"},children:o(S,{src:ie,duration:0,style:{filter:"drop-shadow(4px 4px 0 black)"}})}),o(h,{sx:{alignItems:"flex-start",color:"var(--cream-color)",margin:"3rem auto",gap:0},children:e.isStarted?l(W,{children:[l(h,{sx:{flexDirection:"column",flexBasis:"50%"},children:[o(ee,{isStarted:e.isStarted,showStart:e.showStart,timerProgress:D(s.getTotalTimeValues().seconds),timerString:s.getTimeValues().toString(["minutes","seconds"]),handleStart:y,handlePause:A,handleNext:O}),o(v,{text:"Reset",handleFunction:V,iconType:"reset"})]}),l(h,{sx:{flexDirection:"column",flexBasis:"50%"},children:[o(re,{totalTimeString:r.getTimeValues().toString(["minutes","seconds"])}),o(ae,{timeList:e.timeList})]})]}):l(h,{sx:{backgroundColor:c.palette.secondary.main,borderWidth:"6px",borderStyle:"dashed",borderColor:c.palette.secondary.dark,borderRadius:"24px",padding:"3rem",flexDirection:"column",width:"fit-content"},children:[o(S,{src:ne,duration:0,style:{filter:"drop-shadow(4px 4px 0 black)",width:"24rem"}}),o(X,{disablePortal:!0,onChange:P,options:p(),sx:{width:"16rem"},renderInput:n=>o(G,m({variant:"outlined",placeholder:"00:00",sx:{"& .MuiOutlinedInput-root":{backgroundColor:"var(--cream-color)",fontWeight:"bold","& fieldset":{border:"4px solid black",borderRadius:0,boxShadow:c.shadows[2]},"&.Mui-focused fieldset":{border:"4px solid black",boxShadow:c.shadows[1]}}}},n))}),o(v,{text:"Start",handleFunction:y,iconType:"play"})]})})]})}J.render(o(Q.StrictMode,{children:o(de,{})}),document.getElementById("root"));
