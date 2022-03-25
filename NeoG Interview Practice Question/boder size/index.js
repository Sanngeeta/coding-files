const userName=document.querySelector("#name")
const btn1=document.querySelector("#five-px")
const btn2=document.querySelector("#ten-px")
const btn3=document.querySelector("#fivtin-px")

                                    

function clickHanderOne(){
    userName.style.border="solid 5px green"
}


function clickHanderTwo(){
    userName.style.border="solid 10px"
}


function clickHanderThree(){
    userName.style.border="solid 15px"
}

// we have to difaind two diffrence objects
// function age (age,personAge){
//     return sangeeta password
// }

btn1.addEventListener('click',clickHanderOne)

btn2.addEventListener('click',clickHanderTwo)


btn3.addEventListener('click',clickHanderThree)


// const apiOutput=document.querySelector("#output")

// fetch("https://quick-access-api.desaihetav.repl.co/" ).then((res)=>{
//     return res.json()
//     .then((data)=>{
//         apiOutput.innerHTML=(data.message)
//     })
// })

// we have to difaind two diffrence objects
// function age (age,personAge){
//     return sangeeta password
// }