define(['src/object/values'], function (values) {

    describe('object/values()', function () {

        it('should get object values', function () {

            var obj = {
                foo : 123,
                bar : true,
                lorem : 'ipsum'
            };

            var v = values(obj);

            expect(v.length).toBe(3);

            var haystack = [123, true, 'ipsum'];
            expect( v[0] !== v[1] && v[0] !== v[2] ).toBe(true);
            expect( haystack ).toContain( v[0] );
            expect( haystack ).toContain( v[1] );
            expect( haystack ).toContain( v[2] );

        });

        it('should avoid dont enum bugs', function () {

            var obj = {
                'toString' : 123,
                'valueOf' : true,
                'hasOwnProperty' : 'ipsum'
            };

            var v = values(obj);

            expect(v.length).toBe(3);

            var haystack = [123, true, 'ipsum'];
            expect( v[0] !== v[1] && v[0] !== v[2] ).toBe(true);
            expect( haystack ).toContain( v[0] );
            expect( haystack ).toContain( v[1] );
            expect( haystack ).toContain( v[2] );

        });

        it('should filter prototype properties', function () {

            var Foo = function(){
                this.lorem = 'ipsum';
            };
            Foo.prototype = {foo : 'bar'};

            var obj = new Foo();

            expect( obj.lorem ).toEqual( 'ipsum' );
            expect( obj.foo ).toEqual( 'bar' );
            expect( values(obj) ).toEqual( ['ipsum'] );

        });

    });

});
