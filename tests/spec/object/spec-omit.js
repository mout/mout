import omit from '../../../object/omit';

describe('object/omit()', function() {
    it('should remove all specified properties', function() {
        const obj = {
            foo: 1,
            bar: 2,
            lorem: 3
        };
        const result = omit(obj, 'foo', 'lorem');
        expect(result).toEqual({ bar: 2 });
    });

    it('should allow passing keys that should be removed as array', function() {
        const obj = {
            a: false, // test for falsy value
            b: 'bar',
            toString: 'dolor' // test don't enum bug on IE
        };
        const result = omit(obj, ['a', 'toString']);
        expect(result).toEqual({ b: 'bar' });
    });
});
