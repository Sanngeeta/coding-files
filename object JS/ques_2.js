var a=require("readline-sync");
var num=a.questionInt("Enter the number how many times:")
var dic={}
for(i=1;i<=num;i++){
    dic[i]=i**2

}
console.log(dic)