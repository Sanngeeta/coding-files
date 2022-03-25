// # num=int(input("enter the number"))
// # sum=0
// # i=1
// # while i<num:
// #     if num%i==0:
// #         sum=sum+i
// #     i=i+1    
// #     if num==sum:
// #         print("Perfact Number=",num)
// #     else:
// #         print("Its Not Perfact=",num)

var a=require("readline-sync")
var num=a.question("Enter the number:")
function PerfactNumber(num){
    sum=0
    for (i=0;i<num;i++){
        if (num%i==0){
            sum=sum+i
        if(num==sum){
            console.log("Perfact Number-",num)
        }else{
            console.log("Not perfact-",num)
        }
        }
    }
}
PerfactNumber(num)