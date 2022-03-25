const n=require("readline-sync");
var name=n.question("Enter the name:");
var string="";

for (let i=name.length-1; i>=0;i--){
    string=string+name[i]

}
if (name===string){
    console.log("its palindrome string")


}
else{
    console.log("its not palindrome string")
}