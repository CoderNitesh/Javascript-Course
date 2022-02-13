function about(hobby, favMusician){
    console.log(this.firstName, this.age, hobby, favMusician);
}

const user1 = {
    firstName : "harshit",
    age: 8 
}
const user2 = {
    firstName : "mohit",
    age: 9
}

/*
    call and apply both are same in terms of functionality
    even apply insidily use call only the only difference 
    is while passing the paramters.

    while bind return the function which we can execute letter
    the syntax is same as call
*/
// call
console.log('using call')
about.call(user1, 'riding', 'football')
about.call(user2, 'swimming', 'football')

// apply
console.log('using apply')
about.apply(user1, ["guitar", "bach"]);

// bind
console.log('using bind')
const func = about.bind(user2, "guitar", "bach");
func();
