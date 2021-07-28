let arr = [2, 4, 2, 4, 6, 7]
let temp = new Array(arr.length);


//快速排序
function quickSort(arr) {
    let left = [],
        right = [];
    let povitIndex = Math.floor((right + left) / 2)
    let povit = arr.slice(povitIndex, 1)[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < povit) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat([povit], quickSort(right))
}

//插入排序
function insertSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i]
        let j = i - 1
        while (j >= 0 && a[j] > key) {
            a[j + 1] = a[j]
            j--
        }
        a[j + 1] = key
    }
    return arr;
}

//选择排序
function selectSort(arr) {
    let min = temo;
    let len = arr.length
    for (let i = 0; i < len; i++) {
        min = i
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        temp = arr[min]
        arr[min] = arr[i]
        arr[i] = temp
    }
    return arr;
}
//归并排序

mergeSort(arr, 0, arr.length - 1, temp)

function mergeSort(arr) {
    let left = 0,
        right = arr.length,
        temp = []
    if (left < right) {
        let mid = Math.floor((left + right) / 2)
        mergeSort(arr, left, mid, temp)
        mergeSort(arr, mid + 1, right, temp)
        merge(arr, left, mid, right, temp)
    }
}

function merge(arr, left, mid, right, temp) {
    let l_pos = left;
    let r_pos = mid + 1;
    let t_pos = left;
    while (l_pos <= mid && r_pos <= right) {
        if (arr[l_pos] < arr[r_pos]) {
            temp[t_pos++] = arr[l_pos++]
        } else {
            temp[t_pos++] = arr[r_pos++]
        }
    }

    while (l_pos <= mid) {
        temp[t_pos++] = arr[l_pos++]
    }

    while (r_pos <= right) {
        temp[t_pos++] = arr[r_pos++]
    }

    for (let i = 0; i < temp.length; i++) {
        arr[i] = temp[i]
    }
    return arr;
}

//冒泡排序
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let flag = 1
        for (let j = 0; j < arr.length; j++) {
            if (a[j] > a[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                flag = 0
            }
        }
        if (flag == 0) {
            return;
        }
    }
    return arr;
}

console.log(quickSort(arr))
console.log(insertSort(arr))
console.log(selectSort(arr))
console.log(bubbleSort(arr))
console.log(mergeSort(arr))