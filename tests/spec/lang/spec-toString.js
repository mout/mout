define(['mout/lang/toString'], function(toString){

    describe('lang/toString', function(){

        it('should convert null to empty string', function(){
            expect( toString(null) ).toBe('');
        });

        it('should convert undefined to empty string', function(){
            expect( toString(void 0) ).toBe('');
        });

        it('should return string unchanged', function(){
            expect( toString('') ).toBe('');
            expect( toString('test') ).toBe('test');
        });

        it('should return number as string', function(){
            expect( toString(0) ).toBe('0');
            expect( toString(10) ).toBe('10');
        });

        it('should return boolean as string', function(){
            expect( toString(false) ).toBe('false');
            expect( toString(true) ).toBe('true');
        });

    });

});
