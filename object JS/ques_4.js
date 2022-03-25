
// if input is “name” then output will be “exist”

// If input is “class” then output will be “not exists”.

var dict={"name":"Raju", "marks":56}
var a=require("readline-sync")
var num=a.question("Enter the property name::")

for (i in dict){
    if (i==num){
        console.log("exist")
        break

    }else{
        console.log("not exists")
        break
    }
}
