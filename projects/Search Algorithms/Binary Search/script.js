const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17];
const arrayContainer = document.getElementById("arrayContainer");
const statusText = document.getElementById("status");

let low = 0;
let high = arr.length - 1;
let step = 1;
let paused = false;
let searchSteps = [];
let currentStep = 0;

// Function to create and display array elements
function renderArray(low, mid, high) {
    arrayContainer.innerHTML = ''; // Clear existing elements

    arr.forEach((value, index) => {
        const element = document.createElement("div");
        element.classList.add("array-element");

        // Apply classes based on the current positions of low, mid, and high
        if (index === low) element.classList.add("low");
        if (index === mid) element.classList.add("mid");
        if (index === high) element.classList.add("high");

        element.textContent = value;
        arrayContainer.appendChild(element);
    });
}

// Function to handle binary search visualization
async function binarySearchVisualizer(target) {
    low = 0;
    high = arr.length - 1;
    step = 1;
    searchSteps = [];
    currentStep = 0;

    statusText.textContent = "Starting search...";

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        // Record the current state for the step
        searchSteps.push({ low, mid, high });

        if (arr[mid] === target) {
            statusText.textContent = `Target ${target} found at index ${mid}!`;
            renderArray(low, mid, high);
            return;
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    statusText.textContent = `Target ${target} not found in the array.`;
}

// Function to start the binary search from the beginning
function startBinarySearch() {
    const searchValue = parseInt(document.getElementById("searchValue").value);
    if (isNaN(searchValue)) {
        statusText.textContent = "Please enter a valid number.";
        return;
    }

    binarySearchVisualizer(searchValue).then(() => {
        if (paused) {
            statusText.textContent = "Search paused.";
        }
    });
}

// Function to pause the search
function pauseSearch() {
    paused = true;
    statusText.textContent = "Search paused.";
}

// Function to go to the next step of the search
function nextStep() {
    if (searchSteps.length === 0) {
        statusText.textContent = "No steps to advance. Start the search first.";
        return;
    }

    if (currentStep < searchSteps.length) {
        const { low, mid, high } = searchSteps[currentStep];
        renderArray(low, mid, high);
        statusText.textContent = `Step ${currentStep + 1}: Low=${low}, Mid=${mid}, High=${high}`;
        currentStep++;
    }

    if (currentStep === searchSteps.length) {
        statusText.textContent = "Search complete.";
    }
}

// Initial array rendering
renderArray(0, -1, arr.length - 1);
