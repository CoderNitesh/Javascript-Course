/*
    undefined
        undefined means if i declare the varible with let and var
        but not initialize it this will be the byDefault undefined.
        if you check the typeof such variable it will show undefined.
*/
let firstName;
console.log("Type of Declaring before Initializing: ", typeof firstName, firstName);
firstName = "Nitesh";
console.log("Type of Declaring after Initializing: ",typeof firstName, firstName);
/*
    null
        and null is what we set while declaring or initialize the 
        variable.
        if you check the typeof such variable it will be the object.
        this is bug or error you can say...!
*/
let myVariable = null;
console.log("Type of null: ", typeof myVariable, myVariable);
myVariable = "harshit";
console.log("Type of after Initializing: ",typeof myVariable, myVariable);
// bug , error.

/*
    BigInt
*/
let myNumber = BigInt(12);
let sameMyNumber = 123n;
console.log("Big-Int Number with BigInt(12): ", typeof myNumber, myNumber);
console.log("Big-Int Number With if n: ", typeof sameMyNumber, sameMyNumber);
console.log("Max safe Integer: ", Number.MAX_SAFE_INTEGER);