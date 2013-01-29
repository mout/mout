define(['mout/string/lpad'], function (lpad) {

    describe('string/lpad()', function(){

        it('should add chars to the left if length is < minLength', function(){
            expect( lpad('ab', 0, '-') ).toEqual( 'ab' );
            expect( lpad('ab', 1, '-') ).toEqual( 'ab' );
            expect( lpad('ab', 2, '-') ).toEqual( 'ab' );
            expect( lpad('ab', 3, '-') ).toEqual( '-ab' );
            expect( lpad('ab', 4, '-') ).toEqual( '--ab' );
        });

        it('should treat null as empty string', function(){
            expect( lpad(null, 1, '-') ).toBe('-');
        });

        it('should treat undefined as empty string', function(){
            expect( lpad(void 0, 1, '-') ).toBe('-');
        });

    });

});
