define(['src/string/startsWith'], function (startsWith) {

    describe('string/startsWith()', function(){

        it('should return true if string starts with prefix', function(){
            expect( startsWith('lorem-ipsum', 'lorem') ).toBeTruthy();
        });

        it('should return false if string does not start with prefix', function(){
            expect( startsWith('lorem-ipsum', 'ipsum')).toBeFalsy();
        });

        it('should treat undefined as empty string', function () {
            var str;
            expect( startsWith(str, 'ipsum') ).toBeFalsy();
        });

        it('should treat null as empty string', function(){
            expect( startsWith(null, '') ).toBeTruthy();
        });

        it('should return true if prefix undefined', function(){
            var prefix;
            expect( startsWith('lorem-ipsum', prefix) ).toBeTruthy();
        });

        it('should return true if prefix null', function () {
            expect( startsWith('lorem-ipsum', null) ).toBeTruthy();
        });

    });
});
