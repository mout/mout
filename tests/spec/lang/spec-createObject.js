define(['src/lang/createObject'], function (createObject) {

    describe('lang/createObject()', function(){

        it('should create an object', function(){

            var base = {foo: 'bar'};
            var result = createObject(base);

            expect(result).toEqual(base);

            result.foo = 'asd';
            expect(result.foo).toEqual('asd');
            expect(base.foo).toEqual('bar');

        });

        it('should mixIn new properties', function(){

            var base = {foo: 'bar'};
            var props = {lorem : 'ipsum', num:5, test:null};
            var result = createObject(base, props);

            expect(result).toEqual( {
                foo : 'bar',
                lorem : 'ipsum',
                num : 5,
                test : null
            } );

            result.foo = 'asd';
            result.num = 9000;
            expect(result.foo).toEqual('asd');
            expect(result.num).toEqual(9000);
            expect(result.test).toEqual(null);
            expect(base.foo).toEqual('bar');
            expect(props.num).toEqual(5);

        });

    });
});
