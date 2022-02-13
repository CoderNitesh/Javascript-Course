
const user1 = {
    firstName : "harshit",
    age: 8,
    about: function(){
        console.log(this.firstName, this.age);
    }
}

// don't do this mistake 

// user1.about(); // this will work beacause while calling this will set to that object

// when we refer over calling that function this will set to window thats why we get undefined
// const myFunc = user1.about;
// myFunc();

// const myFunc = user1.about.bind(user1);
// myFunc();
