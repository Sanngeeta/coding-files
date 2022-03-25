const path=require('path')
console.log(path.dirname('E:/node PATH/Module.js'))//kis par pr abhi h ham
console.log(path.extname('E:/node PATH/Module.js'))//Extention kon sa h
console.log(path.basename('E:/node PATH/Module.js')) //file name
console.log(path.parse('E:/node PATH/Module.js')) //sab ek bar me karne ke liye

const myPath=(path.parse('E:/node PATH/Module.js'))//property ka name janane ke liye
console.log(myPath.name)