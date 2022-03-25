const inputNumber=document.querySelector("#input")
const button=document.querySelector("#btn")
const result=document.querySelector("#output")

button.addEventListener('click',()=>{
    const userInput=Number(inputNumber.value)

    const squared=square(userInput)
    const lastNumber=squared%10
    if (userInput===lastNumber){
        result.innerText=(`automorphic ${lastNumber}`)
    }else{
        result.innerText=(`Not automorphic ${lastNumber}`)

    }  
})

function square(inputValue){
    return Number(inputValue**2)
}