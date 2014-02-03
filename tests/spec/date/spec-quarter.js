define(['mout/date/quarter'], function(quarter){

    describe('date/quarter', function(){

        it('should return quarter number', function(){
            expect( quarter(new Date(2013, 2, 2)) ).toBe(1);
            expect( quarter(new Date(2013, 5, 2)) ).toBe(2);
            expect( quarter(new Date(2013, 8, 2)) ).toBe(3);
            expect( quarter(new Date(2013, 11, 2)) ).toBe(4);
        });

    });

});
