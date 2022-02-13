// for in loop in array
const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"];
const fruits2 = [];

for(let index in fruits){
    console.log(index)
    fruits2.push(fruits[index].toUpperCase());
}
console.log(fruits2);

/*
    in for in loop iterate the over using the index of given array(array which provided)
*/