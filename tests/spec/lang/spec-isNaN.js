define(['mout/lang/isNaN'], function(isNaN){

    describe('lang/isNaN', function(){

        it('should check if value is NaN for realz', function(){
            expect( isNaN(true) ).toBe( true );
            expect( isNaN(false) ).toBe( true );
            expect( isNaN(123) ).toBe( false );
            expect( isNaN('000123') ).toBe( true );
            expect( isNaN('dolor123bar') ).toBe( true );
            expect( isNaN( {} ) ).toBe( true );
            expect( isNaN( [] ) ).toBe( true );
            expect( isNaN( [1,2] ) ).toBe( true );
            expect( isNaN( '' ) ).toBe( true );
            expect( isNaN( null ) ).toBe( true );
            expect( isNaN( undefined ) ).toBe( true );
            expect( isNaN( new Number(123) ) ).toBe( false );
            expect( isNaN( new Number('123') ) ).toBe( false );
            expect( isNaN( NaN ) ).toBe( true );
            expect( isNaN( new Number(NaN) ) ).toBe( true );
        });

    });

});
