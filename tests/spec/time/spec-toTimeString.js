define(['src/time/toTimeString'], function (toTimeString) {

    describe('time/toTimeString()', function(){

        it('should convert to proper units', function(){
            expect( toTimeString(999) ).toBe('00:00');
            expect( toTimeString(1000) ).toBe('00:01');
            expect( toTimeString(11000) ).toBe('00:11');
            expect( toTimeString(71000) ).toBe('01:11');
            expect( toTimeString(3671000) ).toBe('1:01:11');
        });

        it('should work for large numbers', function(){
            expect( toTimeString(86400000) ).toBe('24:00:00');
            expect( toTimeString(86400000 * 7) ).toBe('168:00:00');
        });

    });

});
