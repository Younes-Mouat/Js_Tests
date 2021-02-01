'use strict'

/*
 * Create a function `yell` that takes a string
 * and return the same string but all in upper case
 *
 * @next cut
 */

function yell(str) {
    return str.toUpperCase();
}


//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof yell, 'function')
assert.strictEqual(yell.length, 1)
assert.deepStrictEqual(yell("cyberleet"), "CYBERLEET")
assert.deepStrictEqual(yell("cYBErlEEt"), "CYBERLEET")
// End of tests */