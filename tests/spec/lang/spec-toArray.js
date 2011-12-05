define(['src/lang/toArray'], function (toArray) {

    describe('lang/toArray()', function () {


        it('should convert array like objects into array', function () {

            var obj = {
                "0" : "foo",
                "1" : "bar",
                "2" : "dolor",
                "length" : 3
            };

            expect( toArray(obj) ).toEqual( ["foo", "bar", "dolor"] );
        });


        it('should convert arguments obj', function () {
            var result;
            var fn = function(a, b, c){
                result = toArray(arguments);
            };

            fn("foo", "bar", 123);

            expect( result ).toEqual( ["foo", "bar", 123] );
        });


        it('should handle primitives and other objects', function () {

            expect( toArray('lorem') ).toEqual( ['lorem'] );
            expect( toArray('') ).toEqual( [''] );

            expect( toArray(123) ).toEqual( [123] );
            expect( toArray(0) ).toEqual( [0] );

            expect( toArray(/\w+/) ).toEqual( [/\w+/] );

            expect( toArray(window) ).toEqual( [window] );
            expect( toArray({foo:"bar", lorem:123}) ).toEqual( [{foo:"bar", lorem:123}] );

            expect( toArray(true) ).toEqual( [true] );
            expect( toArray(false) ).toEqual( [false] );

        });

        it('should return an empty array if nill value', function () {
            expect( toArray(null) ).toEqual( [] );
            expect( toArray(undefined) ).toEqual( [] );
            expect( toArray() ).toEqual( [] );
        });

    });
});
