function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function draw(array) {
    document.querySelector(".d-flex").innerHTML = "";
    let html = "";
    for (let element of array) {
        html += `<div class="bg-primary m-1 px-1 text-white flex-grow-1 sort-element text-center" style="height: ${element * 10}px;">${element}</div>`
    }
    document.querySelector(".d-flex").innerHTML = html;
}

function createArray(count, minValue, maxValue) {
    let arr = [];
    for (let i = 0; i < count; i++) {
        arr.push(getRandomIntInclusive(minValue, maxValue))
    }
    return arr;
}

function bubbleSort(inputArr) {
    for (let i = 0; i < inputArr.length - 1; i++) {
        for (let j = 0; j < inputArr.length - i - 1; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let temp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = temp;
            }
        }
    }
    return inputArr;
}

document.addEventListener("DOMContentLoaded", function () {
    let timeoutIds = [];

    document.querySelector("button").addEventListener("click", function () {
        for (let timeoutId of timeoutIds) {
            clearTimeout(timeoutId);
        }
        timeoutIds = [];

        let inputArr = createArray(10, 10, 50);
        const delay = 1000;

        draw(inputArr);
        let timer = 0;

        for (let i = 0; i < inputArr.length - 1; i++) {
            for (let j = 0; j < inputArr.length - i - 1; j++) {
                if (inputArr[j] > inputArr[j + 1]) {
                    let temp = inputArr[j];
                    inputArr[j] = inputArr[j + 1];
                    inputArr[j + 1] = temp;

                    let inputArrDraw = JSON.parse(JSON.stringify(inputArr));

                    timer++;
                    let timeoutId = setTimeout(function () { draw(inputArrDraw); }, delay * timer);
                    timeoutIds.push(timeoutId);
                }
            }
        }
    });
})