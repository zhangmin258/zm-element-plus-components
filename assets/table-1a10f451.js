import{d as k,r as c,w as h,b as n,o as x,e as y,f as a,i as l,k as g,t as s,n as i}from"./index-ab00b60f.js";const N=k({__name:"table",setup(D){const m=c(!1),d=[];for(let t=0;t<5;t++)d.push({date:+new Date,name:`Tom${t+1}`,address:"No. 189, Grove St, Los Angeles"});const r=c({currentPage:1,pageSize:10,total:30});h(r,t=>{console.log(t)},{deep:!0});const _=[{label:"生日",prop:"date",align:"left",editable:!0},{label:"名称",prop:"name",slot:"name"},{label:"地址",prop:"address"},{label:"操作",width:120,action:!0}],u=(t,o)=>{console.log(t,o)},f=(t,o)=>{};return(t,o)=>{const b=n("el-tag"),v=n("el-popover"),p=n("el-button"),w=n("my-table");return x(),y(w,{options:_,data:d,loading:m.value,pageConfig:r.value,"onUpdate:pageConfig":o[0]||(o[0]=e=>r.value=e)},{name:a(({scope:e})=>[l(v,{effect:"light",trigger:"hover",placement:"top",width:"auto"},{default:a(()=>[g("div",null,"name: "+s(e.row.name),1),g("div",null,"address: "+s(e.row.address),1)]),reference:a(()=>[l(b,null,{default:a(()=>[i(s(e.row.name),1)]),_:2},1024)]),_:2},1024)]),action:a(({scope:e})=>[l(p,{link:"",size:"small",type:"primary",onClick:C=>u(e.$index,e.row)},{default:a(()=>[i("Edit")]),_:2},1032,["onClick"]),l(p,{link:"",size:"small",type:"danger",onClick:C=>f(e.$index,e.row)},{default:a(()=>[i("Delete")]),_:2},1032,["onClick"])]),_:1},8,["loading","pageConfig"])}}});export{N as default};
