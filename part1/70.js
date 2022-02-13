// optional chaining 

const user  = {
    firstName: "harshit",
    // address: {houseNumber: '1234'}
}



console.log(user?.firstName);
console.log(user?.address?.houseNumber); // Instead give undefined
// console.log(user.address.houseNumber); // throw an error