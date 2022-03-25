const n=require("readline-sync");
var name=n.question("Enter the name:");
var str=""

for(i=name.length-1;i>=0;i--){
    str+=name[i]
    

}

if (name===str){
    console.log(str,"It's polidrom")

}else{
    console.log(str,"It,s not a polidrom")
}

