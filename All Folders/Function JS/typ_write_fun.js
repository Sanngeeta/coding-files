

(function(str1,str2){
    console.log(str1===str2)
    })("kumar","kumar");
    

function addNumbers(parameter1, parameter2) {

    // code to be executed
    
    }
    
addNumbers(argument1 , argument2);





// Function Declaration


function getSum(num1, num2) {

    var total = num1 + num2;
   
    return total;
   
   }
   



var getSum = function(num1, num2) {

var total = num1 + num2;

return total;

};






var getSum = function(num1, num2) {

    var total = num1 + num2;
   
    return total;
   
   };
   
    
   
   console.log(getSum(5, 10)); // 0utputs: 15
   
    
   
   var sum = getSum(7, 25);
   
   console.log(sum); // 0utputs: 32
   
   
   









//    Self-Invoking Functions ( Immediately invoked function expression)

//    You have to add parentheses around the function to indicate that it is a function expression:
   
   
   (function myName () {
   
    var x = "Hello!! Nayak";  // I will invoke myself
   
    console.log(x);
   
   })();
   
    
   
   // Output :
   
   // Hello!! Nayak

