// map method 
const numbers = [3,4,6,1,8];

const squareNumber = numbers.map((number, index)=> number*number);
console.log(squareNumber);

const users = [
    {firstName: "harshit", age: 23},
    {firstName: "mohit", age: 21},
    {firstName: "nitish", age: 22},
    {firstName: "garima", age: 20},
]


const userNames = users.map( user => user.firstName )

console.log(userNames);