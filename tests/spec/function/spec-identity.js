import identity from '../../../function/identity';

describe('function/identity', function() {
    it('should return first argument provided to it', function() {
        expect(identity(1, 2, 3)).toBe(1);
        expect(identity(3)).toBe(3);
        expect(identity(null)).toBe(null);
        expect(identity(void 0)).toBe(void 0);
        const obj = {};
        expect(identity(obj)).toBe(obj);
    });
});
