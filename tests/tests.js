var assert = require('assert');
var assertEquals = assert.equal;
var assertThrows = assert['throws'];

require('../endswith.js');

assertEquals(String.prototype.endsWith.length, 1);

assertEquals('undefined'.endsWith(), true);
assertEquals('undefined'.endsWith(undefined), true);
assertEquals('undefined'.endsWith(null), false);
assertEquals('null'.endsWith(), false);
assertEquals('null'.endsWith(undefined), false);
assertEquals('null'.endsWith(null), true);

assertEquals('abc'.endsWith(), false);
assertEquals('abc'.endsWith(''), true);
assertEquals('abc'.endsWith('\0'), false);
assertEquals('abc'.endsWith('c'), true);
assertEquals('abc'.endsWith('b'), false);
assertEquals('abc'.endsWith('ab'), false);
assertEquals('abc'.endsWith('bc'), true);
assertEquals('abc'.endsWith('abc'), true);
assertEquals('abc'.endsWith('bcd'), false);
assertEquals('abc'.endsWith('abcd'), false);
assertEquals('abc'.endsWith('bcde'), false);

assertEquals('abc'.endsWith('', NaN), true);
assertEquals('abc'.endsWith('\0', NaN), false);
assertEquals('abc'.endsWith('c', NaN), false);
assertEquals('abc'.endsWith('b', NaN), false);
assertEquals('abc'.endsWith('ab', NaN), false);
assertEquals('abc'.endsWith('bc', NaN), false);
assertEquals('abc'.endsWith('abc', NaN), false);
assertEquals('abc'.endsWith('bcd', NaN), false);
assertEquals('abc'.endsWith('abcd', NaN), false);
assertEquals('abc'.endsWith('bcde', NaN), false);

assertEquals('abc'.endsWith('', false), true);
assertEquals('abc'.endsWith('\0', false), false);
assertEquals('abc'.endsWith('c', false), false);
assertEquals('abc'.endsWith('b', false), false);
assertEquals('abc'.endsWith('ab', false), false);
assertEquals('abc'.endsWith('bc', false), false);
assertEquals('abc'.endsWith('abc', false), false);
assertEquals('abc'.endsWith('bcd', false), false);
assertEquals('abc'.endsWith('abcd', false), false);
assertEquals('abc'.endsWith('bcde', false), false);

assertEquals('abc'.endsWith('', undefined), true);
assertEquals('abc'.endsWith('\0', undefined), false);
assertEquals('abc'.endsWith('c', undefined), true);
assertEquals('abc'.endsWith('b', undefined), false);
assertEquals('abc'.endsWith('ab', undefined), false);
assertEquals('abc'.endsWith('bc', undefined), true);
assertEquals('abc'.endsWith('abc', undefined), true);
assertEquals('abc'.endsWith('bcd', undefined), false);
assertEquals('abc'.endsWith('abcd', undefined), false);
assertEquals('abc'.endsWith('bcde', undefined), false);

assertEquals('abc'.endsWith('', null), true);
assertEquals('abc'.endsWith('\0', null), false);
assertEquals('abc'.endsWith('c', null), false);
assertEquals('abc'.endsWith('b', null), false);
assertEquals('abc'.endsWith('ab', null), false);
assertEquals('abc'.endsWith('bc', null), false);
assertEquals('abc'.endsWith('abc', null), false);
assertEquals('abc'.endsWith('bcd', null), false);
assertEquals('abc'.endsWith('abcd', null), false);
assertEquals('abc'.endsWith('bcde', null), false);

assertEquals('abc'.endsWith('', -Infinity), true);
assertEquals('abc'.endsWith('\0', -Infinity), false);
assertEquals('abc'.endsWith('c', -Infinity), false);
assertEquals('abc'.endsWith('b', -Infinity), false);
assertEquals('abc'.endsWith('ab', -Infinity), false);
assertEquals('abc'.endsWith('bc', -Infinity), false);
assertEquals('abc'.endsWith('abc', -Infinity), false);
assertEquals('abc'.endsWith('bcd', -Infinity), false);
assertEquals('abc'.endsWith('abcd', -Infinity), false);
assertEquals('abc'.endsWith('bcde', -Infinity), false);

assertEquals('abc'.endsWith('', -1), true);
assertEquals('abc'.endsWith('\0', -1), false);
assertEquals('abc'.endsWith('c', -1), false);
assertEquals('abc'.endsWith('b', -1), false);
assertEquals('abc'.endsWith('ab', -1), false);
assertEquals('abc'.endsWith('bc', -1), false);
assertEquals('abc'.endsWith('abc', -1), false);
assertEquals('abc'.endsWith('bcd', -1), false);
assertEquals('abc'.endsWith('abcd', -1), false);
assertEquals('abc'.endsWith('bcde', -1), false);

