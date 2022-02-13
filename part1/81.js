function hello(){
    console.log("hello world");
}

// javascript function ===> function  + object

console.log("give name of the function: ", hello.name);

// you can add your own properties 
// hello.myOwnProperty = "very unique value";
// console.log("you can set you own property using .myOwnProperty ", hello.myOwnProperty);

// name property ---> tells function name;

// function provides more usefull properties.


// console.log(hello.prototype); // {} given a empty object where  we can store the key value pair related our function


// only functions provide prototype property

// we can set the key value pair
hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.sing = function(){
    return "lalalla";
};

console.log(hello.prototype)
console.log(hello.prototype.sing()); // calling the method