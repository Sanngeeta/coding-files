const yjmdButton=document.querySelector("#yjhd")
const znmdButton=document.querySelector("#znmd")
const showResult=document.querySelector("#output")

const url ="https://mock-practice.prakhar10v.repl.co/bollywood?name="

const yjmdValue=yjmdButton.innerText
const znmdValue=znmdButton.innerText


yjmdButton.addEventListener('click',()=>callAPI(yjmdValue))
yjmdButton.addEventListener('click',()=>callAPI(znmdValue))


function callAPI(name){
    fetch(url+name)
    .then(res=>res.json())
    .then(data=>{
    showResult.innerText=(data.message)


    })

}