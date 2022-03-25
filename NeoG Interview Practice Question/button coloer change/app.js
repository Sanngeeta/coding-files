const inputText=document.querySelector("#input")
const button1=document.querySelector("#btn1")
const button2=document.querySelector("#btn2")
const button3=document.querySelector("#btn3")
const result=document.querySelector("#output")


button1.addEventListener('click',()=>inputText.style.color="red")
button2.addEventListener('click',()=>inputText.style.color="green")
button3.addEventListener('click',()=>inputText.style.color="blue")

// const input=inputText.value

// button1.addEventListener('click',()=>{
//     result.innerText=input
//     result.style.color="red"
// })

// const userText=inputText.value

// button1.addEventListener('click',()=>{
//     result.innerHTML=(userText.style.color="red")
//     // result.innerText=userText


// })
