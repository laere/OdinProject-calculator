// 

let input = document.getElementById("input");
let buttons = document.querySelectorAll(".button");
let clear = document.getElementById("clear")
let operators = document.querySelectorAll(".operator");

let nums = [];
let prevNum;
let num1;
let num2;
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
      nums.push(e.target.innerText);
      updateDisplay(e.target.innerText);
    })
    
})

function updateDisplay(n) {
    input.textContent = num1;
    console.log(nums);
}



operators.forEach(op => {
    op.addEventListener("click", e => {
        operator = e.target.innerText;
        nums.push(operator);
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
    
}

clear.addEventListener("click", e => {
    input.textContent = "";
})


