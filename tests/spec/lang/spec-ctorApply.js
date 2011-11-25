define(['src/lang/ctorApply'], function (ctorApply) {

    describe('lang/ctorApply()', function () {

        it('should call constructor only once passing arguments and keep prototype chain', function () {

            var _count = 0;

            var Foo = function(a, b, c){
                this.a = a;
                this.b = b;
                this.c = c;
                _count++;
            };

            //make sure prototype chain is maintained
            Foo.prototype.get = function(key){
                return this[key];
            };

            var obj = ctorApply(Foo, ['lorem', 'ipsum', 123]);

            expect( _count ).toEqual( 1 );
            expect( obj.get('a') ).toEqual( 'lorem' );
            expect( obj.get('b') ).toEqual( 'ipsum' );
            expect( obj.get('c') ).toEqual( 123 );

        });

    });

});
