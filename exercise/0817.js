function quickSort(arr) {
    let povitIndex = Math.floor(arr.length / 2)
    let povit = arr.splice(povitIndex, 1)[0]
    let left = [], right = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < povit) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat([povit], quickSort(right))
}

function insertSort(arr) {

}