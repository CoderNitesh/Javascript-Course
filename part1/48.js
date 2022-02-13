// functions inside function 
function app(){
    // function expression
    const myFunc = () =>{
        console.log("hello from myFunc")
    }
    
    // function declaretion
    const addTwo = (num1, num2) =>{
        return num1 + num2;
    }

    // arrow function
    const mul = (num1, num2) => num1* num2;

    console.log("inside app");

    // calling first Function
    myFunc();

    // calling second Function
    console.log(addTwo(2,3));
    
    // calling third Function
    console.log(mul(2,3));
}
app();