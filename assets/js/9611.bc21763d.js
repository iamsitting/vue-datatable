"use strict";(self.webpackChunkvue_good_table_next=self.webpackChunkvue_good_table_next||[]).push([[9611],{9611:(e,n,o)=>{o.r(n),o.d(n,{default:()=>u});var t=o(6252),i=o(3577);const a={key:0},l=["onClick"],c={key:1},r={name:"grouped-custom",props:["options"],data:()=>({columns:[{label:"Name",field:"name"},{label:"Diet",field:"diet",type:"text"},{label:"Count",field:"count",type:"number"},{label:"Action",field:"action",type:"number"}],rows:[{name:"Mammal",diet:"",count:"",children:[{name:"Elephant",diet:"herbivore",count:5},{name:"Cat",diet:"carnivore",count:28}]},{name:"Reptiles",diet:"",count:"",action:"",children:[{name:"Snake",diet:"carnivore",count:40},{name:"lizard",diet:"insectivore",count:34}]},{name:"Fish",diet:"",count:"",children:[{name:"Shark",diet:"carnivore",count:2},{name:"koi",diet:"omnivore",count:14}]}]}),computed:{},methods:{showAlert(e){alert(JSON.stringify(e))}},mounted(){},components:{}},u=(0,o(3744).Z)(r,[["render",function(e,n,o,r,u,d){const s=(0,t.up)("vue-good-table");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t.Wm)(s,{columns:u.columns,rows:u.rows,"group-options":o.options,"search-options":{enabled:!0}},{"table-header-row":(0,t.w5)((e=>["action"==e.column.field?((0,t.wg)(),(0,t.iD)("span",a,[(0,t._)("button",{class:"fancy-btn",onClick:n=>d.showAlert(e)},"Action",8,l)])):((0,t.wg)(),(0,t.iD)("span",c,(0,i.zw)(e.formattedRow[e.column.field]),1))])),_:1},8,["columns","rows","group-options"])])}]])}}]);