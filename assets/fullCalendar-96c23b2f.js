import{d as i,r as c,b as v,o as u,g as m,i as _,l as p}from"./index-976b9b96.js";const k=i({__name:"fullCalendar",setup(C){const l=c([{title:"购物",start:"2023-03-17 08:00",end:"2023-03-17 18:00"},{title:"写代码",start:"2023-03-18 10:00",end:"2023-03-18 16:00",editable:!0}]),a=e=>{l.value.push({title:"学习",start:e.dateStr+" 09:00",end:e.dateStr+" 21:00"})},o=e=>{console.log(e)};let r=e=>{let n=document.createElement("div"),t=e.timeText.split(" - "),s=t[0],d=t[1];return n.innerHTML=`
         <div>开始时间: ${s}</div>
         <div>结束时间: ${d}</div>
         <div>标题: ${e.event._def.title}</div>
        `,{domNodes:[n]}};return(e,n)=>{const t=v("full-calendar",!0);return u(),m("div",null,[_(t,{events:l.value,eventContent:p(r),onDateClick:a,onEventClick:o},null,8,["events","eventContent"])])}}});export{k as default};
