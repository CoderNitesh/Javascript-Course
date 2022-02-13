function singHappyBirthday(){
    console.log("happy birthday to you ......");
}
// singHappyBirthday();

function sumThreeNumbers(number1, number2, number3){
    return number1 + number2 + number3;
}
// const sum  = sumThreeNumbers(1, 2, 3)
// console.log(sum)



// isEven
// input : 1 number 
// output : true , false 

function isEven(number){
    return number % 2 === 0;
}
console.log(`Is ${4} is Even number: `, isEven(4));

// function 
// input : string 
// output: firstCharacter 

function firstChar(anyString){
    return anyString[0];
}
console.log('firstChar of the given string is: ', firstChar("zbc"));

// function 
// input : array, target (number)
// output: index of target if target present in array 

const myArray = [1,3,8,90]

function findTarget(array, target){
    for(let i = 0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}

const ans = findTarget(myArray, 8);
console.log(ans);