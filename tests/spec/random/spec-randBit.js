import randBit from '../../../random/randBit';
import mockRandom from './helper-mockRandom';

describe('random/randBit()', function() {
    beforeEach(function() {
        mockRandom.start();
    });

    afterEach(function() {
        mockRandom.end();
    });

    it('returns a random number at each call', function() {
        const a = randBit();
        const b = randBit();
        expect(a).not.toBeUndefined();
        expect(a).not.toEqual(Infinity);
        expect(a).not.toEqual(NaN);
        expect(a).not.toEqual(b);
    });

    it('shouldn\t be biased', function() {
        let c1 = 0;
        let c0 = 0;
        let n = 10;
        let rnd;

        while (n--) {
            rnd = randBit();
            if (rnd === 1) {
                c1++;
            } else if (rnd === 0) {
                c0++;
            } else {
                expect(rnd).toBe('fail, out of range.');
            }
        }

        expect(c0).toEqual(5);
        expect(c1).toEqual(5);
    });
});
