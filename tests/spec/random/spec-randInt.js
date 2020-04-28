import randInt from '../../../random/randInt';
import mockRandom from './helper-mockRandom';

describe('random/randInt()', function() {
    beforeEach(function() {
        mockRandom.start();
    });

    afterEach(function() {
        mockRandom.end();
    });

    it('returns a random number at each call', function() {
        const a = randInt();
        const b = randInt();
        expect(a).not.toBeUndefined();
        expect(a).not.toEqual(Infinity);
        expect(a).not.toEqual(NaN);
        expect(a).not.toEqual(b);
    });

    it('returns a same number if mix/max are same', function() {
        const a = randInt(1, 1);
        const b = randInt(1, 1);

        expect(a).not.toBeUndefined();
        expect(a).not.toEqual(Infinity);
        expect(a).not.toEqual(NaN);
        expect(a).toEqual(b);
    });

    it('returns a random number inside range', function() {
        const a = randInt(0, 9999);
        const b = randInt(0, 9999);
        expect(a).toBeLessThan(9999.01);
        expect(a).toBeGreaterThan(-0.01);
        expect(b).toBeLessThan(9999.01);
        expect(b).toBeGreaterThan(-0.01);
        expect(a).not.toEqual(b);
    });

    it("shouldn't be biased", function() {
        let c1 = 0;
        let c2 = 0;
        let c0 = 0;
        let n = 10;
        let rnd;

        while (n--) {
            rnd = randInt(-1, 1);
            if (rnd === 0) {
                c0++;
            } else if (rnd === 1) {
                c1++;
            } else if (rnd === -1) {
                c2++;
            } else {
                expect(rnd).toBe('fail, out of range.');
            }
        }

        expect(c0).toBeLessThan(5);
        expect(c0).toBeGreaterThan(2);
        expect(c1).toBeLessThan(5);
        expect(c1).toBeGreaterThan(2);
        expect(c2).toBeLessThan(5);
        expect(c2).toBeGreaterThan(2);
    });

    it('shouldn\t be biased 2', function() {
        let c1 = 0;
        let c0 = 0;
        let n = 10;
        let rnd;

        while (n--) {
            rnd = randInt(0, 1);
            if (rnd === 0) {
                c0++;
            } else if (rnd === 1) {
                c1++;
            } else {
                expect(rnd).toBe('fail, out of range.');
            }
        }

        expect(c0).toEqual(5);
        expect(c1).toEqual(5);
    });
});
