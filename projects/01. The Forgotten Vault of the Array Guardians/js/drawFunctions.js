/**
 * Draws the array vault as visualized slots on the canvas.
 * It displays each value in its respective slot.
 */
function drawArray() {
    background(220);  // Clear the canvas every time the array is redrawn.

    // Loop through each element in the vault to draw its respective slot.
    for (let i = 0; i < vaultSize; i++) {


        let barWidth = width / arrayVault.length;
        for (let k = 0; k < arrayVault.length; k++) {
            fill(100, 100, 250);
            rect(k * barWidth, height - arrayVault[k], barWidth - 2, arrayVault[k]);

            fill(0);
            // Display the value or an empty string if the slot is empty.
            textAlign(TOP, CENTER);  // Align text both horizontally and vertically to the center.
            text(arrayVault[i] || "", i * cellSize + cellSize / 2, height / 2);
        }

    }
}
