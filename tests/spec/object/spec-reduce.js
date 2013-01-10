define(['mout/object/reduce'], function(reduce){

    describe('object/reduce', function(){

        it('should reduce object into a single value', function () {

            var obj = {a: 1, b: 2, c: 3, d: 4};
            var compare1 = [];
            var compare2 = [];

            function sum(prev, cur, key, list) {
                compare1.push(prev);
                return prev + cur;
            }

            function mult(prev, cur, key, list) {
                compare2.push(prev);
                return prev * cur;
            }

            expect( reduce(obj, sum) ).toBe( 10 );
            expect( reduce(obj, mult) ).toBe( 24 );

            expect( compare1 ).toEqual( [1, 3, 6] );
            expect( compare2 ).toEqual( [1, 2, 6] );

        });

        it('should allow init value', function () {

            var obj = {a: 1, b: 2, c: 3, d: 4};

            function sum(prev, cur, key, list) {
                return prev + cur;
            }

            function mult(prev, cur, key, list) {
                return prev * cur;
            }

            expect( reduce(obj, sum, 10) ).toBe( 20 );
            expect( reduce(obj, mult, 10) ).toBe( 240 );

        });

        it('should throw error if empty', function () {
            function sum(prev, cur, key, list) {
                return prev + cur;
            }
            expect( function(){ reduce({}, sum); } ).toThrow();
        });

        it('should work on empty objects if providing initial value', function () {
            function sum(prev, cur, key, list) {
                return prev + cur;
            }
            expect( reduce({}, sum, 10) ).toBe(10);
        });


        it('should allow "undefined" as initial value', function () {
            // thx @jdalton for catching this one see #gh-57
            var obj = {a: 1, b: 2, c: 3};
            var compare = [];

            var r = reduce(obj, function(prev, cur, key, list){
                compare.push(prev);
                return prev == null ? cur : prev * cur;
            }, undefined);

            expect( r ).toBe( 6 );
            expect( compare ).toEqual( [undefined, 1, 2] );

        });


    });

});
