
// Bubble Sort

function bubbleSort(values, bars, n) {

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            const val1 = parseInt(values[j].textContent);
            const val2 = parseInt(values[j + 1].textContent);

            if (val1 > val2) {
                [values[j].textContent, values[j + 1].textContent] = [values[j + 1].textContent, values[j].textContent];
                [bars[j].style.height, bars[j + 1].style.height] = [bars[j + 1].style.height, bars[j].style.height];
            }
        }
    }
}

document.getElementById("bubble").addEventListener("click", () => {
    const values = Array.from(document.querySelectorAll(".values span"));
    const bars = document.querySelectorAll(".bar");
    const n = values.length;
    bubbleSort(values, bars, n);
});


// Selection Sort

function selectionSort(values, bars, n) {

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            const currentVal = parseInt(values[j].textContent);
            const setValue = parseInt(values[minIndex].textContent);

            if (currentVal < setValue) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [values[i].textContent, values[minIndex].textContent] = [values[minIndex].textContent, values[i].textContent];
            [bars[i].style.height, bars[minIndex].style.height] = [bars[minIndex].style.height, bars[i].style.height];
        }
    }
}

document.getElementById("selection").addEventListener("click", () => {
    const values = Array.from(document.querySelectorAll(".values span"));
    const bars = document.querySelectorAll(".bar");
    const n = values.length;
    selectionSort(values, bars, n);
})


// Insertion Sort

function insertionSort(values, bars, n) {

    for (let i = 1; i < n; i++) {
        const key = parseInt(values[i].textContent);
        let j = i - 1;

        while (j >= 0 && parseInt(values[j].textContent) > key) {
            values[j + 1].textContent = values[j].textContent;
            bars[j + 1].style.height = bars[j].style.height;
            j--;
        }
        values[j + 1].textContent = key;
        bars[j + 1].style.height = `${key}px`
    }
}

document.getElementById("insertion").addEventListener("click", () => {
    const values = Array.from(document.querySelectorAll(".values span"));
    const bars = document.querySelectorAll(".bar");
    const n = values.length;
    insertionSort(values, bars, n);
});


// Quick Sort

function quickSort(values, bars, lb, ub) {
    if (lb < ub) {
        let loc = partition(values, bars, lb, ub);
        quickSort(values, bars, lb, loc - 1);
        quickSort(values, bars, loc + 1, ub);
    }
}

function partition(values, bars, lb, ub) {

    pivot = parseInt(values[lb].textContent);
    let start = lb;
    let end = ub;

    while (start < end) {
        while (parseInt(values[start].textContent) <= pivot) {
            start++;
        }

        while (parseInt(values[end].textContent) > pivot) {
            end--;
        }

        if (start < end) {
            [values[start].textContent, values[end].textContent] = [values[end].textContent, values[start].textContent];
            [bars[start].style.height, bars[end].style.height] = [bars[end].style.height, bars[start].style.height];
        }
    }

    [values[lb].textContent, values[end].textContent] = [values[end].textContent, values[lb].textContent];
    [bars[lb].style.height, bars[end].style.height] = [bars[end].style.height, bars[lb].style.height];

    return end;
}

document.getElementById("quick").addEventListener("click", () => {
    const values = Array.from(document.querySelectorAll(".values span"));
    const bars = document.querySelectorAll(".bar");
    const n = values.length;
    quickSort(values, bars, 0, n - 1);
});


// Merge Sort

function mergeSort(values, bars, lb, ub) {
    if (lb < ub) {
        const mid = Math.floor((lb + ub) / 2);
        mergeSort(values, bars, lb, mid);
        mergeSort(values, bars, mid + 1, ub);
        merge(values, bars, lb, mid, ub);
    }

}

function merge(values, bars, lb, mid, ub) {
    let i = lb;
    let j = mid + 1;
    let k = lb;
    let b = [];

    while (i <= mid && j <= ub) {
        if (parseInt(values[i].textContent) < parseInt(values[j].textContent)) {
            b[k] = values[i].textContent;
            bars[k].style.height = values[i].textContent + "px";
            i++;
        }
        else {
            b[k] = values[j].textContent;
            bars[k].style.height = values[j].textContent + "px";
            j++;
        }
        k++;
    }

    while (i <= mid) {
        b[k] = values[i].textContent;
        bars[k].style.height = values[i].textContent + "px";
        i++;
        k++;
    }

    while (j <= ub) {
        b[k] = values[j].textContent;
        bars[k].style.height = values[j].textContent + "px";
        j++;
        k++;
    }

    for (let m = lb; m <= ub; m++) {
        values[m].textContent = b[m];
        
    }
}

document.getElementById("merge").addEventListener("click", () => {
    let values = Array.from(document.querySelectorAll(".values span"));
    const n = values.length;
    const bars = document.querySelectorAll(".bar");
    mergeSort(values, bars, 0, n - 1);
    
});


// Shell Sort

function shellSort(values, bars, n) {

    for (let gap = n / 2; gap >= 1; gap = Math.floor(gap / 2)) {
        for (let j = gap; j < n; j++) {
            for (let i = j - gap; i >= 0; i = i - gap) {
                if (parseInt(values[i + gap].textContent) > parseInt(values[i].textContent)) {
                    break;
                }
                else {
                    [values[i + gap].textContent, values[i].textContent] = [values[i].textContent, values[i + gap].textContent];
                    [bars[i+gap].style.height, bars[i].style.height] = [bars[i].style.height, bars[i+gap].style.height];
                }
            }
        }
    }
}

document.getElementById("shell").addEventListener("click", () => {
    const values = Array.from(document.querySelectorAll(".values span"));
    const n = values.length;
    const bars = document.querySelectorAll(".bar");
    shellSort(values, bars, n);
});

// Function to randomize bars

function randomizeBars() {
    let container = document.getElementById("bar-container");
    container.innerHTML = "";

    let barValues = document.getElementById("value-container");
    barValues.innerHTML = "";

    const numBars = 12;
    const minValue = 1;
    const maxValue = 100;

    for (let i = 1; i <= numBars; i++) {
        const value = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
        const bar = document.createElement("div");
        const barVal = document.createElement("span");
        barValues.appendChild(barVal);
        barVal.innerHTML = value;
        bar.className = "bar";
        bar.style.height = value + "px";
        container.appendChild(bar);
    }
}

document.getElementById("randomize").addEventListener("click", randomizeBars);


// Function to change bar size

function changeSize() {

    const bars = document.querySelectorAll(".bar");
    const values = document.querySelectorAll(".values span");

    bars.forEach((bar, index) => {
        const currentWidth = parseInt(getComputedStyle(bar).width, 10);
        const newWidth = currentWidth - 10;
        bar.style.width = newWidth + "px";

        values[index].style.width = newWidth + "px";
    });
}

document.getElementById("change").addEventListener("click", changeSize);














