/*
    hoisting 

    hoisting means the anything we access before the intialization
    like here hello is the function which calls before the 
    actually the function creation

    but this works only with the function expression and 
    variables created by the var keyword 
*/
helloFn();

function helloFn(){
    console.log("hello world function");
}

console.log('before the initializing: ', hello);
var hello = "hello world";
console.log('after the declaring: ', hello);