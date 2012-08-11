define(['src/array/reduce'], function (reduce) {

    describe('array/reduce()', function () {

        it('should reduce array into a single value', function () {

            var arr = [1, 2, 3, 4];
            var compare1 = [];
            var compare2 = [];

            function sum(prev, cur, idx, arr) {
                compare1.push(prev);
                return prev + cur;
            }

            function mult(prev, cur, idx, arr) {
                compare2.push(prev);
                return prev * cur;
            }

            expect( reduce(arr, sum) ).toBe( 10 );
            expect( reduce(arr, mult) ).toBe( 24 );

            expect( compare1 ).toEqual( [1, 3, 6] );
            expect( compare2 ).toEqual( [1, 2, 6] );

        });

        it('should allow init value', function () {

            var arr = [1, 2, 3, 4];

            function sum(prev, cur, idx, arr) {
                return prev + cur;
            }

            function mult(prev, cur, idx, arr) {
                return prev * cur;
            }

            expect( reduce(arr, sum, 10) ).toBe( 20 );
            expect( reduce(arr, mult, 10) ).toBe( 240 );

        });

        it('should pass proper params to callback', function () {

            var base = [1, 2, 3, 4];

            function foo(prev, cur, idx, arr) {
                expect( arr[idx - 1] ).toBe( prev );
                expect( arr ).toBe( base );
                return cur;
            }

            expect( reduce(base, foo) ).toBe( 4 );

        });

        it('should throw error if empty', function () {
            function sum(prev, cur, idx, arr) {
                return prev + cur;
            }
            expect( function(){ reduce([], sum); } ).toThrow();
        });

        it('should work on empty arrays if provide initVal', function () {
            function sum(prev, cur, idx, arr) {
                return prev + cur;
            }
            expect( reduce([], sum, 10) ).toBe(10);
        });


        it('should work over sparse arrays', function () {
            function specialSum(prev, cur, i, arr){
                var a = prev == null? 1 : prev;
                var b = cur == null? 1: cur;
                return a + b;
            }

            var base = [1, 5];
            base[7] = 4;
            base[10] = undefined;

            expect( reduce(base, specialSum) ).toEqual( 11 );
            expect( reduce(base, specialSum, 2) ).toEqual( 13 );
        });


        it('should allow "undefined" as initial value', function () {
            // thx @jdalton for catching this one see #gh-57
            var base = [1, 2, 3];
            var compare = [];

            var r = reduce(base, function(prev, cur, i, arr){
                compare.push(prev);
                return prev == null? cur : prev * cur;
            }, undefined);

            expect( r ).toBe( 6 );
            expect( compare ).toEqual( [undefined, 1, 2] );

        });


    });

});
