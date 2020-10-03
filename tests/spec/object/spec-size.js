import size from '../../../object/size';

describe('object/size()', function() {
    it('should get object size', function() {
        const obj = {
            foo: 123,
            bar: true,
            lorem: 'ipsum'
        };

        const s = size(obj);

        expect(s).toBe(3);
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
});
