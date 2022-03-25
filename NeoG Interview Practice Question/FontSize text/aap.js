const largeBtn=document.querySelector("#large")
const smallBtn=document.querySelector("#samll")
const result=document.querySelector("#output")

const input=document.querySelector("#text")
var fontSizeIncerment=32


const inputText=input.value

largeBtn.addEventListener('click',()=>{
    fontSizeIncerment+=2
    result.innerText=inputText
    // input.style.fontSize=`${fontSizeIncerment}px`
    result.style.fontSize=`${fontSizeIncerment}px`



})




smallBtn.addEventListener('click',()=>{
    result.innerText=inputText
    fontSizeIncerment-=2
    // input.style.fontSize=`${fontSizeIncerment}px`
    result.style.fontSize=`${fontSizeIncerment}px`


})
