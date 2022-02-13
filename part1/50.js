// block scope vs function scope 


/*
    Block Scope
    let and const are block scope

    if(true){
        let name = "harshit";
        console.log('Inside the block: ', name);
    }

    console.log(name);
*/
   


/*
    Function Scope
    var is function scope 

*/
function myApp(){
    if(true){
        var firstName = "harshit";
        console.log('Inside the function: ', firstName);
    }

    if(true){
        console.log("still inside function: ", firstName);
    }
    console.log("bc Still inside the function: ", firstName);
}
// console.log('outside the function now: ', firstName)

myApp();
