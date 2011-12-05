define(['src/object/keys'], function (keys) {

    describe('object/keys()', function () {

        it('should get object keys', function () {

            var obj = {
                foo : 123,
                bar : true,
                lorem : 'ipsum'
            };

            var k = keys(obj);

            expect(k.length).toBe(3);

            var haystack = ['foo', 'bar', 'lorem'];
            expect( k[0] !== k[1] && k[0] !== k[2] ).toBe(true);
            expect( haystack ).toContain( k[0] );
            expect( haystack ).toContain( k[1] );
            expect( haystack ).toContain( k[2] );

        });

        it('should avoid dont enum bugs', function () {

            var obj = {
                'toString' : 123,
                'valueOf' : true,
                'hasOwnProperty' : 'ipsum'
            };

            var k = keys(obj);

            expect(k.length).toBe(3);

            var haystack = ['toString', 'valueOf', 'hasOwnProperty'];
            expect( k[0] !== k[1] && k[0] !== k[2] ).toBe(true);
            expect( haystack ).toContain( k[0] );
            expect( haystack ).toContain( k[1] );
            expect( haystack ).toContain( k[2] );

        });

        it('should filter prototype properties', function () {

            var Foo = function(){
                this.lorem = 'ipsum';
            };
            Foo.prototype = {foo : 'bar'};

            var obj = new Foo();

            expect( obj.lorem ).toEqual( 'ipsum' );
            expect( obj.foo ).toEqual( 'bar' );
            expect( keys(obj) ).toEqual( ['lorem'] );

        });

    });

});
