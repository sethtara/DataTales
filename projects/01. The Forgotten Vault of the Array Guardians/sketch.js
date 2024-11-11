// sketch.js
let arr = [10, 50, 20, 40, 30];
let i = 0;
let j = 0;
let isSorted = false;

function setup() {
    createCanvas(400, 200);
    frameRate(10); // Slow down the frame rate so we can see the sorting process
}

function draw() {
    background(220);

    // Visualize the array elements as bars
    let barWidth = width / arr.length;
    for (let k = 0; k < arr.length; k++) {
        fill(100, 100, 250);
        rect(k * barWidth, height - arr[k], barWidth - 2, arr[k]);
    }

    // Bubble Sort Algorithm
    if (!isSorted) {
        if (i < arr.length) {
            if (j < arr.length - i - 1) {
                if (arr[j] > arr[j + 1]) {
                    // Swap the elements
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
                j++;
            } else {
                j = 0;
                i++;
            }
        } else {
            isSorted = true; // Sorting is complete
        }
    }
}
