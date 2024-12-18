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

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);

document.querySelector('.clear-button').addEventListener('click', clearDisplay);
document.querySelector('.equals-button').addEventListener('click', calculate);