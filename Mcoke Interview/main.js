

const input=document.querySelector("#text")
const btn=document.querySelector("#btn")
const output=document.querySelector("#output")

const Input=input.value
btn.addEventListener("click",()=>{
    if(Input.length<10){
    }else{
        output.innerText="error"
        output.style.color="red"
    }
})