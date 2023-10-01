
//ADD NEGATIVE NUMBERS

let input = document.getElementById("input");
let buttons = document.querySelectorAll(".button");
let clear = document.getElementById("clear")
let operators = document.querySelectorAll(".operator");
let equals = document.getElementById("equals");
let currentInput = document.getElementById("current-input")

let firstNumber = "";
let secondNumber = "";
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
    debugger;

    // Tests if each number contains more than 1 decimal
    if (multipleDecimals(num1) || multipleDecimals(num2)) {
        return input.textContent = "ERROR!";
    }

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (num2 === 0) {
        let text = "I see you're trying to divide by 0!!"
        return updateDisplay(text);
    } 

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
            break;
        default:
            console.log("Not working");
    }

    sum = determineIfDecimal(sum);

    firstNumber = sum;
    secondNumber = "";
    
    updateDisplay(sum);
}

function determineIfDecimal(sum) {
    let decimal = sum.toString().split("");
    return decimal.includes(".") ? sum.toFixed(1) : sum;
}

function multipleDecimals(num) {
    console.log(typeof num);
    let numSearch = num.split("").filter((n) => n === ".");
    return numSearch.length > 2 ? true : false;
}

function getNumbers(num) {
   
    //If number contains more than 1 decimal, return.
    
    if (firstNumber !== "" && operator !== "") {
        secondNumber += num;
        updateDisplay(secondNumber);
    } else {
        firstNumber += num;
        updateDisplay(firstNumber);
    }   
}

function updateDisplay(n) {
    input.textContent = n;
}

function clearDisplay() {
    input.textContent = "";
    firstNumber = "";
    secondNumber = "";
    operator = "";
}

function getOperator(op) {
    operator = op;
}

//When user clicks operate
//Update current operation
function currentOperation() {
    currentInput.textContent
}

// EVENT LISTENERS //

clear.addEventListener("click", e => {
    clearDisplay();
})

equals.addEventListener("click", e => {
    operate(operator, firstNumber, secondNumber);
})

operators.forEach(op => {
    op.addEventListener("click", e => {
        let op = e.target.innerText;
        getOperator(op)
        // console.log(operator)
    })
})

buttons.forEach(btn => {
    btn.addEventListener("click", e => {
        let num = e.target.innerText;
        getNumbers(num);
    })
    
})

