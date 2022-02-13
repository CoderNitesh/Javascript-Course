// splice method 
// start , delete , insert 

// splice change actual array

const myArray = ['item1', 'item2', 'item3', 'item4', 'item5'];

// delete
// const deletedItem = myArray.splice(1,2);
// console.log("delted item", deletedItem);
// insert 
// myArray.splice(1, 0,'inserted item');

// insert and delete 
console.log("array before modification", myArray);
const deletedItem = myArray.splice(1, 2, "inserted item1", "inserted item2")
console.log("delted item", deletedItem);
console.log("array after modification", myArray);