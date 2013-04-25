define(['mout/time/convert'], function(convert){

    describe('time/convert', function(){

        it('should convert value to millisecond by default', function(){
            expect( convert(1, 'millisecond') ).toBe(1);
            expect( convert(300, 'millisecond') ).toBe(300);
            expect( convert(1, 'second') ).toBe(1000);
            expect( convert(3, 'second') ).toBe(3000);
            expect( convert(2, 'minute') ).toBe(120000);
            expect( convert(1, 'hour') ).toBe(3600000);
            expect( convert(5, 'day') ).toBe(86400000 * 5);
            expect( convert(1, 'week') ).toBe(604800000);
        });


        it('should allow custom destination unit', function () {
            expect( convert(1, 'second', 'minute') ).toBe(1 / 60);
            expect( convert(2, 'second', 'minute') ).toBe(2 / 60);
            expect( convert(2, 'minute', 'second') ).toBe(120);
        });


        it('should support aliases', function () {
            expect( convert(0.5, 's', 'ms') ).toBe(500);
            expect( convert(10, 'h', 'm') ).toBe(600);
            expect( convert(2, 'w', 'd') ).toBe(14);
        });


    });

});
