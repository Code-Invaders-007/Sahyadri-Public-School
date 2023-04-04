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



// Date and monthpicker code

const expirationDateInput = document.getElementById("expiration-date");
const monthYearDropdownsContainer = document.getElementById("month-year-dropdowns");

expirationDateInput.addEventListener("change", () => {
    const expirationDate = new Date(expirationDateInput.value);
    const currentYear = new Date().getFullYear();
    const selectedMonth = expirationDate.getMonth();
    const selectedYear = expirationDate.getFullYear();

    const months = [
        { value: 0, name: "January" },
        { value: 1, name: "February" },
        { value: 2, name: "March" },
        { value: 3, name: "April" },
        { value: 4, name: "May" },
        { value: 5, name: "June" },
        { value: 6, name: "July" },
        { value: 7, name: "August" },
        { value: 8, name: "September" },
        { value: 9, name: "October" },
        { value: 10, name: "November" },
        { value: 11, name: "December" }
    ];

    const years = [];
    for (let i = currentYear; i <= currentYear + 10; i++) {
        years.push(i);
    }

    const monthDropdown = createDropdown("month", "Month", months, selectedMonth);
    const yearDropdown = createDropdown("year", "Year", years, selectedYear);

    monthYearDropdownsContainer.innerHTML = "";
    monthYearDropdownsContainer.appendChild(monthDropdown);
    monthYearDropdownsContainer.appendChild(yearDropdown);
});

function createDropdown(id, label, options, selectedValue) {
    const dropdown = document.createElement("select");
    dropdown.id = id;
    dropdown.name = id;

    const labelElement = document.createElement("label");
    labelElement.htmlFor = id;
    labelElement.textContent = label;

    options.forEach(option => {
        const optionElement = document.createElement("option");
        optionElement.value = option.value;
        optionElement.text = option.name;
        optionElement.selected = (option.value === selectedValue);
        dropdown.appendChild(optionElement);
    });

    return labelElement.appendChild(dropdown);
}

