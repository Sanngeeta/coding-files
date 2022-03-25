const user=document.querySelector("#username")
const pass=document.querySelector("#password")

const btn =document.querySelector("#chack-btn")
const result=document.querySelector("#output")
const userName=user.value
const password=pass.value
btn.addEventListener("click",()=>{
    if (userName.includes(password)){
        result.innerText='username should not in password'
        result.style.color="red"
    }else{
        result.innerText="Sucessfully"
        result.style.color="green"
    }
})