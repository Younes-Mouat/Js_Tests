'use strict'

/*
 * Create a function `concatStr` that takes 2 arguments and concatenate them
 *
 * @notions Functions, Operators
 * @next get
 */

// Your code :

function concatStr(a, b) {
    const str_a = a.toString();
    const str_b = b.toString();

    return str_a + str_b;
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof concatStr, 'function', 'Should be a function')
assert.strictEqual(concatStr.length, 2, 'Should takes 2 arguments')
assert.strictEqual(concatStr('a', 'b'), 'ab')
assert.strictEqual(concatStr('yolo', 'swag'), 'yoloswag')
// End of tests */
