// Initialize an empty array to hold the array vault values.
let arrayVault = [];
// Size of the vault (number of array slots).
let vaultSize = 10;
// Size of each cell in the vault (each slot will be a square).
let cellSize = 50;

/**
 * p5.js setup function.
 * Creates a canvas and sets the background color.
 * Calls the function to draw the array visualization on the canvas.
 */
function setup() {
    createCanvas(600, 200);  // Creates the canvas with a width of 600px and height of 200px.
    background(220);  // Sets the background color to light gray.
    drawArray();  // Calls the function to draw the array slots.
}

/**
 * p5.js draw function.
 * This is continuously called for animations. It's empty here, but you can add dynamic updates.
 */
function draw() {
    // Empty for now, can be used for dynamic updates or animations.
}

/**
 * Resets the vault to an empty array and redraws the visualization.
 */
function resetVault() {
    arrayVault = [];  // Clears the array vault.
    drawArray();  // Redraws the array on the canvas after resetting.
}
