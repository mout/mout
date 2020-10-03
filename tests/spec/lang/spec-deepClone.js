import deepClone from '../../../lang/deepClone';

describe('lang/deepClone()', function() {
    it('should create a new object and copy properties', function() {
        const a = { a: 1, b: 2, c: 'foo' };
        const b = deepClone(a);
        expect(b).toEqual(a);
        expect(b).not.toBe(a);
    });

    it('should deep clone objects', function() {
        const a = {
            a: 1,
            b: {
                c: 'lorem',
                d: {
                    e: 'ipsum',
                    f: 2
                }
            }
        };
        const b = deepClone(a);

        expect(b).toEqual(a);
        expect(b).not.toBe(a);
        expect(b.b).toEqual(a.b);
        expect(b.b).not.toBe(a.b);
        expect(b.b.d).toEqual(a.b.d);
        expect(b.b.d).not.toBe(a.b.d);
    });

    it('should deep clone arrays', function() {
        const a = {
            a: 1,
            b: [1, 2, ['lorem', { c: 'ipsum', d: ['dolor', 'amet'] }]]
        };

        const b = deepClone(a);

        expect(b).toEqual(a);
        expect(b).not.toBe(a);
        expect(b.b).toEqual(a.b);
        expect(b.b).not.toBe(a.b);
        expect(b.b[2]).toEqual(a.b[2]);
        expect(b.b[2]).not.toBe(a.b[2]);
        expect(b.b[2][1]).toEqual(a.b[2][1]);
        expect(b.b[2][1]).not.toBe(a.b[2][1]);
    });

    it('should handle RegExp', function() {
        const a = {
            a: 1,
            b: /foo\/bar\/(.+)/
        };
        const b = deepClone(a);

        expect(b).toEqual(a);
        expect(b).not.toBe(a);
        expect(b.b.test('foo/bar/ipsum-123')).toBe(true);
        expect(b.b).not.toBe(a.b);
    });

    it('should handle Date', function() {
        const a = {
            a: 1,
            b: new Date()
        };
        const b = deepClone(a);

        expect(b).toEqual(a);
        expect(b).not.toBe(a);
        expect(b.b).toEqual(a.b);
        expect(b.b).not.toBe(a.b);
    });

    it('should invoke function to clone instances', function() {
        function CustomType() {}

        const a = {
            test: new CustomType()
        };

        const result = deepClone(a, function(x) {
            expect(x).toBe(a.test);
            return 1;
        });

        expect(result.test).toEqual(1);
    });

    it('should copy custom instances by reference by default', function() {
        function CustomType() {}
        const a = {
            test: new CustomType()
        };

        const result = deepClone(a);
        expect(result.test).toBe(a.test);
    });
});
