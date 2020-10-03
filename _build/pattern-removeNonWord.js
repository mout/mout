// Run this script with Node to generate the pattern that is included in
// src/string/removeNonWord.js.
//
//     node _build/pattern-removeNonWord
//

const regenerate = require('regenerate');

const pattern = regenerate()
    .addRange('a', 'z')
    .addRange('A', 'Z')
    .addRange('0', '9')
    .addRange(0xc0, 0xff)
    .add(' ', '-', '_')
    .remove(0xf7, 0xd7)
    .toString();

console.log('// Pattern for string/removeNonWord:');
console.log(`/${pattern}/g`);
