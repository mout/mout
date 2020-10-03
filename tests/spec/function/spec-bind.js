import bind from '../../../function/bind';

describe('function/bind()', function() {
    const o1 = { val: 'bar' };
    const o2 = { val: 123 };

    function getVal() {
        return this.val;
    }

    function doIt(a, b, c) {
        let str = '';
        str += a ? a : '';
        str += b ? b : '';
        str += c ? c : '';
        return this.val + str;
    }

    it('should change execution context', function() {
        const a = bind(getVal, o1);
        const b = bind(getVal, o2);
        expect(a()).toEqual('bar');
        expect(b()).toEqual(123);
    });

    it('should curry args', function() {
        const a = bind(doIt, o1, ' a', 'b', 'c');
        const b = bind(doIt, o2, '456');
        expect(a()).toEqual('bar abc');
        expect(b()).toEqual('123456');
    });
});
