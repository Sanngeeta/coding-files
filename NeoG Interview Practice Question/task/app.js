let counterInput = document.querySelector("#counter-text");
const incrButton=document.querySelector("#increase")
const decrButton=document.querySelector("#decrease")
// Element selectors
// 1.single element selectore 
// 2.multi element selectore

// incrButton.addEventListener("click",()=>{
//     var counter=parseInt(counterInput.innerText) 
//     counterInput.innerText=counter+1
    
    
// })


// decrButton.addEventListener("click",()=>{
//     const decr=parseInt(counterInput.innerText)
//     counterInput.innerText=decr-1
// })

counter=0
incrButton.addEventListener('click',()=>{
    counterInput.innerText=counter+=1

})



decrButton.addEventListener('click',()=>{
    counterInput.innerText=counter-=1

})





