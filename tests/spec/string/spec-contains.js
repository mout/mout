define(['mout/string/contains'], function (contains) {

    describe('string/contains()', function () {

        it('should return true if string contains substring', function () {
            expect( contains('lorem ipsum', 'lor') ).toEqual( true );
            expect( contains('lorem ipsum', 'o') ).toEqual( true );
            expect( contains('lorem ipsum', 'ip') ).toEqual( true );
            expect( contains('lorem ipsum', 'sum') ).toEqual( true );
        });

        it('should return false if string doesn\'t contain substring', function () {
            expect( contains('lorem ipsum', 'a') ).toEqual( false );
            expect( contains('lorem ipsum', 'lord') ).toEqual( false );
            expect( contains('lorem ipsum', 'bar') ).toEqual( false );
        });

        it('should work with empty strings', function () {
            expect( contains('', '') ).toEqual( true );
            expect( contains('foo', '') ).toEqual( true );
        });

        it('should treat null as empty string', function () {
            expect( contains(null, 'a') ).toEqual(false);
            expect( contains(null, '') ).toEqual(true);
            expect( contains('', null) ).toEqual(true);
        });

        it('should treat undefined as empty string', function(){
            expect( contains(void 0, '') ).toEqual(true);
            expect( contains('a', void 0) ).toEqual(true);
        });

    });

});
