// what new keyword do 
// 1.) create empty object and refer this to that empty object = {}
// 2.) return that empty object {} 
// 3.) its create the relation between prototype and __proto__ 
//     itself no need to write Object.create(<functionName>.prototype) 

// __proto__ 
// // official ecmascript document
// [[prototype]]


/*
    how to know now which function should call using new keyword
    for that the name convention is the CapitalFirstLetter ex. CreateUser over createUser
*/
// constructor function 
function CreateUser(firstName, lastName, email, age, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}
CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
};
CreateUser.prototype.is18 = function (){
    return this.age >= 18; 
}
CreateUser.prototype.sing = function (){
    return "la la la la ";
}


const user1 = new CreateUser('harshit', 'vashsith', 'harshit@gmail.com', 18, "my address");
const user2 = new CreateUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
const user3 = new CreateUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
console.log(user1);
console.log(user1.is18());