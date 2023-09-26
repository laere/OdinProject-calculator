// 

let input = document.getElementById("input");
let buttons = document.querySelectorAll(".button");
let clear = document.getElementById("clear")

let num1;
let num2;
let operator;

buttons.forEach(btn => {
    btn.addEventListener("click", e => {
        input.value = e.target.innerText;
         
    })
})

function clearDisplay() {
    clear.addEventListener("click", e => {
        input.value = "0";
    })
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

function operate(operator, num1, num2) {

    if (operator === "+") {
        return add(num1, num2);
    } else if (operator === "-") {
        return subtract(num1, num2);
    } else if (operator === "*") {
        return multiply(num1, num2);
    } else if (operator === "/") {
        return diide(num1, num2);
    } else {
        return console.log("NOT WORKING")
    }
}

console.log(operate("+", 1, 2));




clearDisplay();