const inputNumber1=document.querySelector("#input1")
const inputNumber2=document.querySelector("#input2")
const additionButton=document.querySelector("#addition")
const multiButton=document.querySelector("#multiplication")
const diviButton=document.querySelector("#division")
const subtrButton=document.querySelector("#subtraction")
const showOutput=document.querySelector("#output")


const input1=parseInt(inputNumber1.value)
const input2=parseInt(inputNumber2.value)

additionButton.addEventListener('click',()=>{
    result=input1+input2
    showOutput.innerHTML=(result)
})


multiButton.addEventListener('click',()=>{
    result=input1*input2
    showOutput.innerHTML=(result)
})



diviButton.addEventListener('click',()=>{
    result=input1/input2
    showOutput.innerHTML=(result)
})




subtrButton.addEventListener('click',()=>{
    result=input1-input2
    showOutput.innerHTML=(result)
})


