/*
    length
    trim() 
    toUpperCase()
    toLowerCase()
    slice()

    this methods not affect the original string which we perform the task 
*/
let firstName = "   Nitesh Shetye     ";
console.log('firstName: ', firstName);
// length
const firstNameLength = firstName.length;
console.log('firstNameLength: ', firstNameLength);
/*
    this length property will count the white space also.
*/

// trim()
const firstNameTrim = firstName.trim();
console.log(firstNameTrim.length);
console.log('firstName after trim: ', firstName);

/*
    trim method remove the white spaces from start and end of 
    the string.
    remember trim only remove the white space from start and end 
    not from the middle.
    It meanse 'Nitesh Shetye' the middel white space will count.
    this will retern the new string not affect the original one. 
*/

// toUpperCase()
const firstNameToUpperCase = firstName.toUpperCase().trim();
console.log("firstNameToUpperCase: ", firstNameToUpperCase);
console.log('firstName after toUpperCase: ', firstName);
/*
    toUpperCase will convert the string uppercase.
    this will retern the new string not affect the original one.
*/

// toLowerCase()
const firstNameToLowerCase = firstName.toLowerCase().trim();
console.log("firstNameToLowerCase: ", firstNameToLowerCase);
console.log('firstName after toLowerCase: ', firstName);
/*
    toLowerCase will convert the string lowercase.
    this will retern the new string not affect the original one.
*/

// slice(startIndex, endIndex)
// remember index start with 0.
let newString = firstName.trim().slice(1); 
console.log("newString: ", newString);
console.log('firstName after trim and slice: ', firstName);
/*
    slice(start, end).
    this will retern the new string not affect the original one.
*/