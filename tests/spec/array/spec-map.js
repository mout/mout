define(['src/array/map'], function (map) {

    describe('array/map()', function(){

        it('should return a new array with modified items', function () {
            var base = [1,2,3,4,5];
            var r = map(base, function(val, i){
                return val + i;
            });

            expect( r ).toEqual( [1, 3, 5, 7, 9] );
        });

        it('should handle sparse arrays', function () {
            function toOne(val, i){ return 1; }

            var base = new Array(3);
            var r = map(base, toOne);
            // it looks weird but that is the correct behavior!!
            expect( r ).toEqual( [undefined, undefined, undefined] );

            base[5] = 'foo';

            r = map(base, toOne);
            expect( r ).toEqual( [undefined, undefined, undefined, undefined, undefined, 1] );
        });

    });

});
