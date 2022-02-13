// array push pop 

// array shift unshift 

let fruits = ["apple", "mango", "grapes"];
console.log(fruits);
// push 
fruits.push("banana");
console.log("push add value in end of the array: ", fruits);

// pop 
let poppedFruit = fruits.pop();
console.log("pop remove value from end of the array also return it so you can save it in any variable: ", fruits);
console.log("popped fruits is", poppedFruit);

// unshift 
fruits.unshift("banana");
console.log("unshift add value in start of the array: ", fruits);

// shift 
let removedFruit = fruits.shift();
console.log("shift remove value from start of the array also return it so you can save it in any variable: ", fruits);
console.log("shifed fruit is ", removedFruit);