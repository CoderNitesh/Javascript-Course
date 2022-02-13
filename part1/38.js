// how to iterate object 
const person = {
    name: "harshit",
    age: 22,
    "person hobbies": ["guitar", "sleeping", "listening music"]
}

/*
    for in loop 
    In this if i write the 
        let key in person (array name is person in our case).
    So here key is the key in object that meanse 
        the name, age, and 'person hobbies'.
*/
for(let key in person){
    console.log(key," : " , person[key]);
}
console.log('************First For In loop End************')

/*
    Object.keys(object name) will  give me the array 
    with value of all keys present in the
    Object ex. [name, age, 'person hobbies'] 
    1) if you check the typeof the Object.keys(object name)
        it shows the object but its array you can cross 
        check with the Array.isArray() 
    // type of is "object"
    2)  console.log(typeof (Object.keys(person)));

    // cross check
    3)  const val = Array.isArray((Object.keys(person)));
        console.log(val);
*/


/*
    for of loop 
    As you know the for of loop works with value in array
    but here we have key value pair, so we need to translate
    it in array first
    1)  For that first we get the all keys in form of array 
        using the Object.keys(object name) 
    2)  And then it pass to let key of "that array"

*/
for(let key of Object.keys(person)){
    console.log(person[key]);
}