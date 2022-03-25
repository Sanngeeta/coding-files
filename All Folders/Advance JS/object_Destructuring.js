// // const bioData={
// //     name:"sangeeta",
// //     age:26,
// //     deg:"3rd year compelete"
// // }
// // console.log('my name is',bioData.name)


// var bioData={
//     name:"sangeeta",
//     age:26,
//     deg:"3rd year compelete"
// }
// var {name,age,deg}=bioData //letril kar ke ham properties ki velu ko eccess kar sakte hai bina attract kiya
// console.log(bioData.name)
// console.log(name)
// console.log(age)
// console.log(deg)

// // var {name:myName,age,deg}=bioData //letril kar ke ham properties ki velu ko eccess kar sakte hai bina attract kiya
// //                             //we can change our keys if we want for ex:-              //we can change our keys if we want for ex:-
// // console.log(myName)         //name:myName


// // 2nd method for destructuring

// // var a,b
// // ({a,b}={a:10,b:20}) //jab ham yese likhte hai to hame ()pranthis lena must hota hai
// // console.log(a)
// // console.log(b)


// // var {a,b}={a:10,b:20} // agar ye tarah likhte hi to hame ()dene ki jarurt nhi hai 
// // console.log(a)
// // console.log(b)


// // var {a,b=20}={a:10} //ye defoult hota hai h 
// // console.log(a) //10
// // console.log(b) //20


// // var{a:y=40,b:z=20}={a:10}
// // console.log(y) //10
// // console.log(z) //20




// var bioData={
//     name:"sangeeta",
//     age:26,
//     deg:"3rd year compelete"
// }
// function show ({name,age,deg}){ 
// // console.log(bioData.name)
//     console.log(name)
//     console.log(age)
//     console.log(deg)
// }
// show(bioData)

// const arry=['nam','come','python','js']
// let[a,b,c,d]=arry
// console.log(a)


var bioData={
    name:"sangeeta",
    age:26,
    deg:"3rd year compelete"
}


function num({name,age,deg}){ 
console.log(age)
}
num(bioData)