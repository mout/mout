define(['mout/string/rpad'], function (rpad) {

    describe('string/rpad()', function(){

        it('should add chars to the right if length is < minLength', function(){
            expect( rpad('ab', 0, '-') ).toEqual( 'ab' );
            expect( rpad('ab', 1, '-') ).toEqual( 'ab' );
            expect( rpad('ab', 2, '-') ).toEqual( 'ab' );
            expect( rpad('ab', 3, '-') ).toEqual( 'ab-' );
            expect( rpad('ab', 4, '-') ).toEqual( 'ab--' );
        });

        it('should treat null as empty string', function(){
            expect( rpad(null, 1, '-') ).toBe('-');
        });

        it('should treat undefined as empty string', function(){
            expect( rpad(void 0, 1, '-') ).toBe('-');
        });

    });

});
