import func from '../../../function/func';

describe('function/func()', function() {
    it('should call method of object', function() {
        const o = {
            getFoo: function() {
                return 'bar';
            }
        };
        const getFoo = func('getFoo');

        expect(getFoo(o)).toBe('bar');
    });
});
