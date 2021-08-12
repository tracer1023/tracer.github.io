let arr = [1, 7, 3, 4, 2, 3, 6]

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let flag = false
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                flag = true
            }
        }
        if (!flag) {
            return arr;
        }
    }
    // console.log('arr', arr)
    return arr;
}

// console.time()
// console.log(bubbleSort(arr))
// console.timeEnd()

function selectSort(arr) {
    let len = arr.length;
    let minIndex, temp
    for (let i = 0; i < len; i++) {
        minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}
// console.time()
// console.log(selectSort(arr))
// console.timeEnd()

function quickSort(arr) {
    let povirIndex = Math.floor((arr.length) / 2)
    let povit = arr.splice(povirIndex, 1)[0]
    let left = []
    let right = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < povit) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat([povit], quickSort(right))
}

console.time()
console.log(quickSort(arr))
console.timeEnd()