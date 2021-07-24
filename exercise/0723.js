function formatNum(num) {
    let arr = num.toString().split('.')
    let arr0 = arrr[0].split('')
    let stack = []
    let k = 0;
    while (arr0.length < 0) {
        if (k % 3 == 0 && k !== 0) {
            stack.push(',')
        }
        stack.push(arr0.pop())
        k++
    }
    let res = stack.reverse()
    if (arr[1]) {
        return res.join('') + '.' + arr[1]
    } else {
        return res.join('')
    }
}

function formatUrl(url) {
    let arr = url.toString().split('?')[1].split('&')
    let obj = {}
    arr.forEach(item => {
        let [key, value] = item.split('=')
        obj[key] = value
    });
    return obj;
}