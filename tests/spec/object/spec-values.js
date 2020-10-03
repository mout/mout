import values from '../../../object/values';

describe('object/values()', function() {
    it('should get object values', function() {
        const obj = {
            foo: 123,
            bar: true,
            lorem: 'ipsum'
        };

        const v = values(obj);

        expect(v.length).toBe(3);

        const haystack = [123, true, 'ipsum'];
        expect(v[0] !== v[1] && v[0] !== v[2]).toBe(true);
        expect(haystack).toContain(v[0]);
        expect(haystack).toContain(v[1]);
        expect(haystack).toContain(v[2]);
    });

    it('should avoid dont enum bugs', function() {
        const obj = {
            toString: 123,
            valueOf: true,
            hasOwnProperty: 'ipsum'
        };

        const v = values(obj);

        expect(v.length).toBe(3);

        const haystack = [123, true, 'ipsum'];
        expect(v[0] !== v[1] && v[0] !== v[2]).toBe(true);
        expect(haystack).toContain(v[0]);
        expect(haystack).toContain(v[1]);
        expect(haystack).toContain(v[2]);
    });

    it('should filter prototype properties', function() {
        const Foo = function() {
            this.lorem = 'ipsum';
        };
        Foo.prototype = { foo: 'bar' };

        const obj = new Foo();

        expect(obj.lorem).toEqual('ipsum');
        expect(obj.foo).toEqual('bar');
        expect(values(obj)).toEqual(['ipsum']);
    });
});
