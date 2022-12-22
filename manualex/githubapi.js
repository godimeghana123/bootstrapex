let b=document.getElementById('btn1')
let t=document.getElementById('t1')
let row
b.addEventListener("click",function f1(){
    fetch('https://api.github.com/users/godimeghana').
    then(response=>response.json()).
    then(data=>f2(data))
})
function f2(data){
    row=`
      <tr>
        <td>${login}</td>
        <td>${data.login}</td></tr>
        <tr>
        <td>${id}</td>
        <td>${data.id}</td></tr>


    
    
    
    `
    t.innerHTML+=row
}