// emove an item by its index position
    
    // Example :-

// let fruits = ['Apple', 'Banana', 'Orange']
 
// let removedItem = fruits.splice(1,2)
// console.log(removedItem)
// // output [‘Apple’, ‘Orange’]



 
// let arr = ['shweta', 'nayak', 'komal', "zeba"]
// console.log(arr[0])              // output 'shweta' the first element
// console.log(arr[1])              // logs 'nayak' the second element
// console.log(arr[arr.length - 1])


// let myFavouriteGames = ["Chess", "Ludo", "Badminton"]
// myFavouriteGames.unshift("Basketball")
// console.log(myFavouriteGames)

// let myFavouriteGames = ["chess", "Ludo", "Badminton", "Basketball", "Carom", "Cricket"]
// let removedItems = myFavouriteGames.splice(3,1)
// console.log(myFavouriteGames)
    


// const cars = [];
// cars[0]= "Saab";
// cars[1]= "Volvo";
// cars[2]= "BMW";
// console.log(cars)

// const fruits = ["Banana", "Orange", "Apple"];
// k=Array.isArray(fruits); 
// console.log(k);    // returns object 

// const fruits = ["Banana", "Orange", "Apple"];

// k=fruits instanceof Array; 
// console.log(k)  // 


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// k = fruits.toString();
// console.log(k)


// const fruits = [1,2,3,4,5,6,7,8,9];
// k = fruits.toString();
// console.log(typeof (k))


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// k = fruits.join("*");
// console.log(k)


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.unshift("Lemon"); 
// console.log(fruits)   // Adds "Lemon" to fruits 

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits[4] = "Kiwi";        // Changes the first element of fruits to "Kiwi" 
// console.log(fruits)


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits[fruits.length] = "Kiwi";          // Appends "Kiwi" to fruits 
// console.log(fruits)




// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");
// console.log(fruits)



// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 2, "Lemon", "Kiwi");
// console.log(fruits)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(1,1);   // Removes the first element
// console.log(fruits) 


// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];

// // Concatenate (join) myGirls and myBoys
// const myChildren = myGirls.concat(myBoys);  
// console.log(myChildren)


// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(2);
// // console.log(citrus)
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(2, 3);
// console.log(citrus)


// const points = [40,30, 10000, 1, 5, 25, 10];
// k=points.sort(function(a, b){return a - b});
// k=points.sort()
// console.log(k)

// const points = [40, 100, 1, 5, 25, 10];
// k=points.sort(function(a, b){return 0.5 - Math.random()});
// console.log(k)


const points = [40, 100, 1, 5, 25, 10];

for (let i = points.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * i)
  let k = points[i]
  points[i] = points[j]
  points[j] = k
} 
console.log(points)