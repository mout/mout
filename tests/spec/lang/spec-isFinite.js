define(['mout/lang/isFinite'], function(isFinite){

    describe('lang/isFinite', function(){

        it('should return false for all values that aren\'t finite', function(){
            expect( isFinite(null) ).toBe( false );
            expect( isFinite() ).toBe( false );
            expect( isFinite(void(0)) ).toBe( false );
            expect( isFinite(true) ).toBe( false );
            expect( isFinite(false) ).toBe( false );
            expect( isFinite(new String('')) ).toBe( false );
            expect( isFinite(new String('asd')) ).toBe( false );
            expect( isFinite('') ).toBe( false );
            expect( isFinite('asd') ).toBe( false );
            expect( isFinite([]) ).toBe( false );
            expect( isFinite([1,2,3]) ).toBe( false );
            expect( isFinite({}) ).toBe( false );
            expect( isFinite({a:1,b:'bar'}) ).toBe( false );
            expect( isFinite(NaN) ).toBe( false );
            expect( isFinite(-Infinity) ).toBe( false );
            expect( isFinite(+Infinity) ).toBe( false );
            expect( isFinite('Infinity') ).toBe( false );
        });

        it('should return true to all finite values', function(){
            expect( isFinite('-123') ).toBe( true );
            expect( isFinite('123') ).toBe( true );
            expect( isFinite(new Number(123)) ).toBe( true );
            expect( isFinite(123) ).toBe( true );
            expect( isFinite(123.45) ).toBe( true );
            expect( isFinite(-123) ).toBe( true );
            expect( isFinite(-123.45) ).toBe( true );
            expect( isFinite(0) ).toBe( true );
        });

    });

});
