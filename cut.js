'use strict'

/*
 * Create the function `cutFirst` that takes a string and remove the 2 last characters
 * Create the function `cutLast` that takes a string and remove the 2 first charcters
 * Create the function `cutFistLast` that takes a string
 * and remove the 2 first charcters and 2 last characters
 *
 * @next keep
 */


function cutFirst(elt) {
    const str = elt.slice(0,elt.length - 2)
    return str;
}

function cutLast(elt) {
    const str = elt.slice(2,elt.length)
    return str;
}

function cutFirstLast(elt) {
    return cutFirst(cutLast(elt));
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof cutFirst, 'function')
assert.strictEqual(typeof cutLast, 'function')
assert.strictEqual(typeof cutFirstLast, 'function')
assert.strictEqual(cutFirst.length, 1)
assert.strictEqual(cutLast.length, 1)
assert.strictEqual(cutFirstLast.length, 1)
assert.strictEqual(cutFirst("CyberLeet").length, 7)
assert.strictEqual(cutLast("CyberLeet").length, 7)
assert.strictEqual(cutFirstLast("CyberLeet").length, 5)
assert.deepStrictEqual(cutFirst("Younes"), "Youn")
assert.deepStrictEqual(cutLast("Mouatamir"), "uatamir")
assert.deepStrictEqual(cutFirstLast("Younes"), "un")
// End of tests */