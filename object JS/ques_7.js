
// Output :-

// myDict= { 1: 'NAVGURUKUL', 2: 'IN',
// 3: { 'B' : 'To', 'C' : 'DHARAMSALA' } }

const myDict= { 1: 'NAVGURUKUL', 2: 'IN',
3:{
'A' : 'WELCOME', 'B' : 'To', 'C' : 'DHARAMSALA' } }
    delete myDict[3]["A"];

 console.log(myDict)
