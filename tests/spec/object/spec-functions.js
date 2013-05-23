define(['mout/object/functions'], function(functions){

    describe('object/functions', function(){

        it('should return a sorted list of all enumerable properties that have function values', function(){
            function Foo(){
                this.a = 123;
                this.b = 'qwe';
                this.amet = function(){};
            }
            Foo.prototype.lorem = function(){};
            Foo.prototype.dolor = function(){};
            expect( functions( new Foo() ) ).toEqual( ['amet', 'dolor', 'lorem'] );
        });


        it('should return an empty array if no functions found', function () {
            expect( functions({a:123, b:'123', c:[1], d:{e:'123'}}) ).toEqual([]);
        });

    });

});
