import keys from '../../../object/keys';

describe('object/keys()', function() {
    it('should get object keys', function() {
        const obj = {
            foo: 123,
            bar: true,
            lorem: 'ipsum'
        };

        const k = keys(obj);

        expect(k.length).toBe(3);

        const haystack = ['foo', 'bar', 'lorem'];
        expect(k[0] !== k[1] && k[0] !== k[2]).toBe(true);
        expect(haystack).toContain(k[0]);
        expect(haystack).toContain(k[1]);
        expect(haystack).toContain(k[2]);
    });

    it('should avoid dont enum bugs', function() {
        const obj = {
            toString: 123,
            valueOf: true,
            hasOwnProperty: 'ipsum'
        };

        const k = keys(obj);

        expect(k.length).toBe(3);

        const haystack = ['toString', 'valueOf', 'hasOwnProperty'];
        expect(k[0] !== k[1] && k[0] !== k[2]).toBe(true);
        expect(haystack).toContain(k[0]);
        expect(haystack).toContain(k[1]);
        expect(haystack).toContain(k[2]);
    });

    it('should filter prototype properties', function() {
        const Foo = function() {
            this.lorem = 'ipsum';
        };
        Foo.prototype = { foo: 'bar' };

        const obj = new Foo();

        expect(obj.lorem).toEqual('ipsum');
        expect(obj.foo).toEqual('bar');
        expect(keys(obj)).toEqual(['lorem']);
    });
});
