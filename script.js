// 

let input = document.getElementById("input");

let num1;
let num2;
let operator;



function operate(operator, num1, num2) {
    switch(operator) {
        case "+": 
            add(num1, nume2)
            break;
        case "-":
            subtract(num1, num2);
            break;
        case "*":
            multiply(num1, num2)
            break;
        case "/":
            divide(num1, num2);
            break;
        default:  
    }
        
        

}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

