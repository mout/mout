define(['mout/array/map'], function (map) {

    describe('array/map()', function(){

        it('should return a new array with modified items', function () {
            var base = [1,2,3,4,5];
            var r = map(base, function(val, i){
                return val + i;
            });

            expect( r ).not.toBe( base );
            expect( r ).toEqual( [1, 3, 5, 7, 9] );
        });

        it('should loop even if array is sparse. see #64', function () {
            function toOne(val, i){ return 1; }

            var base = new Array(3);
            var r = map(base, toOne);

            // IMPORTANT
            // ---------
            // this behavior is different than native Array#map
            expect( r ).toEqual( [1, 1, 1] );

            base[5] = 'foo';

            r = map(base, toOne);
            expect( r ).toEqual( [1,1,1,1,1,1] );
        });

        it('should return empty array if target is null/undefined', function () {
            var testFunc = function() { return {}; };

            expect( map(null, testFunc) ).toEqual( [] );
            expect( map(undefined, testFunc) ).toEqual( [] );
        });


        it('should allow shorthand string syntax (same as "pluck")', function () {
            var arr = [{a:1}, {b:1}, {a:3,c:3}];
            expect( map(arr, 'a') ).toEqual( [1, undefined, 3] );
        });


        it('should return same values if no callback (identity)', function () {
            var arr = [1,2,3];
            expect( map(arr) ).toEqual( [1,2,3] );
            expect( map(arr) ).not.toBe( arr );
        });


    });

});
