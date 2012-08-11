define(['src/array/forEach'], function (forEach) {

    describe('array/forEach()', function(){

        it('should loop and pass params to callback', function(){
            var result = 0;
            var items = [1,2,3,4,5];

            forEach(items, function(val, i, arr){
                expect( arr ).toBe( items );
                expect( val ).toBe( items[i] );
                result += val;
            });

            expect( result ).toBe( 15 );
        });

        describe('sparse arrays', function () {

            it('should support sparse arrays', function () {
                var arr1 = new Array(6);
                arr1[2] = 3;
                arr1[5] = 8;
                arr1[10] = undefined; // it's a trap!

                var result = [];

                forEach(arr1, function(val, i, arr){
                    expect( arr ).toBe( arr1 );
                    expect( val ).toBe( arr1[i] );
                    expect( i ).not.toBe( 4 ); // make sure it skips sparse items
                    result.push(val);
                });

                expect( result[0] ).toEqual( 3 );
                expect( result[1] ).toEqual( 8 );
                expect( result[2] ).toEqual( undefined );
            });

            it('should support arrays with `undefined` items - this will fail on IE 6-8!!!', function () {
                // IMPORTANT!
                // ----------
                // this is considered sparse on IE 6-8, there is no way to ensure
                // proper behavior for this case everywhere!!!
                // IE will consider the  `undefined` as "empty" so NEVER do that
                // on your code!
                // See: #gh-57

                var arr2 = [2, void(0), 4];
                var r2 = [];

                forEach(arr2, function(val, i, arr){
                    expect( arr ).toBe( arr2 );
                    expect( val ).toBe( arr2[i] );
                    r2.push(val);
                });

                expect( r2[0] ).toEqual( 2 );
                expect( r2[1] ).toEqual( void(0) );
                expect( r2[2] ).toEqual( 4 );
            });

            it('should support arrays with missing items', function () {
                var arr3 = [5, ,7];
                var r3 = [];

                forEach(arr3, function(val, i, arr){
                    expect( arr ).toBe( arr3 );
                    expect( val ).toBe( arr3[i] );
                    r3.push(val);
                });

                expect( r3[0] ).toEqual( 5 );
                expect( r3[1] ).toEqual( 7 );
                expect( r3.length ).toEqual( 2 );
            });

        });

    });

});

