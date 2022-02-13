// intro to variables

/*
    variables can store some information
    we can use that information later
    we can change that information later
*/

/*
    1) in javascript we able to create the variable and store the 
    value in it without discribing is it string or number or boolean 
    or any other data type 
    2) some keywords which we use when we create the variable 
    -> var
    -> let
    -> const
    3) in javascript without using this var, let, const keywords you 
    able to make the variable but it affects in ceratain ways further 
    in your code as you write more code 
    4) if you want to avoid such siliy mistakes you can use 
    'use strict' method on top of your code 
    5) 'use strict' method will throw an error when you do siliy mistakes
*/

'use strict';

// declare a variable
var firstName = "Harshit";

// use a variable 
console.log(firstName);

// change value 
firstName = "Mohit";

console.log(firstName);
