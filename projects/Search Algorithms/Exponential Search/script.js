let array = [], target, low, high, mid, found = false, position = -1;

function setup() {
    createCanvas(800, 400);
    frameRate(1);  // Slow down frame rate for visualization
    array = Array.from({ length: 20 }, () => Math.floor(random(0, 100))).sort((a, b) => a - b);
}

function draw() {
    background(220);
    drawArray();  // Visualize the array

    if (!found) binarySearchStep();  // Perform a step of binary search

    if (found && target) {
        fill(0);
        textSize(20);
        textAlign(CENTER, CENTER);
        text(`Target ${target} found at position ${position}`, width / 2, height - 30);
    }
}

function drawArray() {

    for (let i = 0; i < array.length; i++) {
        let color = i === mid ? 'yellow' : i === low ? 'green' : i === high ? 'red' : 255;
        fill(color);
        rect(i * 30 + 20, height / 2, 25, -array[i]);
        fill(0);
        textAlign(CENTER, CENTER);
        text(array[i], i * 30 + 32, height / 2 + 25);
    }
}

function binarySearchStep() {
    if (low <= high) {
        mid = Math.floor((low + high) / 2);

        if (array[mid] === target) {
            found = true;
            position = mid;
            noLoop();  // Stop once target is found
        } else {
            target > array[mid] ? low = mid + 1 : high = mid - 1;
        }
    } else {
        found = true;  // Stop if target not found
        noLoop();
    }
}

function startSearch() {
    target = parseInt(document.getElementById("targetInput").value);
    if (isNaN(target)) return alert("Please enter a valid target number.");


    if (target < array[0] || target > array[array.length - 1]) {
        return alert(`Please insert a number with in the range ${array[0]} and ${array[array.length - 1]} `)
    }

    if (array[0] == target) {
        found = true;
        position = 0;
        return;
    }

    let i = 1;
    while (array[i] < target && i < array.length) {
        debugger;
        i = i * 2
    }

    low = Math.floor(i / 2);
    high = i;
    mid = Math.floor((low + high) / 2);
    found = false;
    position = -1;

    loop();  // Start visualization loop
}
