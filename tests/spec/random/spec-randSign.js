import randSign from '../../../random/randSign';
import mockRandom from './helper-mockRandom';

describe('random/randSign()', function() {
    beforeEach(function() {
        mockRandom.start();
    });

    afterEach(function() {
        mockRandom.end();
    });

    it('returns a random number at each call', function() {
        const a = randSign();
        const b = randSign();

        expect(a).not.toBeUndefined();
        expect(a).not.toEqual(Infinity);
        expect(a).not.toEqual(NaN);
        expect(a).not.toEqual(b);
    });

    it('shouldn\t be biased', function() {
        let c1 = 0;
        let c2 = 0;
        let n = 10;
        let rnd;

        while (n--) {
            rnd = randSign();
            if (rnd === 1) {
                c1++;
            } else if (rnd === -1) {
                c2++;
            } else {
                expect(rnd).toBe('fail, out of range.');
            }
        }

        expect(c2).toEqual(5);
        expect(c1).toEqual(5);
    });
});
