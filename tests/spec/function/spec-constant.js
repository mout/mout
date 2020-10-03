import constant from '../../../function/constant';

describe('function/constant', function() {
    it('should return new function that returns a value', function() {
        let f = constant(1);
        expect(f()).toBe(1);
        expect(f(2)).toBe(1);
        expect(f.call({})).toBe(1);

        f = constant('foo');
        expect(f()).toBe('foo');
    });

    it('should return exact object', function() {
        const obj = {};
        const f = constant(obj);

        expect(f()).toBe(obj);
    });

    it('should handle null and undefined', function() {
        let f = constant(null);
        expect(f()).toBeNull();

        f = constant();
        expect(f()).toBeUndefined();
    });
});
