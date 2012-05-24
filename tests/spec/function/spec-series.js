define(['src/function/series'], function (series) {

    describe('function/series()', function () {

        it('should execute a list of functions in series', function () {

            var arr = [4, 2, 1, 5];

            var a = [];
            var b = [];
            var c = [];

            function forEach(arr, fn) {
                var n = arr.length;
                var i = 0;
                while (i < n) {
                    fn(arr[i]);
                    i += 1;
                }
            }

            function fn1(val){
                a.push(val);
                expect( b ).not.toContain( val );
                expect( c ).not.toContain( val );
            }

            function fn2(val){
                b.push(val);
                expect( a ).toContain( val );
                expect( c ).not.toContain( val );
            }

            function fn3(val){
                c.push(val);
                expect( a ).toContain( val );
                expect( b ).toContain( val );
            }

            forEach(arr, series(fn1, fn2, fn3));

            expect( a ).toEqual( arr );
            expect( b ).toEqual( arr );
            expect( c ).toEqual( arr );

        });

    });


});
