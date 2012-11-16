define(['src/object/find'], function(find){

    describe('object/find', function(){

        it('should return a property that returns true on the truthy test, loop order isn\'t ensured', function () {

            var inner = {
                first: 1,
                second: 2
            };

            var obj = {
                a: 123,
                b: 'foo',
                c: inner
            };

            expect( find(obj, function(val){ return val === 123; }) ).toEqual( 123 );
            expect( find(obj, function(val){ return typeof val === 'string'; }) ).toEqual( 'foo' );
            expect( find(obj, function(val){ return val.first === 1; }) ).toEqual( inner );

        });

        it('should avoid don\'t enum bug on IE 7-8', function () {
            var obj = {
                a : 123,
                toString : 'foo123',
                z : 'bar'
            };
            expect( find(obj, function(val){
                return val === 'foo123';
            }) ).toEqual( 'foo123' );
        });

    });

});
