let user=require("readline-sync");
let amount_balnce=50000
var card=user.question("which type of ATM Card do you have :")
if (card=="debitcard" || card=="creditcard"){
    console.log("Please do not Remove you card during Entire Transaction :")
    var language=user.question("Please Select your language :-\nhindi\nenglish:-")
    if (language=="english"){
        console.log("Proecces")
        var pin=user.question("Enter your 4-Digit ATM pin :")
        if (pin==9899){
            console.log("Your account hasbeen proescces")
            var account=user.question("purpose for insert atm-\n1.withdarw\n2.transfer\n3.balance inqury :-");
            if (account=="withdarw"){
                let wit=user.question("enter the amount:-")
                if (wit<=10000){
                    console.log("callect your case",wit,"/-RS")
                    k=amount_balnce-wit
                    const inqury=user.question("Do you want Balance inqury:-")
                    if (inqury=="yes"){
                        console.log("Your Aviable Balance-",k,"/-RS")}
                    else{
                        console.log("Thank you for using this ATM:")}
                    
                    const receipt=user.question("Take a printed receipt , if needed:")
                    if (receipt=="yes" ||receipt=="y"){ 
                        console.log("Your Transaction Suesccsfully")
                    }else{
                        console.log("Thank you")}
            }else{
                    console.log("can't withdrawal amount more than the balance in your account.") }
                
                    
            }else if (account=="transfer"){
                    const name=user.question("enter the account holder name:-")
                    const acc=user.question("enter the your 14 Dgit account number:-")
                    if (acc<=14){
                        console.log("Succesfully taranfer")
                    }else{
                        console.log("chack your account number:-")
                    }

            }else if (account=="balance inqury"){
                console.log("Your avilable balance:-",amount_balnce,"/-RS")}


        }else{
            console.log("Your Pin Number incorrect")}
   
    }else{
        const hindi=require("readline-sync")                   
        const pin1=hindi.question("Apna 4 Aank ka ATM pin number Darj kare:")
        if (pin1==9899){
            console.log("parikiya kar raha hai:-")
            const input=hindi.question("Apna Transaction Chuiniye-\n1.withdarw\n2.transfer\n3.balance inqury :-");
            if (input=="withdarw"){
                let money=hindi.question("Kripye kar apni rashi darj kare:-")
                if (money<=10000){
                    console.log("rashi ko nikal le-",money)
                    const inq=hindi.question("kya ap apne bache huye pese ki janakri chahte ha:-")
                    if (inq=="yes"){
                        console.log("Bacha hua rashi-",amount_balnce-money,"/-RS")
                    }
                    const rec=hindi.question("Apko rasid chahiye kya :-yes/no: ")
                    if (rec=="yes" ||rec=="y"){ 
                        console.log("Apka taranfer safaltapurvak ho gaya hai")
                    }else{
                        console.log("Dhanyevad!")}
                }else{
                    console.log("Ap 1 bar me 10000/-RS se jada nhi nikal sakte hai")}
                

            }else if (input=="transfer"){
                const name1=user.question("Kriype kar apne khata ka naam darj kare:-")
                const acc2=user.question("Apna 14 ank ka number darj kare:-")
                if(acc2<14){
                    console.log("Safaltapurvak ho gaya")
                }else{
                    console.log("Kripya kar apna khata number jache:-")}
                

            }else if (input=="balance inqury"){
                console.log("Bacha hua rashi-",amount_balnce,"/-RS")}
            
            
        }else{
            console.log("Apka pin number galat hai-")}
        
            




        }
  }  
    
