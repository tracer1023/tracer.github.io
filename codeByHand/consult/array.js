Array.prototype.push = function (...items) {
    let o = Object(this)
    let len = this.length >>> 0;
    let argCount = items.length >>> 0;
    if (len + argCount > 2 ** 53 - 1) {
        throw new TypeError("error")
    }
    for (let i = 0; i < argCount; i++) {
        o[len + i] = items[i]
    }
    let newLength = len + argCount;
    o.length = newLength
    return newLength
}