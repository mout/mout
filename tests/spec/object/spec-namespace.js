import namespace from '../../../object/namespace';

describe('object/namespace()', function() {
    it('should create nested properties if not existent and return the created object', function() {
        const o = {};
        namespace(o, 'foo.bar');
        expect(o.foo).toEqual({ bar: {} });
        expect(o.foo.bar).toEqual({});
    });

    it('should return an empty object', function() {
        expect(namespace({}, 'foo.bar')).toEqual({});
    });

    it('should reuse existing objects', function() {
        const o = {
            foo: {
                lorem: 'ipsum'
            }
        };

        const f = o.foo;

        expect(namespace(o, 'foo.bar')).toEqual({});
        expect(o.foo).toEqual(f);
        expect(o.foo.lorem).toEqual('ipsum');
    });

    it('should return original object if no path', function() {
        const obj = {};
        expect(namespace(obj)).toEqual(obj);
        expect(namespace(obj, '')).toEqual(obj);
        expect(namespace(obj, null)).toEqual(obj);
    });

    it("shouldn't overwrite existing object", function() {
        const obj = {
            foo: {
                bar: {
                    val: 123
                }
            }
        };

        const foo = obj.foo;

        expect(namespace(obj, 'foo.bar')).toEqual(foo.bar);
    });
});
