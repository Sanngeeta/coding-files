var i=0
list=[]
const input=require("readline-sync")
while (i<=2){
    name=input.question("Enter the name:-")
    test=input.questionInt('Enter the unit test marks:')
    preMarks=input.questionInt("Enter the per final marks:-")
    finalMarks=input.questionInt("Enter the final marks:-")
    i++
    

}
list.push(name,test,preMarks,finalMarks)
console.log(list)