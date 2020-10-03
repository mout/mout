import choice from './choice';

const _chars = '0123456789abcdef'.split('');

/**
 * Returns a random hexadecimal string
 */
function randHex(size: number): string {
    size = size && size > 0 ? size : 6;
    let str = '';
    while (size--) {
        str += choice(_chars);
    }
    return str;
}

export default randHex;
