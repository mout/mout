define(['src/function/compose'], function (compose) {

    describe('function/compose()', function () {

        it('should pass returned value to each fn in the chain starting from left-most fn', function () {

            var arr = [1, 2, 3];

            function map(arr, fn) {
                var n = arr.length;
                var i = 0;
                while (i < n) {
                    arr[i] = fn(arr[i]);
                    i += 1;
                }
                return arr;
            }

            function add2(val) {
                return val + 2;
            }

            function multi2(val){
                return val * 2;
            }

            expect( map([1, 2, 3], compose(add2, multi2)) ).toEqual( [4, 6, 8] );

        });

    });


});

