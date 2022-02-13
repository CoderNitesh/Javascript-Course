// for of loop in array
const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"];
const fruits2 = [];

for(let fruit of fruits){
    console.log(fruit)
    fruits2.push(fruit.toUpperCase());
}
console.log(fruits2);


/*
    in for of loop iterate the over using the value of given array(array which provided)
*/

