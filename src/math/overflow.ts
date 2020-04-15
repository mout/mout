/**
 * Wraps number within bounds both positive and negative
 */
function overflow(number: number, min: number, max: number): number {
    if (max === undefined) {
        max = min;
        min = 0;
    }

    const difference = max - min;

    if (number < min) {
        number += difference * (~~((min - number) / difference) + 1);
    }

    return min + ((number - min) % difference);
}

export default overflow;
