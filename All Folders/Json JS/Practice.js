const fs=require("fs");
// Creating a new file//
// fs.writeFileSync("read.txt","welcome to my campaniy,Thank you sangeeta")
// // //it will give update data and remove the pervious data//
// fs.writeFileSync("read.txt","Navgurukul pune ,welcome to my campaniy ")

// // //  We can add anothoer data in our file so we can append the data//
// // fs.appendFileSync("read.txt","how are you i am fine Thank you!")

// //file ko read karane ke liye yese use karte hai //
// // const buf_data=fs.readFileSync("read.txt");
// // console.log(buf_data)
// // // node js incluudes a additional data type called buffer(not available in Browser's javaScript )
// // // Buffer is mainly use to store binary data,
// // // while reading from a file or receiving packets over the network

// org_data=buf_data.toString();
// console.log(org_data)
// // toString method ka use karne se ham data ko string from me read kar sakte hai



// fs.renameSync("read.txt","myFile.txt")
// // file ka name rename kar sakte hai
let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}'; 
const obj=JSON.parse(text)
console.log(obj)
console.log(typeof(obj))