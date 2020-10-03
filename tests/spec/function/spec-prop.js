import prop from '../../../function/prop';

describe('function/prop()', function() {
    it('should grab property from object', function() {
        const o = { foo: 'bar' };
        const getFoo = prop('foo');

        expect(getFoo(o)).toBe('bar');
    });
});
