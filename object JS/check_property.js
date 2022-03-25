// // .hasOwnProperty() returns true or false if the property is found or not.


// // var myDetails={

// //    "name":"kumar",

// //    "age":24

// // }

// // console.log(myDetails.hasOwnProperty("name"));



// var person={"name":"gouri","surname":"maity","age":37}

 

// for (person_details in person){

// console.log(person_details+ "= "+person[person_details]);

// }



const campus={"camp_name":"Bangalore_campus","establish":2016,"election":"three_months"}

for(let eachKey in campus){

  console.log(campus[eachKey])

}

// Output: 

// Bangalore_campus

// 2016

// three_months

