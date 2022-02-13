/*
    Rest paramter: takes the seperated number and 
    converted it into the array while the
    spread oprator take the array and spread it out 
*/

function myFunc(a,b,...c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is`, c);
}

myFunc(3,4,5,6,7,8,9);

function addAll(...numbers){
    console.log('numbers send as rest parameter: ', numbers)
    let total = 0;
    for(let number of numbers){
        total = total + number;
    }
    return total;
}

const ans = addAll(4,5,4,2,10);
console.log(ans);