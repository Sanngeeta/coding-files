
// // // const nameArray=["sangeeta","sanjna","mona","mamta","komal","kajal",
// // // "nisha","alima","preeti","roshni"]
// // // const k=require("readline-sync")
// // // const letter=k.question("Enter the first letter:")
// // // const startsWithN=nameArray.filter((name)=>name.startsWith(letter))
// // // // console.log(startsWithN)
// // // for (i in startsWithN){
// // //     console.log(startsWithN[i])
// // // }

const { copyFileSync } = require("fs")

// // // const array1 = ['sangeeta', 'sonu', 'sonam','pooa'];

// // // array1.map(element =>
// // // console.log(element));




// // // num=["Arohi","Arman","Rahul","Nisha"]

// // // num.map(ArrayData=>
// // // console.log(ArrayData)) 


// // // var k=Symbol('symbol')
// // // console.log(k)
// // // // console.log(typeof(k))

// // // array=["sonam","komal","pooja","nisha"]
// // // array.forEach(element => {
// // //     console.log(element)
    
    
// // // });
// // // // console.log(typeof(element))

// // // array=["sonam","komal","pooja","nisha"]
// // // Array.isArray(array)
// // // console.log(array)
// // // console.log(typeof(array))

// // // // Array.isArray([1, 2, 3])


// // num='my name is sangeeta paswan'
// // l=num.toString()
// // console.log(l)
// // var num = 15;
// // var n = num.toString(); 
// // console.log(n)


// // a=[1,2,3,4,5,6,7,8,9,10]
// // k=a.map(num=>num*2)
// // console.log(k)


// a=[1,2,3,4,5,6,7,8,9,10]
// a=['num','mun','soon']
// k=a.reduce((total,value)=>total+value)
// console.log(k)

num='ABCDEF'
k=Array.from(num)
console.log(k)
console.log(typeof(k))