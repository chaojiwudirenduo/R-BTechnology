let table=document.querySelector("tbody");
let xhr=new XMLHttpRequest();
let data=[];
xhr.open("get", "data.json");
xhr.send();
xhr.onload=function () {
    "use strict";
    let r=xhr.response;
    data=eval(r);
    reWrite();
};
let ranking=document.querySelector("#count");
let flag=true;
ranking.onclick=function () {
    data.sort(function (a, b) {
        let num1=a.count;
        let num2=b.count;
        num1=num1.slice(0,num1.indexOf(","))+num1.slice(num1.indexOf(",")+1);
        num2=num2.slice(0,num2.indexOf(","))+num2.slice(num2.indexOf(",")+1);
       if(flag) {
           if (parseInt(num1) < parseInt(num2)) {
               return -1;
           } else {
               return 1;
           }
       }else{
           if (parseInt(num1) < parseInt(num2)) {
               return 1;
           } else {
               return -1;
           }
       }
    });
    flag=!flag;
    reWrite();
};
function reWrite() {
    table.innerHTML="";
    data.forEach(function (value) {
        let tr=document.createElement("tr");
        tr.innerHTML=`
          <td>${value.ranking}</td>
          <td>${value.name}</td>
          <td>${value.count}</td>
        `;
        table.appendChild(tr);
    })
}
