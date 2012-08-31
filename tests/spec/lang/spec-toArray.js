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

            // avoid string objects it isn't reliable
            // IE 7-8 can't access chars by index
            // considered as edge-case and ignored for now
            expect( toArray( new String('foo') ) ).toEqual( ['foo'] );
            expect( toArray( new String('') ) ).toEqual( [''] );

            expect( toArray(123) ).toEqual( [123] );
            expect( toArray(0) ).toEqual( [0] );

            expect( toArray(/\w+/) ).toEqual( [/\w+/] );
            expect( toArray( new RegExp('\\w+') ) ).toEqual( [/\w+/] );

            expect( toArray(window) ).toEqual( [window] );
            expect( toArray({foo:"bar", lorem:123}) ).toEqual( [{foo:"bar", lorem:123}] );

            expect( toArray(true) ).toEqual( [true] );
            expect( toArray(false) ).toEqual( [false] );

            var fn = function(){};
            expect( toArray(fn) ).toEqual( [fn] );
        });

        it('should return an empty array if nill value', function () {
            expect( toArray(null) ).toEqual( [] );
            expect( toArray(undefined) ).toEqual( [] );
            expect( toArray() ).toEqual( [] );
        });

        it('should convert HTMLCollection to real array - #58', function () {
            var els = document.getElementsByTagName('*');
            var arr = toArray( els );
            expect( Object.prototype.toString.call(arr) ).toBe( '[object Array]' );
            expect( arr.length ).toBe( els.length );

        });

    });
});
