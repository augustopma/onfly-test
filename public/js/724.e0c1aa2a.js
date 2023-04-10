"use strict";(globalThis["webpackChunkquasar_project"]=globalThis["webpackChunkquasar_project"]||[]).push([[724],{3724:(e,a,s)=>{s.r(a),s.d(a,{default:()=>W});var n=s(9835),t=s(6970),l=s(1957);const r={class:"flex flex-center div-row"},o=(0,n._)("br",null,null,-1),i=(0,n._)("br",null,null,-1),c={class:"q-gutter-sm"},p=["innerHTML"];function d(e,a,s,d,u,m){const b=(0,n.up)("q-icon"),h=(0,n.up)("q-breadcrumbs-el"),g=(0,n.up)("q-breadcrumbs"),w=(0,n.up)("q-td"),x=(0,n.up)("q-btn"),f=(0,n.up)("q-tr"),q=(0,n.up)("q-table");return(0,n.wg)(),(0,n.iD)("div",r,[o,(0,n.Wm)(g,null,{separator:(0,n.w5)((()=>[(0,n.Wm)(b,{size:"1.5em",name:"chevron_right",color:"primary"})])),default:(0,n.w5)((()=>[(0,n.Wm)(h,{label:"Home",icon:"home"}),(0,n.Wm)(h,{label:"Listar Despesas",icon:"list"})])),_:1}),i,((0,n.wg)(),(0,n.j4)(q,{title:"Minhas Despesas",rows:e.expenses,columns:e.columns,"row-key":"id",loading:e.loading,key:e.tableKey,noDataLabel:"Nenhuma despesa encontrada"},{body:(0,n.w5)((a=>[(0,n.Wm)(f,{props:a},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.cols.slice(0,-1),(e=>((0,n.wg)(),(0,n.j4)(w,{key:e.name,props:a},{default:(0,n.w5)((()=>[(0,n.Uk)((0,t.zw)(e.value),1)])),_:2},1032,["props"])))),128)),(0,n.Wm)(w,{key:"actions",props:a},{default:(0,n.w5)((()=>[(0,n._)("div",c,[(0,n.Wm)(x,{square:"",color:"primary",onClick:s=>e.showExpense(a),icon:"visibility"},null,8,["onClick"]),(0,n.Wm)(x,{square:"",color:"secondary",onClick:s=>e.editExpense(a.row.id),icon:"edit"},null,8,["onClick"]),(0,n.Wm)(x,{square:"",color:"red",onClick:s=>e.deleteExpense(a.row.id),icon:"delete"},null,8,["onClick"])])])),_:2},1032,["props"])])),_:2},1032,["props"]),(0,n.wy)((0,n.Wm)(f,{props:a},{default:(0,n.w5)((()=>[(0,n.Wm)(w,{colspan:"100%"},{default:(0,n.w5)((()=>[(0,n._)("div",{innerHTML:e.currentExpense},null,8,p)])),_:1})])),_:2},1032,["props"]),[[l.F8,a.expand]])])),_:1},8,["rows","columns","loading"]))])}s(9665);var u=s(9302),m=s(7524),b=s(8339);const h=(0,n.aZ)({name:"ListExpenses",setup(){const e=(0,u.Z)(),a=(0,b.tv)();return{quasar:e,router:a}},data(){return{expenses:[],loading:!0,tableKey:0,currentExpense:"",columns:[{name:"description",align:"left",label:"Descrição",field:"description"},{name:"amount",align:"center",label:"Valor",field:"amount",sortable:!0},{name:"date",align:"center",label:"Data",field:"expense_date",sortable:!0},{name:"actions",align:"center",label:"Ações"}]}},methods:{showExpense(e){var a=this;m.Z.get("http://localhost/api/expenses/"+e.row.id).then((s=>{if(s.data.success){a.currentExpense="";var n=s.data.data;for(var t in n)a.currentExpense+="<p>"+t+": "+n[t]+"</p>";e.expand=!e.expand}}))},editExpense(e){this.router.push("/update/"+e)},async getExpenses(){var e=this;m.Z.get("http://localhost/api/expenses").then((a=>{a.data.success&&(e.expenses=a.data.data,e.loading=!1,e.tableKey++)}))},async deleteExpense(e){var a=this;a.quasar.dialog({title:"Deletar despesa",message:"Tem certeza que deseja remover a despesa?",cancel:!0,persistent:!0}).onOk((()=>{m.Z["delete"]("http://localhost/api/expenses/"+e).then((e=>{e.data.success&&(a.getExpenses(),a.quasar.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:e.data.message}))}))}))}},async mounted(){await this.getExpenses()}});var g=s(1639),w=s(2605),x=s(2857),f=s(8052),q=s(2513),v=s(3532),y=s(7220),k=s(4455),_=s(9984),E=s.n(_);const Z=(0,g.Z)(h,[["render",d]]),W=Z;E()(h,"components",{QBreadcrumbs:w.Z,QIcon:x.Z,QBreadcrumbsEl:f.Z,QTable:q.Z,QTr:v.Z,QTd:y.Z,QBtn:k.Z})}}]);