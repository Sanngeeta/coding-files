const input=document.querySelector("#input")
const logBtn=document.querySelector("#log")
const warnBtn=document.querySelector("#warn")
const errorBtn=document.querySelector("#error")
const result=document.querySelector("#output")


logBtn.addEventListener('click',()=>{
        input.style.color="black"

})


warnBtn.addEventListener('click',()=>{
        input.style.color="yellwo"

})


errorBtn.addEventListener('click',()=>{
        input.style.color="red"

})
