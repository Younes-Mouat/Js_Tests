'use strict'

/*
 * Jaden Smith Case
 *
 * Make a function `jadenCase` that takes a String
 * and return capitalize each words: "How are you ?" -> "How Are You ?"
 *
 * @next total
 */

function jadenCase(string) {
    var capitalized_array = [];
    var capitalized_string = "";
    var array = string.split(' ');
    array.forEach(element => {
        var elt = element.charAt(0).toUpperCase() + element.slice(1,element.lenght);
        capitalized_string = capitalized_string + " " + elt;
    });
    capitalized_array = capitalized_array + [capitalized_string];
    return capitalized_array;
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, 'function')
assert.strictEqual(jadenCase.length, 1)
assert.deepStrictEqual(jadenCase('a b c'), (' A B C'))
assert.deepStrictEqual(jadenCase('a 1 c'), (' A 1 C'))
assert.deepStrictEqual(jadenCase('a 1 c d e f'), (' A 1 C D E F'))
assert.deepStrictEqual(jadenCase('wol.lol lo,lol'), (' Wol.lol Lo,lol'))
// End of tests */