assertEquals('abc'.endsWith('', -0), true);
assertEquals('abc'.endsWith('\0', -0), false);
assertEquals('abc'.endsWith('c', -0), false);
assertEquals('abc'.endsWith('b', -0), false);
assertEquals('abc'.endsWith('ab', -0), false);
assertEquals('abc'.endsWith('bc', -0), false);
assertEquals('abc'.endsWith('abc', -0), false);
assertEquals('abc'.endsWith('bcd', -0), false);
assertEquals('abc'.endsWith('abcd', -0), false);
assertEquals('abc'.endsWith('bcde', -0), false);

assertEquals('abc'.endsWith('', +0), true);
assertEquals('abc'.endsWith('\0', +0), false);
assertEquals('abc'.endsWith('c', +0), false);
assertEquals('abc'.endsWith('b', +0), false);
assertEquals('abc'.endsWith('ab', +0), false);
assertEquals('abc'.endsWith('bc', +0), false);
assertEquals('abc'.endsWith('abc', +0), false);
assertEquals('abc'.endsWith('bcd', +0), false);
assertEquals('abc'.endsWith('abcd', +0), false);
assertEquals('abc'.endsWith('bcde', +0), false);

assertEquals('abc'.endsWith('', 1), true);
assertEquals('abc'.endsWith('\0', 1), false);
assertEquals('abc'.endsWith('c', 1), false);
assertEquals('abc'.endsWith('b', 1), false);
assertEquals('abc'.endsWith('ab', 1), false);
assertEquals('abc'.endsWith('bc', 1), false);
assertEquals('abc'.endsWith('abc', 1), false);
assertEquals('abc'.endsWith('bcd', 1), false);
assertEquals('abc'.endsWith('abcd', 1), false);
assertEquals('abc'.endsWith('bcde', 1), false);

assertEquals('abc'.endsWith('', 2), true);
assertEquals('abc'.endsWith('\0', 2), false);
assertEquals('abc'.endsWith('c', 2), false);
assertEquals('abc'.endsWith('b', 2), true);
assertEquals('abc'.endsWith('ab', 2), true);
assertEquals('abc'.endsWith('bc', 2), false);
assertEquals('abc'.endsWith('abc', 2), false);
assertEquals('abc'.endsWith('bcd', 2), false);
assertEquals('abc'.endsWith('abcd', 2), false);
assertEquals('abc'.endsWith('bcde', 2), false);

assertEquals('abc'.endsWith('', +Infinity), true);
assertEquals('abc'.endsWith('\0', +Infinity), false);
assertEquals('abc'.endsWith('c', +Infinity), true);
assertEquals('abc'.endsWith('b', +Infinity), false);
assertEquals('abc'.endsWith('ab', +Infinity), false);
assertEquals('abc'.endsWith('bc', +Infinity), true);
assertEquals('abc'.endsWith('abc', +Infinity), true);
assertEquals('abc'.endsWith('bcd', +Infinity), false);
assertEquals('abc'.endsWith('abcd', +Infinity), false);
assertEquals('abc'.endsWith('bcde', +Infinity), false);

assertEquals('abc'.endsWith('', true), true);
assertEquals('abc'.endsWith('\0', true), false);
assertEquals('abc'.endsWith('c', true), false);
assertEquals('abc'.endsWith('b', true), false);
assertEquals('abc'.endsWith('ab', true), false);
assertEquals('abc'.endsWith('bc', true), false);
assertEquals('abc'.endsWith('abc', true), false);
assertEquals('abc'.endsWith('bcd', true), false);
assertEquals('abc'.endsWith('abcd', true), false);
assertEquals('abc'.endsWith('bcde', true), false);

assertEquals('abc'.endsWith('', 'x'), true);
assertEquals('abc'.endsWith('\0', 'x'), false);
assertEquals('abc'.endsWith('c', 'x'), false);
assertEquals('abc'.endsWith('b', 'x'), false);
assertEquals('abc'.endsWith('ab', 'x'), false);
assertEquals('abc'.endsWith('bc', 'x'), false);
assertEquals('abc'.endsWith('abc', 'x'), false);
assertEquals('abc'.endsWith('bcd', 'x'), false);
assertEquals('abc'.endsWith('abcd', 'x'), false);
assertEquals('abc'.endsWith('bcde', 'x'), false);

