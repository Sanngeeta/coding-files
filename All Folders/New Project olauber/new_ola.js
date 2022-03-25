console.log("welcome to world wab ola:-")
let readlinesync=require("readline-sync")
const fs=require("fs")
let file=fs.readFileSync("ola_data.json")
let data=JSON.parse(file)

function cabSearch(){
    serial=0
   for(cab=0;cab<data.length;cab++){
       if(data[cab].olamodel=="cab"){
           console.log(serial+1,data[cab])
           serial++}}}
function TaxiSearch(){
    serial=0
    for(taxi=0;taxi<data.length;taxi++){
        if(data[taxi].olamodel=="taxi"){
            console.log(serial+1,data[taxi])
            serial++}}}
function AutoSearch(){
    for(atuo=0;atuo<data.length;atuo++){
        if (data[atuo].olamodel=="auto"){
            console.log(serial+1,data[atuo])
            serial++
        }}}


function paymentMode(){
    payment=["cash","UPI"]
    for(k=0;k<payment.length;k++){
        console.log(k+1,payment[k])}
        
        const num=require("readline-sync")
        paymode=num.question("Enter the payment mode: ")
        pay=paymentMode[paymode-1]
        return paymode
    }
let allUser=require("readline-sync")
let currentLoaction=allUser.question("Mention your current loaction:-")
let dropLoaction=allUser.question("Enter your droping location:-")
const oldmodel=allUser.question("which vehicle you want:-\n1.cab\n2.taxi\n3.atuo:- ")
console.log()
console.log("Your vehicles are:-")
if (oldmodel==="cab"){
    cabSearch()}
if (oldmodel==="taxi"){
    TaxiSearch()}
if(oldmodel==="auto"){
    AutoSearch()}

let randomNumber=(Math.random()*100)
console.log("Your location distance",randomNumber)
const rider=require("readline-sync")
    const riderDetails=rider.question("selecte your driver name:-")
        console.log(data[riderDetails-1])

const confimationBooking=rider.question("Are you want confim your booking- yes/no:" )
if (confimationBooking=="yes"||confimationBooking=="y"){ 
        const otp=Math.floor(10000 * Math.random())
        console.log("Your OTP is:-",otp)
            
        const otpnumber=rider.question("Enter your OTP:-")
        if (otpnumber==otp){
            console.log("Accpted OTP!")
            const cancellation=rider.question("Do you want cancel your booking y or n:")
        if (cancellation=="n"){
            pay=paymentMode()
            if (paymode==2){
                const upi=rider.question("Enter your pin number:-")
                if(upi==4455){
                    const amount=rider.question('Enter your Ride expence Amount:')
                    if (data.price===amount){
                        console.log("your online payment is done:-",amount)
                        console.log('Thank you')
                    }else{
                        console.log('Payment id not rigth')}


                }else{
                    console.log('Inccoret pin number-')}
                    const feedback=rider.question('Please write you feedfack hear-(Good,Bad,Exlent,Other:-)')
                    var k=data.review[feedback]
                    const feedback1=fs.appendFileSync('ola_data.json',k)



            }else{
                const price1=rider.question('Enter your Ride expence Amount:')
                if (data.price==price1){
                    console.log("your payment is done:-",price1)}
                    console.log('Thank you')

                }
                
            
            }    
        }
        }






        function cabSearch(){
            for(i in data){
                if (data[i].olamodel==='cab'){
                    console.log(data[i])}
                if (data[i].olamodel==='taxi'){
                    console.log(data[i])}
                if(data[i]==='atuo'){
                    console.log(data[i])
                }
               
            }
        
        }
// var obj = JSON.parse(jsonStr);


//data add karne ke liye
// fs.appendFileSync("Arohi_Rawat/Bio.txt","Plase like and subscribe to my channel")

















// //         // const feed=require("readline-sync")
// //         // const feedbackRating=feed.question("give your feedback:-")
// //         // let fn=fs.readFileSync("ola_data.json")
// //         // const new_file=JSON.parse(fn)
// //         // for (a=0;a<new_file.length;a++){
// //         //     if(new_file[a]["review"]){
// //         //         fs.appendFileSync("ola_data.json",new_file)
//         //     }
//         // }




// const rider=require("readline-sync")
//     const riderDetails=rider.question("selecte your driver name:-")
//     for(i in riderDetails){
//         if (data[i]["name"]==riderDetails){
            
//         }
//     }
// console.log(data[i])