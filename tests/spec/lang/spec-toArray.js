define(['src/lang/toArray'], function (toArray) {

    describe('lang/toArray()', function () {

        it('should convert array like objects into array', function () {

            var arr = ["foo", "bar", "dolor"];
            var obj = {
                "0" : "foo",
                "1" : "bar",
                "2" : "dolor",
                "length" : 3
            };

            expect( toArray(obj) ).toEqual( arr );
        });

        it('should convert arguments obj', function () {
            var result;
            var fn = function(a, b, c){
                result = toArray(arguments);
            };

            fn("foo", "bar", 123);

            expect( result ).toEqual( ["foo", "bar", 123] );
        });

        it('should handle strings, numbers, regexp and window', function () {
            expect( toArray('lorem') ).toEqual( ['lorem'] );
            expect( toArray(123) ).toEqual( [123] );
            expect( toArray(/\w+/) ).toEqual( [/\w+/] );
            expect( toArray(window) ).toEqual( [window] );
            expect( toArray({foo:"bar", lorem:123}) ).toEqual( ["bar", 123] );
        });

    });
});
