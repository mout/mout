define(['mout/lang/inheritPrototype'], function (inheritPrototype) {

    describe('lang/inheritPrototype()', function(){

        it('should inherit prototype', function(){

            function Foo(name){
                this.name = name;
            }
            Foo.prototype = {
                getName : function(){
                    return this.name;
                }
            };

            function Bar(name){
                this.name = name;
            }
            inheritPrototype(Bar, Foo);
            Bar.prototype.test = true;


            var a = new Foo('ipsum');
            var b = new Bar('asd');

            expect(a.getName()).toEqual('ipsum');
            expect(a.test).toBeUndefined();
            expect(a.super_).toBeUndefined();
            expect(Foo.super_).toBeUndefined();
            expect(a instanceof Foo).toBe(true);
            expect(a instanceof Bar).toBe(false);

            expect(b.getName()).toEqual('asd');
            expect(b.test).toEqual(true);
            expect(b.super_).toBeUndefined();
            expect(Bar.super_).toBe(Foo);
            expect(b instanceof Foo).toBe(true);
            expect(b instanceof Bar).toBe(true);

        });

    });
});
