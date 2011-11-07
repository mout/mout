define(['src/array/map'], function (map) {

    describe('array/map()', function(){

        it('should return a new array with modified items', function () {
            var base = [1,2,3,4,5];
            var r = map(base, function(val, i){
                return val + i;
            });

            expect( r[0] ).toBe( 1 );
            expect( r[1] ).toBe( 3 );
            expect( r[2] ).toBe( 5 );
            expect( r[3] ).toBe( 7 );
            expect( r[4] ).toBe( 9 );
        });

    });

});
