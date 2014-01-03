// Run this script with Node to generate the pattern that is included in
// src/string/removeNonWord.js.
//
//     node _build/pattern-removeNonWord
//

var regenerate = require('regenerate');

var pattern = regenerate()
    .addRange('a', 'z')
    .addRange('A', 'Z')
    .addRange('0', '9')
    .addRange(0xC0, 0xFF)
    .add(' ', '-', '_')
    .remove(0xF7, 0xD7)
    .toString();

console.log('// Pattern for string/removeNonWord:');
console.log('/' + pattern + '/g');
