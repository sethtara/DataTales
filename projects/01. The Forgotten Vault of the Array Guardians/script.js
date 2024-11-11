// app.js

// Example function to interact with p5.js sketch
function updateArray(newArr) {
    arr = newArr;  // Update the array used in the sketch.js
    i = 0;         // Reset bubble sort iteration
    j = 0;
    isSorted = false;
}

// Example of creating a button to interact with the p5.js sketch
window.onload = function () {
    const btn = document.createElement('button');
    btn.textContent = 'Shuffle Array';
    btn.onclick = function () {
        // Shuffle array and update the p5.js sketch
        const shuffledArr = shuffleArray([10, 50, 20, 40, 30]);
        updateArray(shuffledArr);
    };
    document.getElementById('content').appendChild(btn);
};

// Utility function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}
