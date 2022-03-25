const inputByUser=document.querySelector("#input")
const button1=document.querySelector("#btn1")
const button2=document.querySelector("#btn2")
const button3=document.querySelector("#btn3")
const showResult=document.querySelector("#output")

user=inputByUser.value

button1.addEventListener('click',()=>{
    showResult.innerHTML=`<h1>${user}</h1>`
})
button2.addEventListener('click',()=>{
    showResult.innerHTML=`<h2>${user}</h2>`
})
button3.addEventListener('click',()=>{
    showResult.innerHTML=`<h3>${user}</h3>`
})