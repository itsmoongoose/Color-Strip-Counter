// Declaring Variables
const label1 = document.querySelector("#label1");
const label2 = document.querySelector("#label2");
const countedStripsInput = document.querySelector("#input1");
const countedSetsInput = countedStripsInput;
const stripsPerStoreInput = document.querySelector("#strips-per-store-input");
const submitBtn = document.querySelector("#btn-submit");
const countBtn = document.querySelector("#btn-count");
const recountBtn = document.querySelector("#btn-recount");
const mainContainer = document.querySelector("#main-container");
const formContainer = document.querySelector("#form-container");
const formElement = document.querySelector("#form-element");
let formDisplayed = "count";
let extraStripsLabel;
let extraStripsInput;

// Event Listener -- count button
countBtn.addEventListener("click", (event) => {
    if (formDisplayed != "count") {
        label1.textContent = "How many strips?";
        label2.textContent = "How many strips per store?";
        formElement.removeChild(extraStripsLabel);
        formElement.removeChild(extraStripsInput);
    }
    formDisplayed = "count";
});

// Event Listener -- recount button
recountBtn.addEventListener("click", (event) => {
    if (formDisplayed != "recount") {

        // Modify 1st and 2nd form field inputs and submit button
        label1.textContent = "How many sets?";
        label2.textContent = "How many strips in a set?";
        formElement.removeChild(submitBtn);

        // Create 3rd form field input
        extraStripsLabel = document.createElement("label");
        extraStripsLabel.textContent = "How many extra strips?";
        extraStripsLabel.htmlFor = "extra-strips-input";
        extraStripsInput = document.createElement("input");
        extraStripsInput.type = "text";
        extraStripsInput.id = "extra-strips-input";
        formElement.appendChild(extraStripsLabel);
        formElement.appendChild(extraStripsInput);
        formElement.appendChild(submitBtn);
    }
    formDisplayed = "recount";
});

// Event Listener -- submit button
submitBtn.addEventListener("click", (event) => {
    event.preventDefault();

    // Count menu logic
    if (formDisplayed == "count") {
        let totalStrips = 0;
        const countedStrips = countedStripsInput.value.trim();
        const stripsPerStore = parseInt(stripsPerStoreInput.value.trim());
        countedStripsInput.value = "";
        stripsPerStoreInput.value = "";
        
        // Calculate total strips
        const countedStripsArray = countedStrips.split(",");
        for (number of countedStripsArray) {
            const num = parseInt(number);
            if (!isNaN(num)) {
                totalStrips = totalStrips + num;
            }
        }

        // Calculate total sets
        const totalSets = Math.floor(countedStrips / stripsPerStore);

        // Calculate extra strips
        const extraStrips = totalStrips % stripsPerStore;

        // Create and add elements
        const newDiv = document.createElement("div");
        const totalStripsP = document.createElement("p");
        const totalSetsP = document.createElement("p");
        const extraStripsP = document.createElement("p");
        totalStripsP.textContent = `Total Strips: ${totalStrips}`;
        totalSetsP.textContent = `Total Sets: ${totalSets}`;
        extraStripsP.textContent = `Extra Strips: ${extraStrips}`;
        newDiv.appendChild(totalStripsP);
        newDiv.appendChild(totalSetsP);
        newDiv.appendChild(extraStripsP);
        mainContainer.appendChild(newDiv);

    // Recount menu logic
    } else if (formDisplayed == "recount") {
        let totalStrips = 0;
        const countedSets = parseInt(countedSetsInput.value.trim());
        const stripsPerStore = parseInt(stripsPerStoreInput.value.trim());
        const extraStripsCount = parseInt(extraStripsInput.value.trim());
        countedStripsInput.value = "";
        stripsPerStoreInput.value = "";
        extraStripsInput.value = "";

        // Calculate total strips
        totalStrips = (countedSets * stripsPerStore) + extraStripsCount;

        // Create and add elements
        const newDiv = document.createElement("div");
        const totalStripsP = document.createElement("p");
        totalStripsP.textContent = `Total Strips: ${totalStrips}`;
        newDiv.appendChild(totalStripsP);
        mainContainer.appendChild(newDiv);
    }
});