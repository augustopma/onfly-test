(()=>{"use strict";var e={4647:(e,r,t)=>{var o=t(1957),n=t(213),a=t(499),i=t(9835);function l(e,r,t,o,n,a){const l=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(l)}const s=(0,i.aZ)({name:"App"});var c=t(1639);const u=(0,c.Z)(s,[["render",l]]),d=u;var p=t(3340),f=t(8339);const h=[{path:"/",component:()=>Promise.all([t.e(736),t.e(846)]).then(t.bind(t,8846)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(944)]).then(t.bind(t,1944))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([t.e(736),t.e(862)]).then(t.bind(t,1862))}],v=h,b=(0,p.BC)((function(){const e=f.r5,r=(0,f.p7)({scrollBehavior:()=>({left:0,top:0}),routes:v,history:e("")});return r}));async function m(e,r){const t=e(d);t.use(n.Z,r);const o=(0,a.Xl)("function"===typeof b?await b({}):b);return{app:t,router:o}}const g={config:{}},y="";async function w({app:e,router:r},t){let o=!1;const n=e=>{try{return r.resolve(e).href}catch(t){}return Object(e)===e?null:e},a=e=>{if(o=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const r=n(e);null!==r&&(window.location.href=r,window.location.reload())},i=window.location.href.replace(window.location.origin,"");for(let s=0;!1===o&&s<t.length;s++)try{await t[s]({app:e,router:r,ssrContext:null,redirect:a,urlPath:i,publicPath:y})}catch(l){return l&&l.url?void a(l.url):void console.error("[Quasar] boot error:",l)}!0!==o&&(e.use(r),e.mount("#q-app"))}m(o.ri,g).then((e=>{const[r,o]=void 0!==Promise.allSettled?["allSettled",e=>e.map((e=>{if("rejected"!==e.status)return e.value.default;console.error("[Quasar] boot error:",e.reason)}))]:["all",e=>e.map((e=>e.default))];return Promise[r]([Promise.resolve().then(t.bind(t,6288)),Promise.resolve().then(t.bind(t,1569))]).then((r=>{const t=o(r).filter((e=>"function"===typeof e));w(e,t)}))}))},1569:(e,r,t)=>{t.r(r),t.d(r,{api:()=>a,default:()=>i});var o=t(3340),n=t(7524);const a=n.Z.create({baseURL:"https://api.example.com"}),i=(0,o.xr)((({app:e})=>{e.config.globalProperties.$axios=n.Z,e.config.globalProperties.$api=a}))},6288:(e,r,t)=>{t.r(r),t.d(r,{default:()=>l});var o=t(3340),n=t(7712);const a={failed:"Action failed",success:"Action was successful"},i={"en-US":a},l=(0,o.xr)((({app:e})=>{const r=(0,n.o)({locale:"en-US",globalInjection:!0,messages:i});e.use(r)}))}},r={};function t(o){var n=r[o];if(void 0!==n)return n.exports;var a=r[o]={exports:{}};return e[o](a,a.exports,t),a.exports}t.m=e,(()=>{var e=[];t.O=(r,o,n,a)=>{if(!o){var i=1/0;for(u=0;u<e.length;u++){for(var[o,n,a]=e[u],l=!0,s=0;s<o.length;s++)(!1&a||i>=a)&&Object.keys(t.O).every((e=>t.O[e](o[s])))?o.splice(s--,1):(l=!1,a<i&&(i=a));if(l){e.splice(u--,1);var c=n();void 0!==c&&(r=c)}}return r}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,n,a]}})(),(()=>{t.n=e=>{var r=e&&e.__esModule?()=>e["default"]:()=>e;return t.d(r,{a:r}),r}})(),(()=>{t.d=(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})}})(),(()=>{t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((r,o)=>(t.f[o](e,r),r)),[]))})(),(()=>{t.u=e=>"js/"+e+"."+{846:"dc4e6360",862:"ccd967a5",944:"a50b43ba"}[e]+".js"})(),(()=>{t.miniCssF=e=>{}})(),(()=>{t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r)})(),(()=>{var e={},r="quasar-project:";t.l=(o,n,a,i)=>{if(e[o])e[o].push(n);else{var l,s;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==r+a){l=d;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,t.nc&&l.setAttribute("nonce",t.nc),l.setAttribute("data-webpack",r+a),l.src=o),e[o]=[n];var p=(r,t)=>{l.onerror=l.onload=null,clearTimeout(f);var n=e[o];if(delete e[o],l.parentNode&&l.parentNode.removeChild(l),n&&n.forEach((e=>e(t))),r)return r(t)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),(()=>{t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{t.p=""})(),(()=>{var e={143:0};t.f.j=(r,o)=>{var n=t.o(e,r)?e[r]:void 0;if(0!==n)if(n)o.push(n[2]);else{var a=new Promise(((t,o)=>n=e[r]=[t,o]));o.push(n[2]=a);var i=t.p+t.u(r),l=new Error,s=o=>{if(t.o(e,r)&&(n=e[r],0!==n&&(e[r]=void 0),n)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;l.message="Loading chunk "+r+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,n[1](l)}};t.l(i,s,"chunk-"+r,r)}},t.O.j=r=>0===e[r];var r=(r,o)=>{var n,a,[i,l,s]=o,c=0;if(i.some((r=>0!==e[r]))){for(n in l)t.o(l,n)&&(t.m[n]=l[n]);if(s)var u=s(t)}for(r&&r(o);c<i.length;c++)a=i[c],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(u)},o=globalThis["webpackChunkquasar_project"]=globalThis["webpackChunkquasar_project"]||[];o.forEach(r.bind(null,0)),o.push=r.bind(null,o.push.bind(o))})();var o=t.O(void 0,[736],(()=>t(4647)));o=t.O(o)})();