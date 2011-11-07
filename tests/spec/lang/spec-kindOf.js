define(['src/lang/kindOf'], function (kindOf) {

    describe('lang/kindOf()', function(){

        it('should get the kind of value', function () {

            expect( kindOf('') ).toEqual( 'String' );
            expect( kindOf('foo') ).toEqual( 'String' );
            expect( kindOf(new String('lorem')) ).toEqual( 'String' );
            expect( kindOf(String(123)) ).toEqual( 'String' );

            expect( kindOf(0) ).toEqual( 'Number' );
            expect( kindOf(123) ).toEqual( 'Number' );
            expect( kindOf(new Number(123)) ).toEqual( 'Number' );
            expect( kindOf(Number('123')) ).toEqual( 'Number' );

            expect( kindOf(true) ).toEqual( 'Boolean' );
            expect( kindOf(false) ).toEqual( 'Boolean' );
            expect( kindOf(new Boolean(false)) ).toEqual( 'Boolean' );
            expect( kindOf(new Boolean(true)) ).toEqual( 'Boolean' );
            expect( kindOf(Boolean(0)) ).toEqual( 'Boolean' );
            expect( kindOf(Boolean(1)) ).toEqual( 'Boolean' );

            expect( kindOf([1, 'foo']) ).toEqual( 'Array' );
            expect( kindOf(new Array(3)) ).toEqual( 'Array' );

            expect( kindOf(function () {}) ).toEqual( 'Function' );
            expect( kindOf(new Function('return 1;')) ).toEqual( 'Function' );

            expect( kindOf(/\w+/) ).toEqual( 'RegExp' );
            expect( kindOf(new RegExp('\\w+', 'g')) ).toEqual( 'RegExp' );

            expect( kindOf(new Date()) ).toEqual( 'Date' );


            expect( kindOf(null) ).toEqual( 'Null' );

            expect( kindOf(undefined) ).toEqual( 'Undefined' );
            expect( kindOf() ).toEqual( 'Undefined' );
        });

    });
});
