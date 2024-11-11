/**
 * Adds a random item to the arrayVault, updating the array visualization.
 */
function addItem() {
    let newItem = Math.floor(Math.random() * 100);  // Generate a random number between 0 and 99.
    if (arrayVault.length < vaultSize)
        arrayVault.push(newItem);  // Add the new item to the vault.
    drawArray();  // Redraw the array with the new item added.
}

/**
 * Removes the last item from the arrayVault, updating the array visualization.
 */
function popItem() {

    if (arrayVault.length > 0) {// Check if there are items to remove

        arrayVault.pop();  // Remove the last item from the vault.
        console.log(arrayVault);

    }
    drawArray();  // Redraw the array after removing the item.

}

/**
 * Resets the arrayVault, clearing all items and redrawing the array.
 */
function resetVault() {
    arrayVault = [];  // Clears the array vault.
    drawArray();  // Redraw the array on the canvas after resetting.
}

function ValidateArraySize() {
    const insertedValue = document.getElementById('arraySize').value;
    if (parseInt(insertedValue)) {
        vaultSize = insertedValue;
        const toRemove = ['controls', 'canvas-container', 'defaultCanvas0', 'vault']

        toRemove.forEach(element => {

            var div = document.getElementById(element);
            div.style.display = 'block';  // Change the background color to red
        });

        document.getElementById('arrayInput').style.display = 'none';
    }
    else {
        alert('Please insert valid array size');
    }
}
