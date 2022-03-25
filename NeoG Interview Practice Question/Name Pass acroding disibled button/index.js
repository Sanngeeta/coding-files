const userName=document.querySelector("#username")
const pass=document.querySelector("#password")
const btn=document.querySelector("#btn")
const showOutput=document. querySelector("#output")


const username=userName.value
const userPassword=password.value


pass.addEventListener('input',()=>{
    btn.disabled=true


    if(username===userPassword){
        btn.disabled=true
    }else{
        btn.disabled=false
    }

})
   



















//     showOutput.innerText=`userName-${username} password ${userPassword}`




// // })
// // btn.disabled=true


// userName.addEventListener('input',()=>{
//     const userPassword=password.value
//     const username=userName.value

//     if(username.length===userPassword.length){
//         btn.disabled=true
//     }else{
//         btn.disabled=false
//     }

// })

// // userName.addEventListener('input',()=>{
// //     const userPassword=password.value
// //     const username=userName.value
// //     if(username===userPassword){
// //         btn.disabled=true
// //     }else{
// //         btn.disabled=false
// //     }

    
// // })

    