// 

let input = document.getElementById("input");
let buttons = document.querySelectorAll(".button");
let clear = document.getElementById("clear")

let nums = [];
let currentVal;
let num1;
let num2;
let operator;

buttons.forEach(btn => {
    btn.addEventListener("click", e => {
        
        
    })
})

function getVal(n) {
    return nums.push(n);
}


function clearDisplay() {
    clear.addEventListener("click", e => {
        input.value = "0";
    })
}


const operateFunctions = {
    add: (num1, num2) => num1 + num2,
    subtract: (num1, num2) => num1 - num2,
    multiply: (num1, num2) => num1 * num2,
    divide: (num1, num2) => num1 / num2
}

function operate(operator, num1, num2) {

}


