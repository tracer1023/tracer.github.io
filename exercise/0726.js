Function.prototype.call = function (context) {
    context = context || window
    context.fn = this;
    let arg = Array.from(arguments).slice(1);
    let result = arguments.length > 1 ? context.fn(...arg) : context.fn()
    delete context.fn;
    return result;
}

Function.prototype.apply = function (context) {
    context = context || window
    context.fn = this;
    let result = arguments[1] ? context.fn(...arguments[1]) : context.fn()
    delete context.fn()
    return result
}

Function.prototype.bind = function (context) {
    context = context || window
    context.fn = this
    let arg = Array.from(arguments).slice(1)
    return function () {
        let allArgs = arg.concat(Array.from(arguments))
        return allArgs.length > 0 ? context.fn(...allArgs) : context.fn()
    }
}

function myNew(fn, ...arg) {
    let newObj = Object.create(fn.prototype)
    let result = fn.apply(newObj, arg)
    return typeof result === 'object' ? result : newObj

}

function debounce(fn, delay) {
    let timer = null
    return function () {
        if (timer) {
            clearTimeout(timer)
        } else {
            timer = setTimeout(() => {
                fn.apply(this, arguments)
                timer = null;
            }, delay)
        }
    }
}

function throttle(fn, delay) {
    let timer = null;
    return function () {
        if (timer) {
            return
        } else {
            timer = setTimeout(() => {
                fn.apply(this, arguments)
                timer = null;
            }, delay)
        }
    }
}


function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let flag = 0;
        for (let j = 0; j < arr.length - i; j++) {
            if (a[j] > a[j + 1]) {
                let temp = a[j + 1]
                a[j + 1] = a[j]
                a[j] = temp
                flag = 1
            }
        }
        if (flag == 1) {
            return
        }
    }
}

function insertSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let key = a[i]
        let j = i - 1
        while (j >= 0 & a[j] > key) {
            a[j + 1] = a[j]
            j--
        }
        a[j + 1] = key
    }
    return arr;
}

function selectSort(arr) {

}