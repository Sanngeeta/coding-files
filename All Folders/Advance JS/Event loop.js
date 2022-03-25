// Event loop
//Execution stack
//web APIS
//Massage Queuery

//event loop me yh hota hota he ki jo hamra kaam h wo rukna nhi chahiye 
const fun2=()=>{ 
    setTimeout(()=>{ //web API me hamra setTimeout pass kiya jata hai taki wo uska time he wo background me chalta rahe 
        console.log('fun2 is starting-')

    },3000)
}
const fun1=()=>{
    console.log('fun1 is statring')
    fun2()
    console.log('fun1 is ending')
}
fun1()
//JO hamra setTimeout hai wo jab apne time finish kar leta hai to wo jakr Message queue me jakr save ho jata hai agr or bhi hota to bhi esi me akr save ho jata he
//Message queue matlab one by one


//event loop ka kaam he massage queue me chack karna ki jo bhi kaam message queue me rakha tha use kab mujhe execution stack me rakhna hai