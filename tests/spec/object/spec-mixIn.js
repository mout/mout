import mixIn from '../../../object/mixIn';

describe('object/mixIn()', function() {
    let a1;
    let a2;
    let a3;
    let a4;
    let a14;
    let b1;
    let b2;
    let b12;

    beforeEach(function() {
        a1 = { a: 0, b: 1, c: 2 };
        a2 = { d: 3, e: 4 };
        a3 = { f: 5 };
        a4 = { g: 6 };
        a14 = { a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6 };

        b1 = { a: 1, b: 2, c: 3 };
        b2 = { b: 4, d: 8 };
        b12 = { a: 1, b: 4, c: 3, d: 8 };
    });

    it('should combine objects properties and modify original object', function() {
        mixIn(a1, a2, a3, a4);
        expect(a1).toEqual(a14);

        const r = mixIn(b1, b2);
        expect(r).toEqual(b12);
        expect(r).toBe(b1);
    });

    it('should work with empty objects', function() {
        expect(mixIn({}, b1, b2, {})).toEqual(b12);
    });

    it('should ignore null/undefined values', function() {
        expect(mixIn(b1, null, undefined, b2)).toEqual(b12);
    });

    it('should fix dont enum bug on IE', function() {
        const r = mixIn(
            {
                hasOwnProperty: 'foo'
            },
            {
                a: 1,
                b: 2,
                toString: 'dolor',
                hasOwnProperty: 'bar'
            }
        );
        expect(r.hasOwnProperty).toEqual('bar');
        expect(r.toString).toEqual('dolor');
        expect(r.a).toEqual(1);
        expect(r.b).toEqual(2);
    });
});
