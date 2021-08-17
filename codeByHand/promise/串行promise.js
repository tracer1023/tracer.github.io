let createPromse = function (value) {
    return (resolve, reject) => {
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()
            }, time * 1000)
        })
    }
}

function serPromise(arr) {
    arr.reduce((pre, next, index, carr) => {
        return pre.then(next)
    }, Promise.resolve())
}

var arr = [createPromse(2), createPromse(1), createPromse(3), createPromse(4), createPromse(5)]
serPromise(arr)

function ajax(URL) {
    return new Promise(function (resolve, reject) {
        let req = new XMLHttpRequest();

    })
}