// <!-- Create an Input Element, which shows a display message according to the Input text with the click of a button. If you type - 
// "Tanvi" - then show, "She is the best CEO ever!"
// "Tanay" - then show, "He is our FUNNY mentor!"
// "Swapnil" - then show, "He helps us CONQUER jobs!" -->
// <!-- "Akanksha" - then show, "She is our CHEERFUL Interviewer!" -->


const inputText=document.querySelector("#text-input")
const button=document.querySelector("#btn")
const result=document.querySelector("#show-output")

function cilickHandler(){
    userInput=inputText.value
    if (userInput==="Tanvi"){
        result.innerText=("She is the best CEO ever!")
        
    }else if (userInput==="Tanay"){
        result.innerText=("then show,He is our FUNNY mentor!")
    }else if (userInput==="Swapnil"){
        result.innerText=("then show, He helps us CONQUER jobs!")


    }else if (userInput==="Akanksha"){
        result.innerText=("then show, She is our CHEERFUL Interviewer!")
    }else{
        result.innerText=("not vaild input")


    }
}


button.addEventListener('click',cilickHandler)