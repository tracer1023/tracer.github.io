//call
Function.prototype.call = function (context) {
    context = context || window
    context.fn = this
    let arg = Array.from(arguments).slice(1)
    let res = arguments.length > 1 ? context.fn(...arg) : context.fn
    delete context.fn
    return res;
}

//apply
Function.prototype.apply = function (context) {
    context = context || window
    context.fn = this
    let args = arguments[1] ? context.fn(...arguments[1]) : context.fn
    delete context.fn
    return args;
}

Function.prototype.bind = function (contet) {
    context = context || window
    context.fn = this
    let arg = Array.from(arguments).slice(1)
    return function () {
        let allArgs = arg.concat(Array.from(arguments))
        return allArgs
    }
}