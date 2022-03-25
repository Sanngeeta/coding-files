// const a = Array.of(1, 2, 3)
// console.log(a)
// console.log(typeof(a))


// k=Array(12).fill(0)
// console.log(k)

// const a = [1, 2, 3]
// // a //[ 1, 2, 3 ]
// a.length = 5
// // a //[ 1, 2 ]
// // console.log(a)

// const a = [1, 2]
// const b = [3, 4]
// // const c = a.concat(b)
// c=[...a,...b]


// a.find((element, index, array) => {
    // return true or false
    // })
//Array me elements h ya nhi uske liye inka use hota hai return karta he o/p true and false
//.find()
//findIndex()
// //includes()
// a.find(x => x.id === my_id)
// console.log(a)

// const list = ['a', 'b', 'c']
// let i = 0
// do {
// console.log(list[i]) //value
// console.log(i) //index
// i = i + 1
// } while (i < list.length)


// const getFirstUserData = async () => {
//     // get users list
//     const response = await fetch('/users.json')
//     // parse JSON
//     const users = await response.json()
//     // pick first user
//     const user = users[0]
//     // get user data
//     const userResponse =
//     await fetch(`/users/${user.name}`)
//     // parse JSON
//     const userData = await user.json()
//     return userData
//     }


//Self-invoking functions 

// (function(x){
//     console.log(x)
// })('hello my frnds') 


//Promise.all()

// var p1 = Promise.resolve(3);
// var p2 = 1337;
// var p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("foo");
//   }, 100);
// });

// Promise.all([p1, p2, p3]).then(values => {
//   console.log(values); // [3, 1337, "foo"]
// });
