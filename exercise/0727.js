Function.prototype.myCall = function (context) {
    context = context || window
    context.fn = this
    let arg = Array.from(arguments).slice(1)
    let res = arguments.length > 1 ? context.fn(...arg) : context.fn()
    delete context.fn
    return res
}

Function.prototype.myApply = function (context) {
    context = context || window
    context.fn = this
    let res = arguments[1] > 1 ? context.fn(...arguments[1]) : context.fn()
    delete context.fn
    return res
}

Function.prototype.myBind = function (context) {
    context = context || window
    context.fn = this
    let arg = Array.from(arguments).slice(1)
    return function () {
        let allArgs = arg.concat(Array.from(arguments))
        return allArgs.length > 0 ? context.fn(...allArgs) : context.fn()
    }
}

function myNew(fn, ...args) {
    const obj = Object.create(fn.prototype)
    const result = fn.myApply(obj, ...args)
    return typeof result === 'object' ? result : obj
}

function debounce(fn, delay) {
    let timer = null
    return function () {
        if (timer) {
            clearTimeout(timer)
        } else {
            timer = setTimeout(() => {
                fn.apply(this, arguments)
                timer = null
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
                timer = null
            }, delay)
        }
    }
}

