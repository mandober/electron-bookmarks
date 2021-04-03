/*
function Future(f) {
    var callback = null
    this.then = cb => { callback = cb }
    resolve = x => setTimeout(() => callback(x), 1)
    f(resolve)
}

const doSomething = () => new Future(resolve => resolve(42));

var p = doSomething()

setTimeout(() => p.then(x => log('got a value', x)), 2)

*/

function Future(fn) {
    var callback = null
    this.then = function (cb) {
        callback = cb
    }

    function resolve(x) {
        setTimeout(function () {
            callback(x)
        }, 0)
    }

    fn(resolve)
}


function doSomething() {
    return new Promise(function(resolve) {
        var x = 42
        resolve(x)
    });
}

var promise = doSomething()

setTimeout(() => promise.then(x => console.log("got a value", x)), 2)
