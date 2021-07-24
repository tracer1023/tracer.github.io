Function.prototype.myCall = function (context) {
    context = context || window
    context.fn = this
    let args = Array.from(arguments).slice(1) //从下标1开始截取
    //参数超过一个时，解构参数
    let res = arguments.length > 1 ? context.fn(...args) : context.fn()
    delete context.fn
    return res
}

Function.prototype.apply = function (context) {
    context = context || window
    context.fn = this;
    let res = arguments[1] ? context.fn(...arguments[1]) : context.fn()
    delete res;
    return res;
}

Function.prototype.bind = function (context) {
    context = context || window
    context.fn = this;
    let args = Array.from(arguments).slice(1)
    return function () {
        let allargs = args.concat(Array.from(arguments))
        return allargs.length > 0 ? context.fn(...allargs) : context.fn
    }
}


function myNew(fn, ...args) {
    const thisObj = Object.create(fn.prototype)
    let result = fn.apply(thisObj, ...args)
    return typeof result == 'object' ? result : thisObj
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