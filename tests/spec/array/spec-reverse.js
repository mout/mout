import reverse from '../../../array/reverse';
import rand from '../../../random/rand';

describe('array/reverse', function() {
    it('returns a copy of the array', function() {
        const a = [1, 2, 3];
        const b = reverse(a);

        expect(a === b).toBe(false);
    });

    it('reverses the order of the array', function() {
        const a = [1, 2, 3];
        const b = reverse(a);

        expect(b[2]).toBe(a[0]);
        expect(b[1]).toBe(a[1]);
        expect(b[0]).toBe(a[2]);
    });

    it('accepts arrays of arbitray size', function() {
        const length = Math.floor(rand(10, 100));
        const a = [];

        for (let i = 0; i < length; i++) {
            a.push(rand(0, 100000));
        }

        const b = reverse(a);

        for (let i = 0; i < length; i++) {
            expect(a[i]).toBe(b[length - 1 - i]);
        }
    });

    it('leaves the order of the original array in tact', function() {
        const a = [1, 2, 3, 4, 5];

        reverse(a);

        for (let i = 0; i < a.length; i++) {
            expect(a[i]).toBe(i + 1);
        }

        expect(a.length).toBe(5);
    });
});
