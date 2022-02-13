// for loop in array 

let fruits = ["apple", "mango", "grapes", "banana"];

console.log("fruits length: ", fruits.length);
console.log("Accessing the value from array using length: ", fruits[fruits.length-2]);

let fruits2 = [];
for(let i=0; i < fruits.length; i++){
    fruits2.push(fruits[i].toUpperCase());
}

console.log("Fruits2 which create using for loop: ", fruits2);