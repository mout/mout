import random from './random';

/**
 * returns a random boolean value (true or false)
 */
function randBool() {
    return random() >= 0.5;
}

export default randBool;
