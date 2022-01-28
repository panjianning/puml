var K=Object.defineProperty,W=Object.defineProperties;var X=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var L=(t,e,o)=>e in t?K(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,w=(t,e)=>{for(var o in e||(e={}))Y.call(e,o)&&L(t,o,e[o]);if(E)for(var o of E(e))Z.call(e,o)&&L(t,o,e[o]);return t},_=(t,e)=>W(t,X(e));import{D as f,S as x,i as z,s as B,e as T,c as G,a as R,d as v,b as p,a4 as m,g as Q,G as $,W as j,K as tt,v as et,ag as ot,Z as C,R as S,T as b,U as at,ah as st,V as D}from"./vendor-1110e278.js";import{c as H,e as I,f as F,i as rt,h as it,j as nt,a as ct,k as lt}from"./state-f44c91bd.js";const ut=f(void 0);function dt(t){let e,o;return{c(){e=T("div"),o=T("div"),this.h()},l(s){e=G(s,"DIV",{id:!0,class:!0});var a=R(e);o=G(a,"DIV",{id:!0,class:!0}),R(o).forEach(v),a.forEach(v),this.h()},h(){p(o,"id","container"),p(o,"class","flex-1 overflow-auto"),p(e,"id","view"),p(e,"class","p-2 svelte-5ndy2s"),m(e,"error",t[2]),m(e,"outOfSync",t[3])},m(s,a){Q(s,e,a),$(e,o),t[4](o),t[5](e)},p(s,[a]){a&4&&m(e,"error",s[2]),a&8&&m(e,"outOfSync",s[3])},i:j,o:j,d(s){s&&v(e),t[4](null),t[5](null)}}}function ft(t,e,o){let s;tt(t,H,i=>o(9,s=i));let a="",u="",r,c,n=!1,l=!1,d=!0;et(()=>{H.subscribe(i=>{try{if(r&&i&&(i.updateDiagram||i.autoSync)){if(i.autoSync||ot(H,s.updateDiagram=!1,s),o(3,l=!1),d=!0,a===i.code&&u===i.mermaid)return;a=i.code,u=i.mermaid;const y=c.parentElement.scrollTop;delete r.dataset.processed;let J=`http://www.plantuml.com/plantuml/svg/${encode64(deflate(unescape(encodeURIComponent(a))))}`;o(0,r.innerHTML=`<img id="canvas" src="${J}">`,r),o(1,c.parentElement.scrollTop=y,c),o(2,n=!1)}else d?d=!1:o(3,l=!0)}catch(y){console.log("view fail",y),o(2,n=!0)}}),ut.subscribe(i=>{typeof i=="undefined"?o(2,n=!1):(o(2,n=!0),console.log("Error: ",i))})});function P(i){C[i?"unshift":"push"](()=>{r=i,o(0,r)})}function q(i){C[i?"unshift":"push"](()=>{c=i,o(1,c)})}return[r,c,n,l,P,q]}class It extends x{constructor(e){super();z(this,e,ft,dt,B,{})}}const pt=30,U=S(f("manual"),b(),"autoHistoryMode"),g=S(f([]),b(),"autoHistoryStore"),h=S(f([]),b(),"manualHistoryStore"),O=f([]),Ut=at([U,g,h,O],([t,e,o,s],a)=>{a(t==="auto"?e:t==="manual"?o:t==="loader"?s:e)}),mt=t=>{if(t.type==="loader"){O.update(e=>[t,...e]);return}if(t.name=st(2),t.type!=="auto"){h.update(e=>[t,...e]);return}g.update(e=>(e.length===pt&&e.pop(),[t,...e]))},Et=t=>{(D(U)==="auto"?g:h).update(e=>(D(U)!=="loader"&&(e=e.filter(o=>t&&o.time!=t)),e))},Lt=t=>{const e=D(t?g:h);return e.length>0?JSON.stringify(e[0].state):""},V="code.mmd",k="config.json",gt=t=>V in t,N=async t=>t.truncated?await(await fetch(t.raw_url)).text():t.content,ht=async t=>{const[e,o,s,a]=t.split("github.com").pop().split("/"),{html_url:u,files:r,history:c}=await(await fetch(`https://api.github.com/gists/${s}${a?"/"+a:""}`)).json();if(gt(r)){const n=await N(r[V]);let l;k in r&&(l=await N(r[k]));const d=c[0];return{url:`${u}/${d.version}`,code:n,config:l,author:d.user.login,time:new Date(d.committed_at).getTime(),version:d.version.slice(-7)}}else throw"Invalid gist provided"},A=(t,e=t.url)=>{const o=_(w({},I),{code:t.code,loader:{type:"gist",config:{url:e}}});return t.config&&(o.mermaid=t.config),o},yt=async t=>{try{const[e,o,s,a]=t.split("github.com").pop().split("/"),{history:u}=await(await fetch(`https://api.github.com/gists/${s}${a?"/"+a:""}`)).json(),r=[];for(const n of u){const l=await ht(n.url).catch(()=>{});l&&r.push(l)}if(r.length===0)throw"Invalid gist provided";r.reverse();const c=A(r.slice(-1).pop(),t);for(const n of r)mt({state:A(n),time:n.time,type:"loader",url:n.url,name:`${n.author} v${n.version}`});return c}catch(e){console.error(e)}},M={gist:yt},wt=async()=>{const t=new URLSearchParams(window.location.search);let e=I,o,s,a=!1;const u=t.get("code"),r=t.get("config");if(u&&(o=await(await fetch(u)).text(),a=!0),r?s=await(await fetch(r)).text():s=I.mermaid,o)e={code:o,mermaid:s,loader:{type:"files",config:{codeURL:u,configURL:r}}};else for(const[c,n]of t.entries())if(c in M)try{e=await M[c](n),a=!0;break}catch(l){console.error(l)}a&&F(_(w({},e),{autoSync:!0,updateDiagram:!0,updateEditor:!0}))},_t=()=>{lt(window.location.hash.slice(1))},vt=()=>{F({updateDiagram:!0})},Tt=async()=>{var t;_t(),await rt("Loading Gist...",wt().catch(console.error)),vt(),it(),await nt(),(t=ct)==null||t.page()};export{It as V,Ut as a,mt as b,Et as c,ut as e,Lt as g,U as h,Tt as i,O as l,vt as s};
