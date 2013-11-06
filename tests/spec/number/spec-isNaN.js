define(['mout/number/isNaN'], function(isNaN){

    describe('number/isNaN', function(){

        it('should return true only for the NaN value', function(){
            expect( isNaN(NaN) ).toBe( true );
            expect( isNaN(0 / 0) ).toBe( true );
        });

        it('should return false to everything else', function () {
            expect( isNaN(true) ).toBe( false );
            expect( isNaN(false) ).toBe( false );
            expect( isNaN('000123') ).toBe( false );
            expect( isNaN('dolor123bar') ).toBe( false );
            expect( isNaN( {} ) ).toBe( false );
            expect( isNaN( [] ) ).toBe( false );
            expect( isNaN( [1,2] ) ).toBe( false );
            expect( isNaN( '' ) ).toBe( false );
            expect( isNaN( null ) ).toBe( false );
            expect( isNaN( undefined ) ).toBe( false );
            expect( isNaN(123) ).toBe( false );
            expect( isNaN( new Number(123) ) ).toBe( false );
            expect( isNaN( new Number('123') ) ).toBe( false );
            // yes. this is weird but follows spec
            expect( isNaN( new Number(NaN) ) ).toBe( false );
        });

    });

});
