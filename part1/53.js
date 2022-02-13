/*
    Param Destructuring 
*/

const person = {
    firstName: "harshit",
    gender: "male",
    age: 500
}

function printDetails({firstName, gender, age}){
    console.log(firstName);
    console.log(gender);
    console.log(age);
}

printDetails(person);