define(['mout/string/endsWith'], function (endsWith) {

    describe('string/endsWith()', function(){

        it('should return true if string ends with suffix', function(){
            expect( endsWith('lorem-ipsum', 'ipsum') ).toBeTruthy();
        });

        it('should return false if string does not end with suffix', function(){
            expect( endsWith('lorem-ipsum', 'lorem') ).toBeFalsy();
        });

        it('should treat undefined as empty string', function () {
            expect( endsWith(void 0, 'ipsum') ).toBeFalsy();
            expect( endsWith('', void 0) ).toBeTruthy();
        });

        it('should treat null as empty string', function(){
            expect( endsWith(null, '') ).toBeTruthy();
            expect( endsWith('', null) ).toBeTruthy();
        });

        it('should return true if suffix undefined', function(){
            expect( endsWith('lorem-ipsum', void 0) ).toBeTruthy();
        });

        it('should return true if suffix null', function () {
            expect( endsWith('lorem-ipsum', null) ).toBeTruthy();
        });

    });
});
