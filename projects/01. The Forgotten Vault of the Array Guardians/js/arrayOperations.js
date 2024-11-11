/**
 * Adds a random item to the arrayVault, updating the array visualization.
 */
function addItem() {
    let newItem = Math.floor(Math.random() * 100);  // Generate a random number between 0 and 99.
    arrayVault.push(newItem);  // Add the new item to the vault.
    drawArray();  // Redraw the array with the new item added.
}

/**
 * Removes the last item from the arrayVault, updating the array visualization.
 */
function removeItem() {
    arrayVault.pop();  // Remove the last item from the vault.
    drawArray();  // Redraw the array after removing the item.
}
