const input=document.querySelector("#text")
const topBtn=document.querySelector("#OTP-btn")
const output=document.querySelector("#output")
const input2=document.querySelector("#text-two")
const validate=document.querySelector("#Validate")


topBtn.addEventListener('click',()=>{
    let url=" https://OTPGenerator.ishanjirety.repl.co/get-otp?name="
    const userInpput=input.value
    let serverWthInput=url+userInpput
    fetch(serverWthInput).then((resp)=>{
        return resp.json()
    }).then((data)=>{
        output.innerText=(data.otp)
})
})



validate.addEventListener('click',()=>{
    if (output.innerText===input2.value){
        output.innerText='sucess'
        output.style.color="green"
    }else{
        output.innerText="faliur"
        output.style.color="red"

    }

})

