// while loop in array 
const fruits = ["apple", "mango", "grapes"];
const fruits2 = [];
console.log("Fruits: ", fruits)


let i = 0;
while(i<fruits.length){
    fruits2.push(fruits[i].toUpperCase());
    i++;
}


console.log("Fruits2 created using while loop: ",fruits2);