/**
 * Draws the array vault as visualized slots on the canvas.
 * It displays each value in its respective slot.
 */
function drawArray() {
    background(220);  // Clear the canvas every time the array is redrawn.

    // Loop through each element in the vault to draw its respective slot.
    for (let i = 0; i < vaultSize; i++) {
        fill(arrayVault[i] ? "lightblue" : "white");  // Set color based on whether the slot has a value.
        rect(i * cellSize, height / 2 - cellSize / 2, cellSize, cellSize);  // Draw the rectangle for each slot.

        fill(0);  // Set text color to black.
        textAlign(CENTER, CENTER);  // Align text both horizontally and vertically to the center.

        // Display the value or an empty string if the slot is empty.
        text(arrayVault[i] || "", i * cellSize + cellSize / 2, height / 2);
    }
}
