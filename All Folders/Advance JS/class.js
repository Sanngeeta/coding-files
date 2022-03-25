// Class

// JavaScript classes introduced in ECM script 2015 or ES6,Classes are in 
// fact "special function"

// // There are tow way to difine class in js using keyword
// 1.class Declaration
// 2. class Expression

// class declaration
// class class_name{
//     constructor(){
//         Properties    //body
// consol
//     }
//     Methods
// }

// The constructor method is a special method for creating and initializing an object created with in class.Thre can be only one speacil method the name"constructor" in a class 

// EX:-
// class Mobile{  //class ka jo name hota hai uska first letter capital likhna chahiye
//     constructor(){   //
//         this.model="Galaxy"

//     }
//     show(){ return this.Mobile+"Price 3000"}

// }
// var nokia = new Mobile()



class Mobile{  //class ka jo name hota hai uska first letter capital likhna chahiye
    constructor(){   //
        this.a=12
        this.show=function(){
            // Instance member 
            return "instance method"

        }

    }
    // prototype member
    display(){
        return "prototype method"
    }

}
var nokia = new Mobile()
console.log(nokia.a)
console.log(nokia.show())
console.log(nokia.display())