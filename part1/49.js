/*
    Lexical Scope 

    Lexical Scope meanse if i create the variable
    and if i want to access that variable then till 
    where i can access it or the variable where it 
    is present.


    in simple words if i create the variable with name var1 
    inside the function myApp then that function myApp is 
    the lexical environment of that var1 variable
    that meanse i cant access it outside that function myApp
*/


const myVar = "value1";

function myApp(){

    function myFunc(){
        // const myVar = "value59";
        const myFunc2 = () =>{
            console.log("inside myFunc", myVar);
        }
        myFunc2();
    }


    console.log(myVar);
    myFunc();
}

myApp();

