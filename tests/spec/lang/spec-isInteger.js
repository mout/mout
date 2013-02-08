define(['mout/lang/isInteger'], function(isInteger){

    describe('lang/isInteger', function(){


        it('should return false if value isn\'t an integer', function(){
            expect( isInteger(false) ).toBe( false );
            expect( isInteger(true) ).toBe( false );
            expect( isInteger('foo') ).toBe( false );
            expect( isInteger('123') ).toBe( false );
            expect( isInteger('123.45') ).toBe( false );
            expect( isInteger(123.45) ).toBe( false );
            expect( isInteger(-0.45) ).toBe( false );
            expect( isInteger(new Number(-0.45)) ).toBe( false );
            expect( isInteger(new Date()) ).toBe( false );
            expect( isInteger(/foo/) ).toBe( false );
            expect( isInteger({}) ).toBe( false );
            expect( isInteger({valueOf:function(){return 123;}}) ).toBe( false );
            expect( isInteger(Infinity) ).toBe( false );
            expect( isInteger(-Infinity) ).toBe( false );
        });


        it('should return true if value is an integer', function () {
            expect( isInteger(0) ).toBe( true );
            expect( isInteger(1) ).toBe( true );
            expect( isInteger(123) ).toBe( true );
            expect( isInteger(-123) ).toBe( true );
            expect( isInteger(new Number(-123)) ).toBe( true );
        });


        it('should work even with large numbers', function () {
            expect( isInteger(Math.pow(2,45) + 0.05) ).toEqual( false );
            expect( isInteger(Math.pow(2,45) - 0.05) ).toEqual( false );
            expect( isInteger(Math.pow(2,45)) ).toEqual( true );
            expect( isInteger(-Math.pow(2,45)) ).toEqual( true );
        });


    });

});
