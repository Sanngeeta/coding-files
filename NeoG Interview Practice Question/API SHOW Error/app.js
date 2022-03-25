// Here's an API Link: [https://mystery-api.kushanksriraj.repl.co/get](https://mystery-api.kushanksriraj.repl.co/get) 

// This API link can give two errors, either 404, or 401. 
// If the error is 404, show the user 'page not found' and if the error is 401, show the user 
// 'you are not logged in'.


const showOutput=document.querySelector("#output")

const url="https://mystery-api.kushanksriraj.repl.co/get"

fetch(url)
.then((res)=>{
    return res

}).then((data)=>{
    // console.log(data)
    if (data.status===401){
        showOutput.innerText=("you are not logged")}
    else if (data.status===404){
        showOutput.innerText=('page not found')
    }else if (data.status===200){
        showOutput.innerText=("API working")
    }
})