define(['mout/lang/inheritPrototype'], function (inheritPrototype) {

    describe('lang/inheritPrototype()', function(){

        var Foo, Bar;

        beforeEach(function(){
            Foo = function FooCtor(name){
                this.name = name;
            };
            Foo.prototype = {
                getName : function(){
                    return this.name;
                }
            };
            Bar = function BarCtor(name){
                this.name = name;
            };
        });

        it('should inherit prototype', function(){
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

        it('should return the prototype object', function(){
            var proto = inheritPrototype(Bar, Foo);
            expect(proto).toBe(Bar.prototype);
        });

    });
});
