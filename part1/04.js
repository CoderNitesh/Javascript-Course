// var keyword 

var userName = "harshit"; 
var userName = "Mohit"; // this will overwrite the harshit with mohit 
// userName will print the Mohit not harshit
console.log(userName);

/*
    this type of behaviour is cause an error as we code more 
    thats why we use "let" or "const" which overcome this issue
*/

// var has the function scope 
/*
    In below example firstName is declared using var inside the function
    its easily accessible any where in that function but if you try to 
    access it outside it will throw an Reference Error that firstName is
    not defined
*/

function printName(){
    var firstName = 'nitesh';
    console.log(firstName)
}

printName()
// console.log(firstName);
