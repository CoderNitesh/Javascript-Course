// console.log can print something on console 
// const moment = require('moment');
// const exp_date = moment(new Date('2020-09-16'));
// const diff = moment().diff(exp_date, 'months');
// console.log(diff)
// console.log("hello world");
// console.log();
// console.log(12*1.5)

// const calculateStringToDate = (yearOfExp) => {
//     const monthsBack = +yearOfExp.split(" ")[0] * 12
//     const exp = new Date(moment().subtract(monthsBack, 'months'));
//     return moment(exp).format('YYYY-MM-DD')
// }

// const expectedOutput = calculateStringToDate('0.5 year')
// console.log('expectedOutput', expectedOutput)
// let firstName = "nitesh";
// firstName = 34;
// console.log(firstName)

// const exp_date = new Date('2020-02-16')

// const current_date = new Date()

// console.log(exp_date)
// console.log(current_date)

// console.log('01');

const a = ',onhold,,,select'
const array1 = a.split(',')
console.log(array1);

const newObject = array1.reduce((acc, curr) => {
    if(acc[curr]){
        acc[curr] = ++acc[curr]
    }else{
        acc[curr] = 1
    }

    return acc
}, {})

const showCount = (valueInString) => {
    const convertInArray = valueInString.split(',')
    
    const convertInObjet = convertInArray.reduce((acc, curr) => {
        if(acc[curr]){
            acc[curr] = ++acc[curr]
        }else{
            acc[curr] = 1
        }

        return acc
    }, {})

    return convertInObjet
}


// console.log(newObject.reject)
console.log(showCount(a));
