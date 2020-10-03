import find from '../../../collection/find';

describe('collection/find', function() {
    it('should return first match for array', function() {
        const obj = { a: 'b' };
        const arr = [123, 'foo', 'bar', obj];

        expect(
            find(arr, function(val) {
                return val === 123;
            })
        ).toEqual(123);
        expect(
            find(arr, function(val) {
                return typeof val === 'string';
            })
        ).toEqual('foo');
        expect(
            find(arr, function(val) {
                return val.a === 'b';
            })
        ).toEqual(obj);
    });

    it('should return first match for object', function() {
        const inner = {
            first: 1,
            second: 2
        };

        const obj = {
            a: 123,
            b: 'foo',
            c: 'bar',
            d: inner
        };

        expect(
            find(obj, function(val) {
                return val === 123;
            })
        ).toEqual(123);
        expect(
            find(obj, function(val) {
                return typeof val === 'string';
            })
        ).toEqual('foo');
        expect(
            find(obj, function(val) {
                return val.first === 1;
            })
        ).toEqual(inner);
    });

    it('should support shorthand syntax', function() {
        const obj = {
            '0': { foo: 'bar', lorem: 'ipsum', id: 1 },
            '1': { foo: 'bar', lorem: 'ipsum', id: 2 },
            '2': { foo: 'bar', lorem: 'ipsum', id: 4 }
        };
        const arr = [obj[0], obj[1], obj[2]];

        expect(find(obj, { lorem: 'ipsum', id: 1 })).toEqual(obj[0]);
        expect(find(obj, { amet: 123 })).toBeUndefined();

        expect(find(arr, { lorem: 'ipsum', id: 1 })).toEqual(obj[0]);
        expect(find(arr, { amet: 123 })).toBeUndefined();
    });

    it('should allow string shorthand syntax', function() {
        const obj = {
            '0': { foo: 'bar', lorem: 'ipsum', id: 0 },
            '1': { foo: 'bar', lorem: 'ipsum', id: 1 }
        };
        const arr = [obj[0], obj[1]];

        expect(find(obj, 'id')).toEqual(obj[1]);
        expect(find(obj, 'amet')).toBeUndefined();

        expect(find(arr, 'id')).toEqual(obj[1]);
        expect(find(arr, 'amet')).toBeUndefined();
    });
});
