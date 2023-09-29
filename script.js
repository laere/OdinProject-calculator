// 

let input = document.getElementById("input");
let buttons = document.querySelectorAll(".button");
let clear = document.getElementById("clear")
let operators = document.querySelectorAll(".operator");
let equals = document.getElementById("equals");

let nums = [];
let storedNumber;
let nextNumber;
let operator;

//User punches in a number
//That number gets saved into a variable
//User hits an operator
//That operator get's saved into a variable
//User hits  a second number
//That number gets saved into a variable
//The 2 numbers and operator are then passed into a function that returns the calculated value
//The display screen is updated with said calculated value.

buttons.forEach(btn => {
    btn.addEventListener("click", e => {
    let val = e.target.innerText;
    // debugger;
    if (storedNumber !== undefined && operator !== undefined) {
        nextNumber = parseInt(val);
    } else {
        storedNumber = parseInt(val);
    }
      
      console.log(storedNumber);
      console.log(operator);
      console.log(nextNumber);
      updateDisplay(e.target.innerText);
    })
    
})

function updateDisplay(n) {
    input.textContent = n;
    console.log(n);
}



operators.forEach(op => {
    op.addEventListener("click", e => {
        operator = e.target.innerText;
        console.log(operator)
    })
})


const operateFunctions = {
    add: (num1, num2) => num1 + num2,
    subtract: (num1, num2) => num1 - num2,
    multiply: (num1, num2) => num1 * num2,
    divide: (num1, num2) => num1 / num2
}

function operate(operator, num1, num2) {
    let sum;
    debugger;
    switch(operator) {
        case "+": 
            sum = operateFunctions.add(num1, num2)
            break;
        case "-":
            sum =  operateFunctions.subtract(num1, num2);
            break;
        case "*":
            sum =  operateFunctions.multiply(num1, num2)
            break;
        case "/":
            sum = operateFunctions.divide(num1, num2);
        default:
            console.log("Not working");
    }
    console.log(sum);

    updateDisplay(sum);
}

clear.addEventListener("click", e => {
    input.textContent = "";
})

equals.addEventListener("click", e => {
    operate(operator, storedNumber, nextNumber);
})



