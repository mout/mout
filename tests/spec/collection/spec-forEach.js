define(['mout/collection/forEach'], function(forEach){

    describe('collection/forEach', function(){

        it('should loop arrays', function(){
            var result = [];
            forEach([1,2,3,4], function(val, i){
                result[i] = val;
            });
            expect( result ).toEqual( [1,2,3,4] );
        });

        it('should loop over object own properties', function(){
            var result = {};
            var Foo = function(){
                this.a = 'lorem';
                this.b = 123;
                this.c = 'bar';
            };
            Foo.prototype.d = 'ipsum';

            var src = new Foo();
            forEach(src, function(val, i){
                result[i] = val;
            });
            expect( result ).toEqual( {a:'lorem', b:123, c:'bar'} );
        });

    });

});
