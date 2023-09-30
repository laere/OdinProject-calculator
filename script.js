
let input = document.getElementById("input");
let buttons = document.querySelectorAll(".button");
let clear = document.getElementById("clear")
let operators = document.querySelectorAll(".operator");
let equals = document.getElementById("equals");

let storedNumber = "";
let nextNumber = "";
let operator = ""

//PSEUDOCODE.

//User enters first number
//User enters operator
//Because both first number AND operator exist
//User must be entering second number.
//When equals is hit we operate the 2 numbers based on the op.
//Return sum after operation
//First number now EQUALS sum....


const operateFunctions = {
    add: (num1, num2) => num1 + num2,
    subtract: (num1, num2) => num1 - num2,
    multiply: (num1, num2) => num1 * num2,
    divide: (num1, num2) => num1 / num2
}

function operate(operator, num1, num2) {
    let sum;
    num1 = parseInt(num1);
    num2 = parseInt(num2);

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
    storedNumber = sum;
    nextNumber = "";
    updateDisplay(sum);
}

function getNumbers(num) {
    // debugger;
    if (storedNumber !== "" && operator !== "") {
        nextNumber += num;
        updateDisplay(nextNumber);
    } else {
        storedNumber += num;
        updateDisplay(storedNumber);
    }   
}

function updateDisplay(n) {
    input.textContent = n;
}


function clearDisplay() {
    input.textContent = "";
    storedNumber = "";
    nextNumber = "";
    operator = "";
    console.log(operator);
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

