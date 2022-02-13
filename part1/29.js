// how to clone array 

// how to concatenate two arrays

let array1 = ["item1", "item2"];
let array2;

// 1st method.
// array2 = ["item1", "item2"];

// 2nd method (using concat and slice).
// array2 = array1.slice(0).concat(["item3", "item4"]);

// 3rd method
// array2 = [].concat(array1,["item3", "item4"]);

// 4th method (new way spread operator)
let oneMoreArray = ["item3", "item4"]
array2 = [...array1, ...oneMoreArray];

array1.push("item5");

// console.log(array1===array2);
console.log('1: ', array1);
console.log('2: ', array2);
