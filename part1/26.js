// intro to arrays 
// reference type 
// how to create arrays

// ordered collection of items 

let numbers = [1,2,3,4];
console.log("Array Numbers: ", numbers);
let mixed = [1,2,2.3, [1,2,2],{name: 'nitesh', age: 21},"string", null, undefined];
console.log("Array Mixed: ", mixed);

let fruits = ["apple", "mango", "grapes"];
console.log("Array Fruits: ",fruits);

// change the value
fruits[0] = "banana";
console.log("Array Fruits Change Little bit: ",fruits);

// type of array
console.log("type of array showes: ", typeof fruits, fruits);

// to check is it really array 
console.log("Check is it really Array or not: ", Array.isArray(fruits));

let obj = {name: 'nitesh', age: 21}
console.log("type of object is also showes: ", typeof obj, obj);
console.log("Check is it really Array or not: ", Array.isArray(obj));

// array indexing 