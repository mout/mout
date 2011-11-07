define(['src/lang/inheritPrototype'], function (inheritPrototype) {

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
            expect(a.test).toEqual(undefined);

            expect(b.getName()).toEqual('asd');
            expect(b.test).toEqual(true);

        });

    });
});
