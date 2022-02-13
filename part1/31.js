// use const for creating array

// heap memory ["apple", "mango"] 0x11

const fruits = ["apple", "mango"]; // 0x11
console.log('Fruits before pushing: ', fruits);

// mutate the array evene if the array created using the const
fruits.push("banana");
console.log('Fruits after pushing: ',fruits);
