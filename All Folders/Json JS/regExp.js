// var patt = new RegExp("Hello World", "g");
// var res = patt.constructor;

const { exception } = require("console");
const { readFileSync, rename } = require("fs");

// // console.log(res)
// console.log("This is tutorial 46")
// let reg=/harry/g; //This is regular experssion
// let reg=/harry/i;//i it's also flage
// g is global falg
// console.log(reg)
// console.log(reg.source)
// let s="This is great code with harRy and also haRry bhai"
// function to macth expressions
// 1.exec()=this function will return an array for match or null for no math
// harry index 24
// let result=reg.exec(s)
// console.log(result)
// // harry 39 index pr hai
// result=reg.exec(s)
// console.log(result)

// // harry nhi h 3rd time me to eliye null dega
// result=reg.exec(s)
// console.log(result)

// console.log(result.input)
// console.log(result.index)

// // 2.test()-returns true or false
// let result1=reg.test(s)
// console.log(result1)


// 3.macth it will only true if the "reg" is there in the string 

// let reg=/harry/g
// let s="This is great code with harry and also harry bhai"

// let result3=s.match(reg)
// console.log(result3)


// // 4.search()-returns index of first math else-1
// let result4=s.search(reg)
// console.log(result4)


// 5.replace()-returns new replaced string with all the replacement

// let reg=/harry/g
// let s="This is great code with harry and also harry bhai"
// let result5=s.replace(reg,"SANGEETA")
// console.log(result5)