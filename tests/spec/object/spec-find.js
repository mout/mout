define(['src/object/find'], function(find){

    describe('object/find', function(){

        it('should return first match', function () {

            var inner = {
                first: 1,
                second: 2
            };

            var obj = {
                a: 123,
                b: 'foo',
                c: 'bar',
                d: inner
            };

            expect( find(obj, function(val){ return val === 123; }) ).toEqual( 123 );
            expect( find(obj, function(val){ return typeof val === 'string'; }) ).toEqual( 'foo' );
            expect( find(obj, function(val){ return val.first === 1; }) ).toEqual( inner );

        });

    });

});
