define(['mout/object/bindAll'], function(bindAll){

    describe('object/bindAll', function(){

        it('should bind all methods by default', function(){
            var obj = {
                foo : 'bar',
                a : function(){
                    return this.foo;
                },
                bar : 'baz',
                b : function(){
                    return this.bar;
                },
                lorem : 'ipsum',
                c : function(){
                    return this.lorem;
                }
            };

            bindAll(obj);

            expect( obj.a.call(null) ).toBe( 'bar' );
            expect( obj.b.call(this) ).toBe( 'baz' );
            expect( obj.c.call(this) ).toBe( 'ipsum' );
        });


        it('should allow binding just a few methods', function(){
            var obj = {
                foo : 'bar',
                a : function(){
                    return this.foo;
                },
                bar : 'baz',
                b : function(){
                    return this.bar;
                },
                lorem : 'ipsum',
                c : function(){
                    return this.lorem;
                }
            };

            bindAll(obj, 'a', 'c');

            expect( obj.a.call(null) ).toBe( 'bar' );
            expect( obj.b.call(this) ).toBeUndefined();
            expect( obj.c.call(this) ).toBe( 'ipsum' );
        });

    });

});
