"use strict";(globalThis["webpackChunkquasar_project"]=globalThis["webpackChunkquasar_project"]||[]).push([[80],{8080:(e,l,a)=>{a.r(l),a.d(l,{default:()=>f});var o=a(9835);function t(e,l,a,t,s,n){const u=(0,o.up)("q-input"),i=(0,o.up)("q-icon"),r=(0,o.up)("q-btn"),m=(0,o.up)("q-form"),d=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(d,{class:"flex flex-center"},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{onSubmit:t.onSubmit,class:"q-gutter-md"},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{outlined:"",modelValue:t.email,"onUpdate:modelValue":l[0]||(l[0]=e=>t.email=e),"stack-label":"",label:"Email","lazy-rules":"",type:"email",rules:[e=>e&&e.length>0||"Digite um email válido"]},null,8,["modelValue","rules"]),(0,o.Wm)(u,{outlined:"",modelValue:t.password,"onUpdate:modelValue":l[2]||(l[2]=e=>t.password=e),"stack-label":"",label:"Senha","lazy-rules":"",type:t.isPwd?"password":"text",rules:[e=>null!==e&&""!==e||"Digite uma senha",e=>e>0&&e.length<100||"A senha deve ter no mínimo 8 caracteres"]},{append:(0,o.w5)((()=>[(0,o.Wm)(i,{name:t.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:l[1]||(l[1]=e=>t.isPwd=!t.isPwd)},null,8,["name"])])),_:1},8,["modelValue","type","rules"]),(0,o._)("div",null,[(0,o.Wm)(r,{label:"Login",type:"submit",color:"primary"})])])),_:1},8,["onSubmit"])])),_:1})}var s=a(9302),n=a(499),u=a(7524);const i={setup(){const e=(0,s.Z)(),l=(0,n.iH)(null),a=(0,n.iH)(null),o=(0,n.iH)(!0),t=()=>{const o={email:l.value,password:a.value},t=u.Z.post("http://localhost/login-web",o).then((e=>{console.log(e)}));e.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:t.message})};return{email:l,password:a,isPwd:o,onSubmit:t}}};var r=a(1639),m=a(9885),d=a(8326),p=a(4925),c=a(2857),b=a(7065),w=a(9984),g=a.n(w);const h=(0,r.Z)(i,[["render",t]]),f=h;g()(i,"components",{QPage:m.Z,QForm:d.Z,QInput:p.Z,QIcon:c.Z,QBtn:b.Z})}}]);