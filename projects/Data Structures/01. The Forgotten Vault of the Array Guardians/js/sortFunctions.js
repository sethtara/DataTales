async function sortArray() {
    for (let i = 0; i < arrayVault.length; i++) {
        for (let j = 0; j < arrayVault.length - i - 1; j++) {
            if (arrayVault[j] > arrayVault[j + 1]) {
                // Swap
                [arrayVault[j], arrayVault[j + 1]] = [arrayVault[j + 1], arrayVault[j]];
                drawArray();
                await new Promise(r => setTimeout(r, 30)); // Pause for visualization
            }
        }
    }
}
