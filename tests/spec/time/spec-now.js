import now from '../../../time/now';

const past = now();

describe('time/now()', function() {
    it('should return an integer', function() {
        const b = now();
        expect(b.toFixed('0')).toEqual(b + '');
    });

    it('should be greater than first call', function() {
        expect(now()).toBeGreaterThan(past);
    });
});
