
// Coding: Create a stock profit or loss calculator. Take name of stock and buying price of the stock as input from the user. Get the current price of the stock from the following API –
 
// https://stock-api.desaihetav.repl.co/current-price/STOCK_ID](https://stock-api.desaihetav.repl.co/current-price/)

// (instead of STOCK_ID in the url replace it with the input which is received from the user for e.g RELIANCE) 
// Follow-up: Change the color of the message shown on the screen depending on profit(green color) or loss(red color) 
// (Done using Vanilla JS on VSCode)

// Conceptual:
// ->  In the label tag what can be passed into its for attribute how is it related to the input section? 
// -> Explain the step by step working of Fetch API along with promises
// -> What you like about React? You solved the questions using Vanilla JS then asked the reason of why not using React JS to solve it
// (Raj spoke about the declarative strategy used in React)

// Feedback: Quick error solving skills by Raj and understanding the question asked before coding the solution. --> --> --> -->


// const buyingPrice=document.querySelector("#buyingPrice")
// const fecthBtn=document.querySelector("#fecthApi")
// const output=document.querySelector("#price")

// // const url="https://stock-api.desaihetav.repl.co/current-price/"


// // const byingPriceCost=buyingPrice.value
// // const serverApi=url+buyingPrice
// // // console.log(serverApi)

// fecthBtn.addEventListener('click',()=>{
//     fetch(serverApi).then((resp)=>{
//         return resp.json()
//     }).then((data)=>{
//         // output.innerText=data.current_price
//         console.log(data)

//     })
// })















// function fetchUrl(input){
//     return url+input
// }

// function fetchAPI(){
//     var stockName=buyingPrice.value
//     stockName=stockName.toUpperCase()
//     fetch(fetchUrl(stockName))
//     .then(response=>response.json())
//     .then(json=>console.log(json))
    
// }

// fecthBtn.addEventListener('click',fetchAPI)



const fecthBtn=document.querySelector("#fecthApi")
const output=document.querySelector("#price")

const url ="https://stock-api.desaihetav.repl.co/list"

fecthBtn.addEventListener('click',()=>{
    fetch(url)
    .then((res)=>{
        return res.json()
    
    }).then((data)=>{
        data.data.map(item=>{
            output.innerHTML+=`<li>${item.id} - ${item.name}</li>`


        })
     
        
    }).catch((error)=>{
        output.innerText="data not found"
    })

})
