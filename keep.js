'use strict'

/*
 * Create a function `keepFirst` takes a string
 * and only keep the 2 first characters
 *
 * Create a function `keepLast` takes a string
 * and only keep the 2 last characters
 *
 * Create a function `keepFirstLast` takes a string
 * and only keep 2 characters from the third character
 *
 * @next capitalize
 */

function KeepFirst(elt) {
    const str = elt.slice(0,2);
    return str;
}

function KeepLast(elt) {
    const str = elt.slice(elt.length-2);
    return str;
}

function KeepFirstLast(elt) {
    const str = elt.slice(2,4);
    return str;
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof KeepFirst, 'function')
assert.strictEqual(typeof KeepLast, 'function')
assert.strictEqual(typeof KeepFirstLast, 'function')
assert.strictEqual(KeepFirst.length, 1)
assert.strictEqual(KeepLast.length, 1)
assert.strictEqual(KeepFirstLast.length, 1)
assert.strictEqual(KeepFirst("CyberLeet").length, 2)
assert.strictEqual(KeepLast("CyberLeet").length, 2)
assert.strictEqual(KeepFirstLast("CyberLeet").length, 2)
assert.deepStrictEqual(KeepFirst("Younes"), "Yo")
assert.deepStrictEqual(KeepLast("Mouatamir"), "ir")
assert.deepStrictEqual(KeepFirstLast("Younes"), "un")
// End of tests */