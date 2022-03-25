console.log("WORLD_web_OLA")
const allUser=require("readline-sync")

function driveSearch(){
    let vehicleName=["Cab","Mini cab","Prime cab","Auto"]
    let vehicleColoer=["White","Black","Blue","Red"]
    let vehicleNumber=["MH0075","MH2065","MH3465","MH0905"]
    for(i=0;i<vehicleName.length;i++){
        console.log(i+1,vehicleName[i])
        console.log("Car coloer ",vehicleColoer[i])
        console.log("Car Number ",vehicleNumber[i])
        console.log()
    }
    const user=require("readline-sync")
    const choseVehicle=user.question("Select your cab: ")
    return choseVehicle
 
    
}

function rederDetails(){
    let rederName=["Vikas singh","Gopal chorshiya","Hari Ram","Ranjeet"]
    let phoneNumber=["0000089881","9302795801","8701324858","6575897268"]
    let Rating=[7,8,4,6]
    for(i=0;i<rederName.length;i++){
        console.log(i+1,"Rider Name",rederName[i])
        console.log("Mobile Number-",phoneNumber[i])
        console.log("Rating-",Rating[i])
        console.log()
    }
    const rider=require("readline-sync")
    const riderDetails=rider.question("Selcet the Rider:")
    return riderDetails
}  


function cab_fare(rate){
    cab_fare=rate*10
    console.log("Total fare Rs/",cab_fare)
}

function paymentMode(){
    payment=["cash","UPI"]
    for(k=0;k<payment.length;k++){
        console.log(k+1,payment[k])}
        
        const num=require("readline-sync")
        paymode=num.question("Enter the payment mode: ")
        pay=paymentMode[paymode-1]
        return paymode

}

const user=require("readline-sync")
const pikupLoaction=user.question("Enter your pickup location (You need to mention the complete address.")
const dropLoaction=user.question("Enter your drop loaction: ")
let randomNumber=(Math.random()*100)
console.log("Your location distance",randomNumber)
cab_fare([7,8,9,10,5])
driveSearch()
rederDetails()


const confimationBooking=user.question("Are you want confim your booking- yes/no:" )
if (confimationBooking=="yes"||confimationBooking=="y"){
    let rendomNumberOTP= Math.floor(Math.random()*20000,);


    console.log("Your OTP NUmber=",rendomNumberOTP)
    console.log("Please share with your Driver!")
    const cancellation=user.question("Do you want cancel your booking y or n:")
    if (cancellation=="n"){
        pay=paymentMode()
        console.log("Your payment mode",pay)
        

        const tarnstion=user.question("Your tarnstion done-y/n")
        if (tarnstion=="y"){
            console.log("Done and Thank you")
            const feedbackRating=user.question("Please enter your rating 1 to 5: ")
            Rating=feedbackRating/2          
            console.log("Driver new Rating",Rating)
        }else{
            console.log("first you have to pay payment ")
        }

    }else{
        console.log("Thank you for using")
    }

}else{
    console.log("OK thank you for visiting")
}
// jab aap type of ride dikha rhe ho tb car colour,car number nhi dikhna h
// please understand by some else what is project how we have to do





// Step 5: To start a ride enter your pickup location (You need to mention the complete address. Like: Indra Gandhi Airport, Delhi railway station, or else you can enable the location access in your mobile).

// Step 6: After that, enter your drop location.

// Step 7: You need to select a cab, according to your convenience, from the cabs available close to you. For example: prime, India, mini and Sedan.

// Step 8: After selecting a cab, there will be two options to choose from: Ride later and Ride now. If you want to book an advance Ola ride, you need to tap the 'Ride later' option.

// Step 9: Click on 'Ride now' to book your ride.

// Step 10: You will instantly get confirmation of the driver and its details on your mobile phone.

// Step 11: In a few seconds you will see the en-route option on the map. Through it, you can track your driver.

// You can also use your OLA money for the ride or else you can pay in cash after the completion of your ride.
