const obj1 = {
    key1: "value1",
    key2: "value2"
}

// __proto__

// offical ecmascript documentation 

// [[prototype]]

// __proto__ , [[prototype]] both are same but "prototype" is different from this two



// prototype    

const obj2 = Object.create(obj1); // {} this will create an empty object
obj2.key3 = "value3";

obj2.key2 = "unique";
console.log(obj2);

// console.log(obj2.__proto__);

