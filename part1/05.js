// let and const 

// ******************* let behaviour *******************

/*
    1) Now in let you can't re-declared the variable with same name 
    in our case it is userName. 
    2) this give you syntax error
*/

// let userName = 'nitesh';
// let userName = 'shetye';
// console.log(userName);


/*
    in let you can first just declare the variable name and assign the value latter
    this is completely valid syntax
*/

// let something;
// something = 'something';
// console.log(something);


// let have block scope that means it accessable in that block only 

// {
//     let myName = 'Nitesh Shetye'
//     console.log(myName);
// }
// console.log(myName);


// ******************* const behaviour *******************

/*
    const is like constant once you delcare you cant change the value further in code
    in const you cant just declare the variable you must initialize means to put some value in it 
    another thing is you cant declare the variable name twice with same name
*/
// const notInitialze; // Missing initializer     

// const sameName = 'nitesh'  
// const sameName = 'shetye' // SyntaxError: Identifier 'sameName' has already been declared

// const pi = 3.14;
// console.log(pi);

/*
    const is also block scope
*/

// {
//     const inBlock = 'i am in block';
//     console.log(inBlock);
// }

// console.log(inBlock);


