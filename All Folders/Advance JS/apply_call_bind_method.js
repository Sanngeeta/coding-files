let name={
    firstname:"Sangeeta",
    lastname:"Paswan",
    printFullName:function(){
        // console.log(this.firstname+" "+this.lastname)
        
    }
}
name.printFullName()
let name2={
    firstname:"Arohi",
    lastname:"Rawat"
}
name.printFullName.call(name2)


// const youtuber={
//     name:"Sangeeta Technical",
//     content:"Programming",
//     feature:function(){
//         console.log(`very frindly way of technig.${this.name} is my fav${this.content} channel`)
//     }
// }

// //calling way
// // youtuber.feature()
// const youtuber2={
//     name:"Arohi Technical",
//     content:"Programming",
// }
// youtuber.feature.call(youtuber)


// const youtuber={
//     name:"Sangeeta Technical",
//     content:"Programming",
//     feature:function(rating,support){
//         console.log(`very frindly way of technig.${this.name} is my fav${this.content} channel and i love to giv ${rating} star.please ${support} ${this.name} channel`)
//     }
// }

// //calling way
// youtuber.feature(5,"subscribe")
// const youtuber2={
//     name:"Arohi Technical",
//     content:"Programming",
// }
// youtuber.feature.call(youtuber,6,"subscribe")





// //Apply Method 

// //It same like as call method it's have only one diffrence Bitween 
// //the apply() method takes arguments as an arry.


// const youtuber={
//     name:"Sangeeta Technical",
//     content:"Programming",
//     feature:function(rating,support){
//         console.log(`very frindly way of technig.${this.name} is my fav${this.content} channel and i love to giv ${rating} star.please ${support} ${this.name} channel`)
//     }
// }
// //apply ()
// youtuber.feature(5,"subscribe")
// const youtuber2={
//     name:"Arohi Technical",
//     content:"Programming",
// }
// youtuber.feature.apply(youtuber[6,"subscribe"])

// //It will give max number but ye array pr work nhi karta hai 
// let max1=Math.max(1,5,3)
// console.log(max1)

// // if we want max no in array so we can use applly method


// let arrMax=Math.max.apply(null,[3,6,9,10])
// console.log(arrMax)







//bind() Method
//bye this method ,we can bind object to a common function ,so that the function gives result when its need


// const youtuber={
//     name:"Sangeeta Technical",
//     content:"Programming",
//     feature:function(rating,support){
//         console.log(`very frindly way of technig.${this.name} is my fav ${this.content} topic .`)
//     }
// }


// // youtuber.feature()
// let youtuberFun=youtuber.feature
// youtuberFun()

// let youtuberFun2=youtuber.feature.bind(youtuber)
// youtuberFun2()
//The bind () method takes an object as an first aruments and create a new funct





// const youtuber={
//     name:"Sangeeta Technical",
//     content:"Programming"
// }



// const youtuber1={
//     name:"Sangeeta Technical1",
//     content:"Programming1"
// }


// const youtuber2={
//     name:"Sangeeta Technical2",
//     content:"Programming2"
// }



// function feature(rating){
//         console.log(`very frindly way of technig.${this.name} is my fav ${this.content} topic . and i love to give ${rating} star.`)
//         }
// let you1=feature.bind(youtuber)

// you1(5)

// let you2=feature.bind(youtuber2)

// you2(8)

// let you3=feature.bind(youtuber1)

// you3(6)






































































