function calculate() {
    try {
        let result = Function(`'use strict'; return (${document.getElementById("result").value})`)();
        document.getElementById("result").value = result;
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}

function clearDisplay() {
    document.getElementById("result").value = "";
}

function display(value) {
    document.getElementById("result").value += value;
}

document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
        appendToDisplay(button.value);
    });
});

document.querySelector('.clear-button').addEventListener('click', clearDisplay);
document.querySelector('.equals-button').addEventListener('click', calculate);