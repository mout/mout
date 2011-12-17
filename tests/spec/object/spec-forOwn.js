define(['src/object/forOwn'], function (forOwn) {

    describe('object/forOwn()', function () {

        it('should loop through all properties', function () {

            var obj = {
                foo : 123,
                bar : true,
                lorem : 'ipsum'
            };

            var keys = [],
                vals = [];

            forOwn(obj, function(val, key, o){
                expect(o).toBe(obj);
                keys.push(key);
                vals.push(val);
            });

            expect(keys.length).toBe(3);

            var haystack = ['foo', 'bar', 'lorem'];
            expect( keys[0] !== keys[1] && keys[0] !== keys[2] ).toBe(true);
            expect( haystack ).toContain( keys[0] );
            expect( haystack ).toContain( keys[1] );
            expect( haystack ).toContain( keys[2] );

            haystack = [123, true, 'ipsum'];
            expect( vals[0] !== vals[1] && vals[0] !== vals[2] ).toBe(true);
            expect( haystack ).toContain( vals[0] );
            expect( haystack ).toContain( vals[1] );
            expect( haystack ).toContain( vals[2] );

        });


        it('should fix dont enum bug', function () {

            var obj = {
                'toString' : 123,
                'valueOf' : true,
                'hasOwnProperty' : 'ipsum'
            };

            var keys = [],
                vals = [];

            forOwn(obj, function(val, key, o){
                expect(o).toBe(obj);
                keys.push(key);
                vals.push(val);
            });

            expect(keys.length).toBe(3);

            var haystack = ['toString', 'valueOf', 'hasOwnProperty'];
            expect( keys[0] !== keys[1] && keys[0] !== keys[2] ).toBe(true);
            expect( haystack ).toContain( keys[0] );
            expect( haystack ).toContain( keys[1] );
            expect( haystack ).toContain( keys[2] );

            haystack = [123, true, 'ipsum'];
            expect( vals[0] !== vals[1] && vals[0] !== vals[2] ).toBe(true);
            expect( haystack ).toContain( vals[0] );
            expect( haystack ).toContain( vals[1] );
            expect( haystack ).toContain( vals[2] );

        });

        it('should allow custom thisObject', function () {

            var obj = {
                'a' : 123,
                'b' : true,
                'c' : 'ipsum'
            };

            var count = 0;

            forOwn(obj, function(val, key, o){
                expect(o).toBe(obj);
                expect(this).toBe(window);
                count++;
            });

            forOwn(obj, function(val, key, o){
                expect(o).toBe(obj);
                expect(this).toBe(obj);
                count++;
            }, obj);

            expect( count ).toEqual( 6 );

        });

        it('should filter prototype properties', function () {

            var Foo = function(){
                this.lorem = 'ipsum';
            };
            Foo.prototype = {foo : 'bar'};

            var obj = new Foo();

            var keys = [],
                vals = [];

            forOwn(obj, function(val, key, o){
                expect(o).toBe(obj);
                keys.push(key);
                vals.push(val);
            });

            expect( keys ).toEqual( ['lorem'] );
            expect( vals ).toEqual( ['ipsum'] );

        });

    });

});
