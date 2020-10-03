import isNumber from '../lang/isNumber';
import isString from '../lang/isString';
import randInt from './randInt';

const defaultDictionary = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

function randomString(length, dictionary) {
    if (!isNumber(length) || length <= 0) {
        length = 8;
    }

    if (!isString(dictionary) || dictionary.length < 1) {
        dictionary = defaultDictionary;
    }

    let result = '';
    const domain = dictionary.length - 1;

    while (length--) {
        result += dictionary[randInt(0, domain)];
    }

    return result;
}

export default randomString;
