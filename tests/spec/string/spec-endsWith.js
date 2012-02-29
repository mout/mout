define(['src/string/endsWith'], function (endsWith) {

    describe('string/endsWith()', function(){

        it('should return true if string ends with suffix', function(){
            expect( endsWith('lorem-ipsum', 'ipsum') ).toBeTruthy();
        });

        it('should return false if string does not end with suffix', function(){
            expect( endsWith('lorem-ipsum', 'lorem') ).toBeFalsy();
        });

        it('should treat undefined as empty string', function () {
            var str;
            expect( endsWith(str, 'ipsum') ).toBeFalsy();
        });

        it('should treat null as empty string', function(){
            expect( endsWith(null, '') ).toBeTruthy();
        });

        it('should return true if suffix undefined', function(){
            var suffix;
            expect( endsWith('lorem-ipsum', suffix) ).toBeTruthy();
        });

        it('should return true if suffix null', function () {
            expect( endsWith('lorem-ipsum', null) ).toBeTruthy();
        });

    });
});
