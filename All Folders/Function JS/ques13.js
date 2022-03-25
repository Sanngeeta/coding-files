// # Write a function named check_numbers which will take two numbers and check if both are even prints “Both are even” else prints “Both are not even”.
function check_number(a,b){
    if (a%2===0 && b%2===0){
        console.log("Both are even")
    }else{
        console.log("Both are not even")
    }
}
check_number(2,4)