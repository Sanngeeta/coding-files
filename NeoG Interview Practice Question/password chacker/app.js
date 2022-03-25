const inputText=document.querySelector("#pass")
const button=document.querySelector("#btn")
const result=document.querySelector("#output")




var inputPassword=inputText.value
button.disabled=true


button.addEventListener('click',()=>{
    if (inputPassword.length<10){
        result.innerText="error"

    }else{
        result.innerText='Success'

    }
})

// Button ko disabled karna jab bhi password 10 ya 10 se upper ho
inputText.addEventListener("input",()=>{
    var inputPassword=inputText.value
    if(inputPassword.length<10){
        button.disabled=true
    }else {
        button.disabled=false
    }

})



// const url=""

// fetch(url).then(res=>res.json())
// .then(data=>console.log(data))
// .catch(err)