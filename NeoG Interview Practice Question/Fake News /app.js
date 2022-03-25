const textInput=document.querySelector("#news")
const btn=document.querySelector("#btn")
const result=document.querySelector("#output")

const inputNews=textInput.value
btn.addEventListener('click',()=>{
    if (inputNews.includes('Facebook') || inputNews.includes('Whatsapp')){
        result.innerText=("Don't believe things on FB and Whatsapp")
    }else{
        result.innerText="Can you extend this to include telegram as well?"
    }
    
})


// allows its users to perform fast messaging. Now, if we talk about Facebook, it is quite different, it allows its users to share and post their personal moments, feelings and emotions with their friends at the same time along with messaging.