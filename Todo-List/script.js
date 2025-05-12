// Tip Calculator
function calculateTip() {
    const billAmount = parseFloat(document.getElementById("billAmount").value);
    const tipPercentage = parseFloat(document.getElementById("tipPercentage").value);

    if (isNaN(billAmount) || isNaN(tipPercentage)) {
        alert("Please enter valid numbers.");
        return;
    }

    const tipAmount = (billAmount * tipPercentage) / 100;
    document.getElementById("tipResult").innerHTML = `Tip: $${tipAmount.toFixed(2)}`;
}

// Currency Converter
function convertCurrency() {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    if (isNaN(amount)) {
        alert("Please enter a valid amount.");
        return;
    }

    const conversionRates = {
        USD: { EUR: 0.85, GBP: 0.75 },
        EUR: { USD: 1.18, GBP: 0.88 },
        GBP: { USD: 1.33, EUR: 1.14 },
    };

    const rate = conversionRates[fromCurrency][toCurrency];
    const convertedAmount = amount * rate;

    document.getElementById("currencyResult").innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
}

// To-Do List
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    const taskList = document.getElementById("taskList");
    const li = document.createElement("li");
    li.textContent = task;

    taskList.appendChild(li);
    taskInput.value = "";
}
