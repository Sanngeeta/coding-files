//OS Module in node js(Operating System)

//The os module provides operating system-related utiity methods and properties.it can 
//be accessed using.

const os=require('os')
console.log(os.arch()) //es method ka use kar ke ham pata kar sakte hai ki ham kon sa version(bit) use kar rahe hai .

//freemem() ka use ham apne sysytem me kitna memory baki h uske liye karte hai
const freeMemory=os.freemem() //emse hame hamari memoroy bits me milsti hai 
console.log(`${freeMemory/1024/1024/1024}`) //bits convert in GHz(GB) bits so we can do it this method.
//1.1024(Kilobyte) 2.1024(Megabyte) 3.1024(Gigabyte) me karega
//output me ayega ki kitna memory hamre system me baki hai

//totalmem() eska use ham eliye karte h ki hamre system me total memroy kitani h wo batata h
const totalMemory=os.totalmem()
console.log(`${totalMemory/1024/1024/1024}`)


// os.hostname()(deasktop ka naam) agar host ka naam janan hai h to ye use karte hai
console.log(os.hostname()) //es method ka use kar ke ham pata kar sakte hai ki ham kon sa version(bit) use kar rahe hai .


// os.platform() kon sa sofware use kar rahi hu like windwo or linx
console.log(os.platform())

os.tmpdir() //tmpdiry floder kaha h ye pata karne ke liye
console.log(os.tmpdir())

//konsa operting system use kar rahe hai
console.log(os.type())


console.log(os.release())

console.log(os.networkInterfaces())

console.log(os.uptime())

// console.log(os.release())


