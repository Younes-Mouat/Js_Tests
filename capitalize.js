'use strict'

/*
 * Create a function `capitalize` takes a string
 * and transform to upper case only the first letter
 *
 * @next jaden-case
*/

function capitalize(Name) {
    return Name.charAt(0).toUpperCase() + Name.slice(1,Name.lenght);
}

function isUpperCase(string) {
    return string === string.toUpperCase();
}

function isLowerCase(string) {
    return string === string.toLowerCase();
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof capitalize, 'function')
assert.strictEqual(typeof isUpperCase, 'function')
assert.strictEqual(typeof isLowerCase, 'function')
assert.strictEqual(typeof capitalize("mouatamir"), 'string')
assert.strictEqual(isUpperCase(capitalize("younes").charAt(0)), true)
assert.strictEqual(isLowerCase(capitalize("mouatamir").slice(1)), true)
assert.deepStrictEqual(capitalize("cyberleet"), "Cyberleet")
assert.deepStrictEqual(capitalize("cybeRLEet"), "CybeRLEet")

// End of tests */