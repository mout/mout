import size from '../../../collection/size';

describe('collection/size', function() {
    it('should return array length', function() {
        expect(size([1, 2, 3])).toBe(3);
    });

    it('should return object keys length', function() {
        expect(size({ a: 1, b: 2, c: 3 })).toBe(3);
    });

    it('should avoid dont enum bugs', function() {
        const obj = {
            toString: 123,
            valueOf: true,
            hasOwnProperty: 'ipsum'
        };

        const s = size(obj);

        expect(s).toBe(3);
    });

    it('should not count prototype properties', function() {
        const Foo = function() {
            this.lorem = 'ipsum';
        };
        Foo.prototype = { foo: 'bar' };

        const obj = new Foo();

        expect(obj.lorem).toEqual('ipsum');
        expect(obj.foo).toEqual('bar');
        expect(size(obj)).toEqual(1);
    });

    it('should return zero if no collection', function() {
        expect(size(null)).toEqual(0);
        expect(size(undefined)).toEqual(0);
    });
});
