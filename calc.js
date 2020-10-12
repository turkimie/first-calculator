
const submitButton = document.getElementById("submit-button");
let result = document.getElementById("result");

function calculate() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operation = document.getElementById("operation").value;
    result.innerText = "Result =";

    if (operation == "add") {
    result.innerText += (" " + (num1 + num2));
    }

    else if (operation == "subtract") {
    result.innerText += (" " + (num1 - num2));
    }

    else if (operation == "divide") {
    result.innerText += (" " + (num1 / num2));
    }

    else if (operation == "multiply") {
    result.innerText += (" " + (num1 * num2));
    }
}

submitButton.addEventListener("click", calculate);