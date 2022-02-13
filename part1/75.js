// arrow functions 

/*
    arrow function dont have there own this 
    arrow function takes this from one level up of its sourrounding.
    we cant change this of arrow function even using call method
*/

const user1 = {
    firstName : "harshit",
    age: 8,
    about: () => {
        console.log(this.firstName, this.age);
    }   
}

user1.about(user1);