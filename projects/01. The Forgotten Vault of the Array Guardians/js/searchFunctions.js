/**
 * Searches for an item in the arrayVault and displays its index if found.
 */
function searchItem() {
    let searchValue = prompt("Enter the value to search for:");  // Prompt user for a value to search.
    let index = arrayVault.indexOf(parseInt(searchValue));  // Find the index of the search value in the array.

    // Display the result in the console or show an alert if not found.
    if (index !== -1) {
        alert(`Item found at index: ${index}`);
    } else {
        alert("Item not found!");
    }
}
