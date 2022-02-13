/*
    Callback functions 

    callback function meanse sending the function as parameter 
    in another function and call it whenver it needs
*/
function myFunc2(name){
    console.log("inside my func 2")
    console.log(`your name is ${name}`);
}

function myFunc(callback){
    console.log("hello there I am a func and I can..")
    callback("harshit");
}


myFunc(myFunc2);