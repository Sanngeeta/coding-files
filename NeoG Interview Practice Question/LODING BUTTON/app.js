const btn=document.querySelector('#loding')
const lodingText=document.querySelector("#text")
const text=document.querySelector("#show-text")


btn.addEventListener('click',()=>{
    lodingText.style.visibility=`hidden`
    text.innerText="Welcome to my page !"
    text.style.color="green"
})