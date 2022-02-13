/*
    Primitive data types
        string "harhit"
        number 2, 4, 5.6 
        booleans 
        undefined
        null 
        BigInt
        Symbol
*/

// String
let firstName = "harshit";
console.log("Type of FirstName: ", typeof firstName);

// convert string to number. 
let myStr = +"34";
console.log("Convert the string to number: ", typeof myStr, myStr);

let numberAsString = '3333'
let newNumber = Number(numberAsString);
console.log("Convert the string to number: ", typeof newNumber, newNumber)

// Number
let age = 22; 
console.log("Type of Age: ", typeof age, age);

// convert number to string. 
age = age + "";
console.log("Convert number to string: ", typeof age, age);

let stringAsNumber = 32
let newString = String(stringAsNumber);
console.log("Convert number to string: ", typeof newString, newString)



