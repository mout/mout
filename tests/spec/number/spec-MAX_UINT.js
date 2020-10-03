import MAX_INT from '../../../number/MAX_UINT';

describe('number/MAX_UINT', function() {
    it('should be equal (2 ^ 32) - 1', function() {
        expect(MAX_INT).toEqual(Math.pow(2, 32) - 1);
    });
});
