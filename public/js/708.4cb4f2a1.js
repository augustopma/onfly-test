"use strict";(globalThis["webpackChunkquasar_project"]=globalThis["webpackChunkquasar_project"]||[]).push([[708],{4708:(e,l,a)=>{a.r(l),a.d(l,{default:()=>v});var t=a(9835);function o(e,l,a,o,s,n){const u=(0,t.up)("q-input"),i=(0,t.up)("q-icon"),r=(0,t.up)("q-btn"),c=(0,t.up)("q-form"),m=(0,t.up)("q-page");return(0,t.wg)(),(0,t.j4)(m,{class:"flex flex-center"},{default:(0,t.w5)((()=>[(0,t.Wm)(c,{onSubmit:o.onSubmit,class:"q-gutter-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(u,{outlined:"",modelValue:o.email,"onUpdate:modelValue":l[0]||(l[0]=e=>o.email=e),"stack-label":"",label:"Email","lazy-rules":"",type:"email",rules:[e=>e&&e.length>0||"Digite um email válido"]},null,8,["modelValue","rules"]),(0,t.Wm)(u,{outlined:"",modelValue:o.password,"onUpdate:modelValue":l[2]||(l[2]=e=>o.password=e),"stack-label":"",label:"Senha","lazy-rules":"",type:o.isPwd?"password":"text",rules:[e=>null!==e&&""!==e||"Digite uma senha",e=>e>0&&e.length<100||"A senha deve ter no mínimo 8 caracteres"]},{append:(0,t.w5)((()=>[(0,t.Wm)(i,{name:o.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:l[1]||(l[1]=e=>o.isPwd=!o.isPwd)},null,8,["name"])])),_:1},8,["modelValue","type","rules"]),(0,t._)("div",null,[(0,t.Wm)(r,{label:"Login",type:"submit",color:"primary"})])])),_:1},8,["onSubmit"])])),_:1})}a(9665);var s=a(9302),n=a(499),u=a(7524),i=a(8339);const r={setup(){const e=(0,s.Z)(),l=(0,i.tv)(),a=(0,n.iH)(null),t=(0,n.iH)(null),o=(0,n.iH)(!0),r=()=>{const o={email:a.value,password:t.value};u.Z.post("http://localhost/api/login",o).then((a=>{console.log(a.data),a.data.success&&(e.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:a.data.message}),l.push("/list"))}))};return u.Z.get("http://localhost/sanctum/csrf-cookie").then((e=>{console.log(e)})),{email:a,password:t,isPwd:o,onSubmit:r}}};var c=a(1639),m=a(9885),d=a(8326),p=a(6611),g=a(2857),h=a(4455),b=a(9984),w=a.n(b);const f=(0,c.Z)(r,[["render",o]]),v=f;w()(r,"components",{QPage:m.Z,QForm:d.Z,QInput:p.Z,QIcon:g.Z,QBtn:h.Z})}}]);