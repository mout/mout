define(['mout/date/isSame'], function(isSame){

    describe('date/isSame', function(){

        it('should check if dates are equal', function(){
            expect( isSame(new Date(2013,3,5), new Date(2013,3,5)) ).toBe(true);
            expect( isSame(new Date(2013,3,5), new Date(2013,3,5,1)) ).toBe(false);
        });

        it('should allow specifying the comparisson', function () {
            var d1 = new Date(2013,3,5);
            var d2 = new Date(2013,3,6);
            expect( isSame(d1, d2, 'year') ).toEqual( true );
            expect( isSame(d1, d2, 'month') ).toEqual( true );
            expect( isSame(d1, d2, 'day') ).toEqual( false );
        });

    });

});