assertEquals('[a-z]+(bar)?'.endsWith('(bar)?'), true);
assertThrows(function() { '[a-z]+(bar)?'.endsWith(/(bar)?/); }, TypeError);
assertEquals('[a-z]+(bar)?'.endsWith('[a-z]+', 6), true);
assertThrows(function() { '[a-z]+(bar)?'.endsWith(/(bar)?/); }, TypeError);
assertThrows(function() { '[a-z]+/(bar)?/'.endsWith(/(bar)?/); }, TypeError);

// http://mathiasbynens.be/notes/javascript-unicode#poo-test
var string = 'I\xF1t\xEBrn\xE2ti\xF4n\xE0liz\xE6ti\xF8n\u2603\uD83D\uDCA9';
assertEquals(string.endsWith(''), true);
assertEquals(string.endsWith('\xF1t\xEBr'), false);
assertEquals(string.endsWith('\xF1t\xEBr', 5), true);
assertEquals(string.endsWith('\xE0liz\xE6'), false);
assertEquals(string.endsWith('\xE0liz\xE6', 16), true);
assertEquals(string.endsWith('\xF8n\u2603\uD83D\uDCA9'), true);
assertEquals(string.endsWith('\xF8n\u2603\uD83D\uDCA9', 23), true);
assertEquals(string.endsWith('\u2603'), false);
assertEquals(string.endsWith('\u2603', 21), true);
assertEquals(string.endsWith('\uD83D\uDCA9'), true);
assertEquals(string.endsWith('\uD83D\uDCA9', 23), true);

assertThrows(function() { String.prototype.endsWith.call(undefined); }, TypeError);
assertThrows(function() { String.prototype.endsWith.call(undefined, 'b'); }, TypeError);
assertThrows(function() { String.prototype.endsWith.call(undefined, 'b', 4); }, TypeError);
assertThrows(function() { String.prototype.endsWith.call(null); }, TypeError);
assertThrows(function() { String.prototype.endsWith.call(null, 'b'); }, TypeError);
assertThrows(function() { String.prototype.endsWith.call(null, 'b', 4); }, TypeError);
assertEquals(String.prototype.endsWith.call(42, '2'), true);
assertEquals(String.prototype.endsWith.call(42, '4'), false);
assertEquals(String.prototype.endsWith.call(42, 'b', 4), false);
assertEquals(String.prototype.endsWith.call(42, '2', 1), false);
assertEquals(String.prototype.endsWith.call(42, '2', 4), true);
assertEquals(String.prototype.endsWith.call({ 'toString': function() { return 'abc'; } }, 'b', 0), false);
assertEquals(String.prototype.endsWith.call({ 'toString': function() { return 'abc'; } }, 'b', 1), false);
assertEquals(String.prototype.endsWith.call({ 'toString': function() { return 'abc'; } }, 'b', 2), true);
assertThrows(function() { String.prototype.endsWith.call({ 'toString': function() { throw RangeError(); } }, /./); }, RangeError);

assertThrows(function() { String.prototype.endsWith.apply(undefined); }, TypeError);
assertThrows(function() { String.prototype.endsWith.apply(undefined, ['b']); }, TypeError);
assertThrows(function() { String.prototype.endsWith.apply(undefined, ['b', 4]); }, TypeError);
assertThrows(function() { String.prototype.endsWith.apply(null); }, TypeError);
assertThrows(function() { String.prototype.endsWith.apply(null, ['b']); }, TypeError);
assertThrows(function() { String.prototype.endsWith.apply(null, ['b', 4]); }, TypeError);
assertEquals(String.prototype.endsWith.apply(42, ['2']), true);
assertEquals(String.prototype.endsWith.apply(42, ['4']), false);
assertEquals(String.prototype.endsWith.apply(42, ['b', 4]), false);
assertEquals(String.prototype.endsWith.apply(42, ['2', 1]), false);
assertEquals(String.prototype.endsWith.apply(42, ['2', 4]), true);
assertEquals(String.prototype.endsWith.apply({ 'toString': function() { return 'abc'; } }, ['b', 0]), false);
assertEquals(String.prototype.endsWith.apply({ 'toString': function() { return 'abc'; } }, ['b', 1]), false);
assertEquals(String.prototype.endsWith.apply({ 'toString': function() { return 'abc'; } }, ['b', 2]), true);
assertThrows(function() { String.prototype.endsWith.apply({ 'toString': function() { throw RangeError(); } }, [/./]); }, RangeError);
