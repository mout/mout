define(['mout/collection/size'], function(size){

    describe('collection/size', function(){

        it('should return array length', function(){
            expect( size([1,2,3]) ).toBe(3);
        });

        it('should return object keys length', function(){
            expect( size({a: 1, b: 2, c: 3}) ).toBe(3);
        });

        it('should avoid dont enum bugs', function () {

            var obj = {
                'toString' : 123,
                'valueOf' : true,
                'hasOwnProperty' : 'ipsum'
            };

            var s = size(obj);

            expect(s).toBe(3);

        });

        it('should not count prototype properties', function () {

            var Foo = function(){
                this.lorem = 'ipsum';
            };
            Foo.prototype = {foo : 'bar'};

            var obj = new Foo();

            expect( obj.lorem ).toEqual( 'ipsum' );
            expect( obj.foo ).toEqual( 'bar' );
            expect( size(obj) ).toEqual(1);

        });

        it('should return zero if no collection', function () {
            expect( size(null) ).toEqual( 0 );
            expect( size(undefined) ).toEqual( 0 );
        });

    });

});
