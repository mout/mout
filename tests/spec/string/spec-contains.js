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

        it('should start search at given "fromIndex"', function () {
            expect( contains('lorem ipsum', 'o', 0) ).toEqual( true );
            expect( contains('lorem ipsum', 'o', 1) ).toEqual( true );
            expect( contains('lorem ipsum', 'o', 2) ).toEqual( false );
            expect( contains('lorem ipsum', 'o', 200) ).toEqual( false );
        });

        it('should treat negative fromIndex === 0', function () {
            expect( contains('lorem ipsum', 'o', -1) ).toEqual( true );
            expect( contains('lorem ipsum', 'o', -9) ).toEqual( true );
            expect( contains('lorem ipsum', 'o', -10) ).toEqual( true );
            expect( contains('lorem ipsum', 'o', -11) ).toEqual( true );
        });

    });

});
