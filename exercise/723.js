Function.prototype.myApply = function (context) {
    context = context || window
    context.fn = this;
    let result = arguments[1] ? context.fn(...arguments[1]) : context.fn()
    delete context.fn
    return result
}

Function.prototype.myCall = function (context) {
    context = context || window
    context.fn = this
    const args = Array.from(arguments).slice(1);
    const res = arguments.length > 1 ? context.fn(...args) : context.fn
    delete context.fn
    return res
}

Function.prototype.myBind = function (context) {
    const context = JSON.parse(JSON.stringify(context)) || window
    context.fn = this;
    const args = Array.from(arguments).slice(1)

    return function () {
        const allArgs = args.concat(Array.from(arguments))
        return allArgs.length > 0 ? context.fn(...allArgs) : context.fn()
    }
}