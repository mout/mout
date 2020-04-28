import pick from '../../../object/pick';

describe('object/pick()', function() {
    it('should keep only desired properties', function() {
        const obj = {
            foo: 1,
            bar: 2,
            lorem: 3
        };
        const result = pick(obj, 'foo', 'lorem');
        expect(result).toEqual({ foo: 1, lorem: 3 });
    });

    it('should allow passing keys as array', function() {
        const obj = {
            a: false, // test for falsy value
            b: 'bar',
            toString: 'dolor' // test don't enum bug on IE
        };
        const result = pick(obj, ['a', 'toString']);
        expect(result).toEqual({ a: false, toString: 'dolor' });
    });
});
