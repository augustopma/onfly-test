"use strict";(globalThis["webpackChunkquasar_project"]=globalThis["webpackChunkquasar_project"]||[]).push([[207],{6207:(e,l,a)=>{a.r(l),a.d(l,{default:()=>k});var t=a(9835);const s={class:"div-row"},o=(0,t._)("br",null,null,-1),n=(0,t._)("br",null,null,-1),i={class:"flex flex-center"};function u(e,l,a,u,r,c){const m=(0,t.up)("q-input"),d=(0,t.up)("q-icon"),p=(0,t.up)("q-btn"),b=(0,t.up)("q-form");return(0,t.wg)(),(0,t.iD)("div",s,[(0,t.Wm)(b,{onSubmit:u.onSubmit,class:"q-gutter-md"},{default:(0,t.w5)((()=>[o,n,(0,t.Wm)(m,{outlined:"",modelValue:u.email,"onUpdate:modelValue":l[0]||(l[0]=e=>u.email=e),"stack-label":"",label:"Email","lazy-rules":"",type:"email",rules:[e=>e&&e.length>0||"Digite um email válido"]},null,8,["modelValue","rules"]),(0,t.Wm)(m,{outlined:"",modelValue:u.password,"onUpdate:modelValue":l[2]||(l[2]=e=>u.password=e),"stack-label":"",label:"Senha","lazy-rules":"",type:u.isPwd?"password":"text",rules:[e=>null!==e&&""!==e||"Digite uma senha",e=>e>0&&e.length<100||"A senha deve ter no mínimo 8 caracteres"]},{append:(0,t.w5)((()=>[(0,t.Wm)(d,{name:u.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:l[1]||(l[1]=e=>u.isPwd=!u.isPwd)},null,8,["name"])])),_:1},8,["modelValue","type","rules"]),(0,t._)("div",i,[(0,t.Wm)(p,{label:"Login",type:"submit",color:"primary"})])])),_:1},8,["onSubmit"])])}a(9665);var r=a(9302),c=a(499),m=a(7524),d=a(8339);const p={setup(){const e=(0,r.Z)(),l=(0,d.tv)(),a=(0,c.iH)(null),t=(0,c.iH)(null),s=(0,c.iH)(!0),o=()=>{const s={email:a.value,password:t.value};m.Z.post("http://localhost/api/login",s).then((a=>{console.log(a.data),a.data.success&&(e.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:a.data.message}),l.push("/list"))}))};return m.Z.get("http://localhost/sanctum/csrf-cookie").then((e=>{})),{email:a,password:t,isPwd:s,onSubmit:o}}};var b=a(1639),h=a(8326),w=a(6611),g=a(2857),v=a(4455),f=a(9984),y=a.n(f);const _=(0,b.Z)(p,[["render",u]]),k=_;y()(p,"components",{QForm:h.Z,QInput:w.Z,QIcon:g.Z,QBtn:v.Z})}}]);