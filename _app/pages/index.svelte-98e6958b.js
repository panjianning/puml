import{S as o,i as e,s as a,v as r}from"../chunks/vendor-1110e278.js";import{r as i}from"../chunks/singletons-a6a7384f.js";import{b as c}from"../chunks/paths-4b3c6e7e.js";const u=l;async function l(s,t){return i.goto(s,t,[])}function f(s){return r(async()=>{const t=window.location.hash.split("/");let n="edit";t.length>2&&(n=`${t[1]}#${t[2]}`),await u(`${c}/${n}`,{replaceState:!0})}),[]}class $ extends o{constructor(t){super();e(this,t,f,null,a,{})}}export{$ as default};
