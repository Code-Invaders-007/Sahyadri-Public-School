// Amount slider code
const slider = document.getElementById("slider");
const options = document.getElementById("options");
const amountDisplay = document.getElementById("amount-display");
const amountInput = document.getElementById("amount");

slider.addEventListener("input", () => {
    const value = slider.value;
    amountInput.value = value;
    amountDisplay.textContent = `₹`;
    options.value = [...options.options].find(option => option.dataset.value === value).value;
    amountInput.readOnly = (options.value !== "custom");
});

amountInput.addEventListener("input", () => {
    const value = amountInput.value;
    slider.value = value;
    amountDisplay.textContent = `₹`;
    options.value = "custom";
    amountInput.readOnly = false;
});

options.addEventListener("change", () => {
    const value = options.value;
    slider.value = options.options[options.selectedIndex].dataset.value;
    amountDisplay.textContent = `₹`;
    amountInput.value = slider.value;
    amountInput.readOnly = (value !== "custom");
});

document.addEventListener("DOMContentLoaded", () => {
    amountDisplay.textContent = `₹`;
    // amountInput
});





