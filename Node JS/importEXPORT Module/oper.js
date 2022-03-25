const add=(a,b)=>{
    return a+b

} //her ek file jo hoti h wo ek module hoti hai 
//ye hamri ek privite module hai 

//esko agr hame use karna hai dusri file me to pehele hame 
//ese export karna padega yani ki privete se public karna padega

const name ='sangeeta'
// module.exports=add

const sub=(a,b)=>{
    return a-b
}



const mult=(a,b)=>{
    return a*b
}

const div=(a,b)=>{
    return a/b
}

// module.exports.add1=add // exports ke bad ham objet ka nam kuch bhi de sakte hai bas hamra = ka samne wala object same hona chahiye.
// module.exports.sub=sub

//esme bhi ham ek bar me sare func ko ek br me likh sakte h with help of object disturchung
module.exports={sub,name,add,mult,div}