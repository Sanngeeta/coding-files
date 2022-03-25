// const perOne=(friend,callfrnd)=>{
//     console.log(`I am busy now.I am talking to ${friend}.I will call you back.`)
//     callfrnd() //callback 

// }

// const perTwo = () =>{ // ek function ke under ek or finction use karna callback hota hai like we can tell them inner function is callback function hota hai
//     // callback function me jab ek function call kar ke apne processc finish kar leta hai to dusra function ko callback karta hai
//     console.log(`hey what's up. I will call back you dekha`)
// }

// perOne("Paswan",perTwo)


// const one=()=>{
//     console.log('MY data is hear');
// }




// // function
// function greet(name, callback) {
//     console.log('Hi' + ' ' + name);
//     callback();
// }

// // callback function
// function callMe() {
//     console.log('I am callback function');
// }

// // passing function as an argument
// greet('Peter', callMe);







function greet(name,callback){
    console.log('Hello ' + name );
    callback()
}
function callme(){
    console.log('I am callback function');
}

greet('Navgurukul',callme)