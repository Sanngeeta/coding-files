const textInput=document.querySelector("#input-text")
const button=document.querySelector("#btn")
const output=document.querySelector("#output")

const number=0
const input=textInput.value
button.disabled=true


inputLength=input.length

button.addEventListener('click',()=>{
    if(input)
        inputLength=input.length
        output.innerText=inputLength
        
})

textInput.addEventListener('input',()=>{
    if (input===0){
        button.disabled=true
    }else{
        button.disabled=false
    }
})
