// 

let input = document.getElementById("input");
let calcButtons = document.querySelectorAll(".calc-btn");

calcButtons.forEach(btn => {
    btn.addEventListener("click", e => {
        input.value += e.target.innerHTML;
    })
})

function equals() {

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