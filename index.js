const output = document.getElementById('output');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const incDecrement = document.getElementById('increment-decrement');
const reset = document.getElementById('reset');

let counterValue = 0;
output.textContent = counterValue;

plus.addEventListener('click', () => {

    if (incDecrement.value) {
        counterValue = counterValue + parseInt(incDecrement.value);
        output.textContent = counterValue;
    }
    else {
        counterValue++;
        output.textContent = counterValue;
    }
});

minus.addEventListener('click', () => {
    if (incDecrement.value) {
        counterValue = counterValue - parseInt(incDecrement.value);
        output.textContent = counterValue;
    }
    else {
        counterValue--;
        output.textContent = counterValue;
    }
});

reset.addEventListener('click', () => {
    counterValue = 0
    output.textContent = counterValue;
});