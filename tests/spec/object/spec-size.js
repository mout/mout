define(['src/object/size'], function (size) {

    describe('object/size()', function () {

        it('should get object size', function () {

            var obj = {
                foo : 123,
                bar : true,
                lorem : 'ipsum'
            };

            var s = size(obj);

            expect(s).toBe(3);

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

    });

});
