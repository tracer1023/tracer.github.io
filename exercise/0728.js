Function.prototype.call = function (context) {
    context = context || window
    context.fn = this
    let arg = Array.from(arguments).slice(1)
    let result = arguments.length > 1 ? context.fn(...arg) : context.fn()
    delete context.fn
    return result
}

Function.prototype.apply = function (context) {
    context = context || window
    context.fn = this
    let result = arguments[1] ? context.fn(...arguments[1]) : context.fn()
    return result;
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

function newA(fn, ...arg) {
    let thisObj = Object.create(fn.prototype)
    let result = fn.apply(thisObj, arg)
    return typeof result === 'object' ? result : thisObj
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
    let timer = null
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