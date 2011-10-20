define(['src/lang'], function(lang){

    describe('lang', function(){


        describe('mixIn()', function(){

            var a1, a2, a3, a4,
                a1_4,
                b1, b2,
                b1_2;

            beforeEach(function(){
                a1 = {a:0, b:1, c:2};
                a2 = {d:3, e:4};
                a3 = {f:5};
                a4 = {g:6};
                a1_4 = {a:0, b:1, c:2, d:3, e:4, f:5, g:6};

                b1 = {a:1, b:2, c:3};
                b2 = {b:4, d:8};
                b1_2 = {a:1, b:4, c:3, d:8};
            });

            it('should combine objects properties and modify original object', function(){
                lang.mixIn(a1, a2, a3, a4);
                expect(a1).toEqual(a1_4);

                var r = lang.mixIn(b1, b2);
                expect(r).toEqual(b1_2);
                expect(r).toBe(b1);
            });

            it('should work with empty objects', function(){
                expect( lang.mixIn({}, b1, b2, {}) ).toEqual(b1_2);
            });

        });


        describe('createObject()', function(){

            it('should create an object', function(){

                var base = {foo: 'bar'};
                var result = lang.createObject(base);

                expect(result).toEqual(base);

                result.foo = 'asd';
                expect(result.foo).toEqual('asd');
                expect(base.foo).toEqual('bar');

            });

            it('should mixIn new properties', function(){

                var base = {foo: 'bar'};
                var props = {lorem : 'ipsum', num:5, test:null};
                var result = lang.createObject(base, props);

                expect(result).toEqual( lang.mixIn({}, base, props) );

                result.foo = 'asd';
                result.num = 9000;
                expect(result.foo).toEqual('asd');
                expect(result.num).toEqual(9000);
                expect(result.test).toEqual(null);
                expect(base.foo).toEqual('bar');
                expect(props.num).toEqual(5);

            });

        });

        describe('inheritPrototype()', function(){

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
                lang.inheritPrototype(Bar, Foo);
                Bar.prototype.test = true;


                var a = new Foo('ipsum');
                var b = new Bar('asd');

                expect(a.getName()).toEqual('ipsum');
                expect(a.test).toEqual(undefined);

                expect(b.getName()).toEqual('asd');
                expect(b.test).toEqual(true);

            });

        });

        describe('bind()', function(){

            var o1 = {val : 'bar'};
            var o2 = {val : 123};

            function getVal(){
                return this.val;
            }

            function doIt(a, b, c){
                var str = '';
                str += a? a : '';
                str += b? b : '';
                str += c? c : '';
                return this.val + str;
            }


            it('should change execution context', function(){
                var a = lang.bind(getVal, o1);
                var b = lang.bind(getVal, o2);
                expect( a() ).toEqual('bar');
                expect( b() ).toEqual(123);
            });

            it('should curry args', function(){
                var a = lang.bind(doIt, o1, ' a', 'b', 'c');
                var b = lang.bind(doIt, o2, '456');
                expect( a() ).toEqual('bar abc');
                expect( b() ).toEqual('123456');
            });

        });

    });
});
