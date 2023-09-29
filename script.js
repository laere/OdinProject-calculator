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

function getNumbers(num) {
    // debugger;
    if (storedNumber !== undefined && operator !== undefined) {
        nextNumber = parseInt(num);
    } else {
        storedNumber = parseInt(num);
    }   
    //   console.log(storedNumber);
    //   console.log(operator);
    //   console.log(nextNumber);
      updateDisplay(num);
}

function updateDisplay(n) {
    input.textContent = n;
}


function clearDisplay() {
    input.textContent = "";
}

function getOperator(op) {
    operator = op;
}

// EVENT LISTENERS //

clear.addEventListener("click", e => {
    clearDisplay();
})

equals.addEventListener("click", e => {
    operate(operator, storedNumber, nextNumber);
})

operators.forEach(op => {
    op.addEventListener("click", e => {
        let op = e.target.innerText;
        getOperator(op)
        console.log(operator)
    })
})

buttons.forEach(btn => {
    btn.addEventListener("click", e => {
    let num = e.target.innerText;
    getNumbers(num);
    })
    
})

