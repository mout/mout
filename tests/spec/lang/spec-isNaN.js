define(['src/lang/isNaN'], function(isNaN){

    describe('lang/isNaN', function(){

        it('should check if value is NaN for realz', function(){
            expect( isNaN(true) ).toBe( false );
            expect( isNaN(false) ).toBe( false );
            expect( isNaN(123) ).toBe( false );
            expect( isNaN('000123') ).toBe( false );
            expect( isNaN('dolor123bar') ).toBe( false );
            expect( isNaN( {} ) ).toBe( false );
            expect( isNaN( [] ) ).toBe( false );
            expect( isNaN( [1,2] ) ).toBe( false );
            expect( isNaN( '' ) ).toBe( false );
            expect( isNaN( null ) ).toBe( false );
            expect( isNaN( undefined ) ).toBe( false );
            expect( isNaN( new Number(123) ) ).toBe( false );
            expect( isNaN( new Number('123') ) ).toBe( false );
            expect( isNaN( NaN ) ).toBe( true );
            expect( isNaN( new Number(NaN) ) ).toBe( true );
        });

    });

});
