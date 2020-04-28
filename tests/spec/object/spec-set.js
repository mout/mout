import set from '../../../object/set';

describe('object/set()', function() {
    it('should create nested properties if not existent and set the value', function() {
        const o = {};
        set(o, 'foo.bar', 123);
        expect(o.foo.bar).toBe(123);
    });

    it('should not create nested properties if it does exist', function() {
        const f = {
            lorem: 'ipsum'
        };
        const o = {
            foo: f
        };
        set(o, 'foo.bar', 123);
        expect(o.foo.bar).toBe(123);
        expect(o.foo).toBe(f);
        expect(o.foo.lorem).toBe('ipsum');
    });

    it('shold work even if not nested path', function() {
        const o = {};
        set(o, 'foo', 'bar');
        expect(o.foo).toEqual('bar');
    });
});
