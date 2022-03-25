// // // Import events module
// // var events = require('events');

// // Create an eventEmitter object
// // var eventEmitter = new events.EventEmitter();
// // console.log(eventEmitter)



// //Node.js has a built-in module, called "Events"
// // Whare you can create-,fire and listen for your own events.
// //EX 1- Reagistring for the event to be fird only one time using once.
// //Ex2-Create an event emitter instance and register a couple of callbacks.
// //EX 3- Reagistering for the event with calllback parameters



// // // Import events module
// const EventEmitter=require('events')
// const event=new EventEmitter() //new class banya hai object ka 

// //how to create won event //khud ka event banana

// // event.on('sayMyName',()=>{ //callback ka use kiya hai 
// //     console.log('Your name is sangeeta') 

// // })
// // event.on('sayMyName',()=>{ 
// //     console.log('Your name is Arohi')//node me ham ek event se maltipales function ko call kar sakte hai

// // })
// // event.on('sayMyName',()=>{ 
// //     console.log('Your name is Paswan')

// // })
// // event.emit('sayMyName')




// //Page ka stutse code chack karne ke liye
// event.on('checkPage',(sc,msg)=>{
//     console.log(`status code is ${sc} and the page is ${msg}`) //event ko listen krna

// })
// // event.on('checkPage',)
// event.emit('checkPage',200,'ok') //event




// Import events module
var events = require('events');

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event handler as follows
var connectHandler = function connected() {
   console.log('connection succesful.');
  
   // Fire the data_received event 
   eventEmitter.emit('data_received');
}

// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);
 
// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function() {
   console.log('data received succesfully.');
});

// Fire the connection event 
eventEmitter.emit('connection');

console.log("Program Ended.");