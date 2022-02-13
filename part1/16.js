// and  or operator 

let firstName = "Harshit";
let age = 16;

// With And Operator
if(firstName[0] === "H" && age>18){
    console.log("Name starts with H and above 18");
}else{
    console.log("inside else");
}

// With Or Operator
if(firstName[0] === "H" || age>18){
    console.log("inside if");
}else{
    console.log("inside else");
}