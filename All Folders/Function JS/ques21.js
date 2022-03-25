function is_equal_lenth(str1,str2){
    if(str1.length===str2.length){
        console.log("Both name length is equal:-",str1,str2)
        
    }else if (str2.length>str2.length){
        console.log("Greater length",str1)
    }
    else{
        console.log("less length",str2)
    }
}
var a=require("readline-sync")
var num1=a.question("Enter the first name: ")
var num2=a.question("Enter the second name: ")
is_equal_lenth(num1,num2)