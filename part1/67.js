// Sets (it is iterable)
// store data  
// sets also have its own methods
// No index-based access 
// Order is not guaranteed
// unique items only (no duplicates allowed)
const items = ['item1', 'item2', 'item3', "item2"];
const numbers = new Set(); // initialize empty set

// the way to add the data in sets
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(5);
numbers.add(6);
// numbers.add(items);
console.log(numbers);
// console.log(numbers[0]) // cant access like this

// .has property to check is it present or not
// if(numbers.has(1)){
//     console.log("1 is present")
// }else{
//     console.log("1 is not present")
// }

// set is iterable beacause we can use for of loop on it 
// for(let number of numbers){
//     console.log(number);
// }

// practice or use case
const myArray = [1,2,4,4,5,6,5,6];
const uniqueElements = new Set(myArray);
let length = 0;
for(let element of uniqueElements){
    length++;
}
console.log("original array: ", myArray)
console.log("after removing uniqueElements array: ", uniqueElements)
console.log("only unique values length", length);