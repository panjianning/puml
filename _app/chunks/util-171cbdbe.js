var J=Object.defineProperty,K=Object.defineProperties;var W=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var E=(t,e,o)=>e in t?J(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,y=(t,e)=>{for(var o in e||(e={}))X.call(e,o)&&E(t,o,e[o]);if(L)for(var o of L(e))Y.call(e,o)&&E(t,o,e[o]);return t},_=(t,e)=>K(t,W(e));import{ah as Z,D as f,S as z,i as B,s as Q,e as T,c as G,a as j,d as v,b as p,a4 as g,g as $,G as tt,W as F,K as et,v as ot,ag as at,Z as M,R as S,T as b,U as st,ai as rt,V as D}from"./vendor-72432615.js";import{c as H,e as U,f as O,i as nt,h as it,j as ct,a as lt,k as ut}from"./state-a5d5e5d6.js";const dt=t=>{const e=Z.encode(t),o=`https://www.plantuml.com/plantuml/png/${e}`,s=`https://www.plantuml.com/plantuml/svg/${e}`;return new Map([["png",o],["svg",s]])},ft=f(void 0);function pt(t){let e,o;return{c(){e=T("div"),o=T("div"),this.h()},l(s){e=G(s,"DIV",{id:!0,class:!0});var a=j(e);o=G(a,"DIV",{id:!0,class:!0}),j(o).forEach(v),a.forEach(v),this.h()},h(){p(o,"id","container"),p(o,"class","flex-1 overflow-auto"),p(e,"id","view"),p(e,"class","p-2 svelte-5ndy2s"),g(e,"error",t[2]),g(e,"outOfSync",t[3])},m(s,a){$(s,e,a),tt(e,o),t[4](o),t[5](e)},p(s,[a]){a&4&&g(e,"error",s[2]),a&8&&g(e,"outOfSync",s[3])},i:F,o:F,d(s){s&&v(e),t[4](null),t[5](null)}}}function gt(t,e,o){let s;et(t,H,n=>o(9,s=n));let a="",u="",r,c,i=!1,l=!1,d=!0;ot(()=>{H.subscribe(n=>{try{if(r&&n&&(n.updateDiagram||n.autoSync)){if(n.autoSync||at(H,s.updateDiagram=!1,s),o(3,l=!1),d=!0,a===n.code&&u===n.mermaid)return;a=n.code,u=n.mermaid;const w=c.parentElement.scrollTop;delete r.dataset.processed;const x=dt(a);o(0,r.innerHTML=`<img id="canvas" src="${x.get("svg")}">`,r),o(1,c.parentElement.scrollTop=w,c),o(2,i=!1)}else d?d=!1:o(3,l=!0)}catch(w){console.log("view fail",w),o(2,i=!0)}}),ft.subscribe(n=>{typeof n=="undefined"?o(2,i=!1):(o(2,i=!0),console.log("Error: ",n))})});function P(n){M[n?"unshift":"push"](()=>{r=n,o(0,r)})}function q(n){M[n?"unshift":"push"](()=>{c=n,o(1,c)})}return[r,c,i,l,P,q]}class It extends z{constructor(e){super();B(this,e,gt,pt,Q,{})}}const mt=30,I=S(f("manual"),b(),"plantumlAutoHistoryMode"),m=S(f([]),b(),"plantumlAutoHistoryStore"),h=S(f([]),b(),"plantumlManualHistoryStore"),R=f([]),Lt=st([I,m,h,R],([t,e,o,s],a)=>{a(t==="auto"?e:t==="manual"?o:t==="loader"?s:e)}),ht=t=>{if(t.type==="loader"){R.update(e=>[t,...e]);return}if(t.name=rt(2),t.type!=="auto"){h.update(e=>[t,...e]);return}m.update(e=>(e.length===mt&&e.pop(),[t,...e]))},Et=t=>{(D(I)==="auto"?m:h).update(e=>(D(I)!=="loader"&&(e=e.filter(o=>t&&o.time!=t)),e))},Tt=t=>{const e=D(t?m:h);return e.length>0?JSON.stringify(e[0].state):""},V="code.mmd",A="config.json",wt=t=>V in t,k=async t=>t.truncated?await(await fetch(t.raw_url)).text():t.content,yt=async t=>{const[e,o,s,a]=t.split("github.com").pop().split("/"),{html_url:u,files:r,history:c}=await(await fetch(`https://api.github.com/gists/${s}${a?"/"+a:""}`)).json();if(wt(r)){const i=await k(r[V]);let l;A in r&&(l=await k(r[A]));const d=c[0];return{url:`${u}/${d.version}`,code:i,config:l,author:d.user.login,time:new Date(d.committed_at).getTime(),version:d.version.slice(-7)}}else throw"Invalid gist provided"},C=(t,e=t.url)=>{const o=_(y({},U),{code:t.code,loader:{type:"gist",config:{url:e}}});return t.config&&(o.mermaid=t.config),o},_t=async t=>{try{const[e,o,s,a]=t.split("github.com").pop().split("/"),{history:u}=await(await fetch(`https://api.github.com/gists/${s}${a?"/"+a:""}`)).json(),r=[];for(const i of u){const l=await yt(i.url).catch(()=>{});l&&r.push(l)}if(r.length===0)throw"Invalid gist provided";r.reverse();const c=C(r.slice(-1).pop(),t);for(const i of r)ht({state:C(i),time:i.time,type:"loader",url:i.url,name:`${i.author} v${i.version}`});return c}catch(e){console.error(e)}},N={gist:_t},vt=async()=>{const t=new URLSearchParams(window.location.search);let e=U,o,s,a=!1;const u=t.get("code"),r=t.get("config");if(u&&(o=await(await fetch(u)).text(),a=!0),r?s=await(await fetch(r)).text():s=U.mermaid,o)e={code:o,mermaid:s,loader:{type:"files",config:{codeURL:u,configURL:r}}};else for(const[c,i]of t.entries())if(c in N)try{e=await N[c](i),a=!0;break}catch(l){console.error(l)}a&&O(_(y({},e),{autoSync:!0,updateDiagram:!0,updateEditor:!0}))},St=()=>{ut(window.location.hash.slice(1))},bt=()=>{O({updateDiagram:!0})},Gt=async()=>{var t;St(),await nt("Loading Gist...",vt().catch(console.error)),bt(),it(),await ct(),(t=lt)==null||t.page()};export{It as V,Lt as a,Tt as b,ht as c,Et as d,ft as e,dt as g,I as h,Gt as i,R as l,bt as s};
