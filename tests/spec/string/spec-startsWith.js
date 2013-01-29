define(['mout/string/startsWith'], function (startsWith) {

    describe('string/startsWith()', function(){

        it('should return true if string starts with prefix', function(){
            expect( startsWith('lorem-ipsum', 'lorem') ).toBeTruthy();
        });

        it('should return false if string does not start with prefix', function(){
            expect( startsWith('lorem-ipsum', 'ipsum')).toBeFalsy();
        });

        it('should return true if prefix is empty', function(){
            expect( startsWith('', '') ).toBeTruthy();
            expect( startsWith('lorem', '') ).toBeTruthy();
        });

        it('should treat undefined as empty string', function () {
            expect( startsWith(void 0, 'ipsum') ).toBeFalsy();
            expect( startsWith('lorem', void 0) ).toBeTruthy();
        });

        it('should treat null as empty string', function(){
            expect( startsWith(null, '') ).toBeTruthy();
            expect( startsWith('lorem', null) ).toBeTruthy();
        });

    });
});
