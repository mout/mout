import join from '../../../array/join';

describe('array/join()', function() {
    it('should join strings in the array', function() {
        const arr = ['foo', 'bar'];
        expect(join(arr, ', ')).toEqual('foo, bar');
    });

    it('should convert items to string', function() {
        const testObj = {
            toString: function() {
                return 'test';
            }
        };
        const arr = [0, 1, 2, testObj];
        expect(join(arr, '+')).toEqual('0+1+2+test');
    });

    it('should default to blank separator', function() {
        const arr = ['foo', 'bar'];
        expect(join(arr)).toEqual('foobar');
    });

    it('should exclude null and empty values', function() {
        const arr = [null, 'foo', '', 'bar', undefined, 'baz'];
        expect(join(arr, '-')).toEqual('foo-bar-baz');
    });

    it('should return empty string when array is null/undefined', function() {
        expect(join(null)).toEqual('');
        expect(join(undefined)).toEqual('');
    });
});
