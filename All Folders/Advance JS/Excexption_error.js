// try{
//     add()
//     console.log("skipped code")
// }
// catch(e){
//     // console.log("message:"+e.message)
//     // console.log("Name:"+e.name)
//     // console.log("Stack:"+e.stack)
//     console.log("Function is not Defind ") //ceacth error ko hendel karta hai

// }




// //finally
// try{      // agr ecexption bane to user ko erroe dikhna chahiye file bane file close ho jaye
//     add()
//     console.log("skipped code")
// }
// catch(e){   // catch block ka code jab hi run hota hai jab ecxeption banta hai other wise run nhi hota hi

//     console.log("Function is not Defind ") //ceacth error ko hendel karta hai(ecepxtion nhi banta to user apna work kare or file close ho jaye)
                                          

// }
// finally{    
//     console.log("get executed whether thre is exception or not ")              //finally block ke adnar wo code likha jata ha jo jiska run hona
//                      // must hota hai chahe ecexption ho ya nhi ho.//EX agr koi file kholi hai to jaruri hai use close karna eliye yese code ham finally me likhte hai

// }


//Throw
//
function getRect(w,h){
    if (isNaN(w)||isNaN(h)){
        throw "Prameter is not a number"
    }
}
try{
    getRect(10,'A')
  
}
catch(e){
    console.log(e)

}
console.log("'I have no idea what going pon abve")