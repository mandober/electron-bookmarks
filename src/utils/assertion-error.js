/**
 * Return a function that will copy properties from one object to another
 * excluding any originally listed. Returned function will create a new object.
 * 
 * @param {String} excludes The array with names of excluded properties
 * @return {Function}
*/
function exclude(...excludes) {
    //var excludes = [].slice.call(arguments)
    return function extendExclude(...args) {
        //var args = [].slice.call(arguments)
        let res = {}
        for (const i=0; i < args.length; i++) {
            excludeProps(res, args[i])
        }
        return res
    }
}

function excludeProps(res, obj) {
    Object.keys(obj).forEach(key => {
        if (!~excludes.indexOf(key)) res[key] = obj[key] 
    })
}


/**
 * AssertionError - an extension of the `Error` constructor for
 * assertion and validation scenarios.
 *
 * @param {String} message
 * @param {Object} properties to include (optional)
 * @param {callee} start stack function (optional)
 */
export function AssertionError(message, _props, ssf) {
    var extend = exclude('name', 'message', 'stack', 'constructor', 'toJSON'),
        props = extend(_props || {})

    // default values
    this.message = message || 'Unspecified AssertionError'
    this.showDiff = false

    // copy from properties
    for (var key in props) {
        this[key] = props[key]
    }

    // capture stack trace
    ssf = ssf || AssertionError
    if (Error.captureStackTrace) {
        Error.captureStackTrace(this, ssf)
    } else {
        try {
            throw new Error()
        } catch (e) {
            this.stack = e.stack
        }
    }
}

// Inherit from Error.prototype
AssertionError.prototype = Object.create(Error.prototype)

// Statically set name
AssertionError.prototype.name = 'AssertionError'

// Ensure correct constructor
AssertionError.prototype.constructor = AssertionError


/**
 * Allow errors to be converted to JSON
 *
 * @param {Boolean} include stack (default: `true`)
 * @return {Object} object that can be `JSON.stringify`
 */
AssertionError.prototype.toJSON = function (stack) {
    var extend = exclude('constructor', 'toJSON', 'stack'),
        props = extend({ name: this.name }, this)

    // include stack if exists and not turned off
    if (false !== stack && this.stack) {
        props.stack = this.stack
    }

    return props
}
