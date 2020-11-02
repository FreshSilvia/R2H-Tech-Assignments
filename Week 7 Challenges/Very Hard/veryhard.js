// Challenge Very Hard
function add(x,y){
    return x+y;
}

function subtract(x,y){
    return x-y;
}

function multiply(x,y){
    return x*y;
}

function divide(x,y){
    return x/y;
}

var firstInput;
var secondInput;
var operator;

firstInput = parseInt(prompt("Enter first number"));
operator = prompt("Enter operator: +, -, /, *");
secondInput = parseInt(prompt("Enter second number"));

if(operator === "+"){
    console.log(add(firstInput,secondInput));
} else if(operator === "-"){
    console.log(subtract(firstInput,secondInput));
} else if(operator === "*"){
    console.log(multiply(firstInput,secondInput));
} else{
    console.log(divide(firstInput,secondInput));
}