define(['mout/object/forIn'], function(forIn){

    var global = this;


    describe('object/forIn', function(){

        it('should loop through all properties', function(){

            var obj = {
                foo : 123,
                bar : true,
                lorem : 'ipsum'
            };

            var keys = [],
                vals = [];

            forIn(obj, function(val, key, o){
                expect(o).toBe(obj);
                keys.push(key);
                vals.push(val);
            });

            expect(keys).toEqual(['foo', 'bar', 'lorem']);
            expect(vals).toEqual([123, true, 'ipsum']);

        });

        it('should enumerate special properties when defined', function() {
            var obj = {
                constructor: 'foo',
                toString: 'bar',
                hasOwnProperty: true
            };

            var keys = [];
            forIn(obj, function(value, key) {
                keys.push(key);
            });

            expect( keys.length ).toBe( 3 );
            expect( keys ).toContain( 'constructor' );
            expect( keys ).toContain( 'toString' );
            expect( keys ).toContain( 'hasOwnProperty' );
        });

        it('grab all enumerable properties, including inherited ones', function () {
            function Foo(){
                this.bar = true;
            }

            Foo.prototype.dolor = 'amet';

            Foo.prototype.toString = function() {
                return '[Foo bar: ' + this.bar + ']';
            };

            var obj = new Foo();
            var keys = [],
                values = [];

            forIn(obj, function(value, key, o){
                keys.push(key);
                values.push(value);
                expect(o).toBe(obj);
            });

            // loop order isn't guaranteed to be always the same
            expect( keys.length ).toBe( 3 );
            expect( keys ).toContain( 'bar' );
            expect( keys ).toContain( 'dolor' );
            expect( keys ).toContain( 'toString' );

            expect( values.length ).toBe( 3 );
            expect( values ).toContain( true );
            expect( values ).toContain( 'amet' );
            expect( values ).toContain( Foo.prototype.toString );
        });

        it('should allow custom thisObject', function () {

            var obj = {
                'a' : 123,
                'b' : true,
                'c' : 'ipsum'
            };

            var count = 0;

            forIn(obj, function(val, key, o){
                expect(o).toBe(obj);
                expect(this).toBe(global);
                count++;
            });

            forIn(obj, function(val, key, o){
                expect(o).toBe(obj);
                expect(this).toBe(obj);
                count++;
            }, obj);

            expect( count ).toEqual( 6 );

        });

        it('should allow exiting the iteration early. see #94', function () {

            var obj = {
                'a' : 123,
                'b' : true,
                'c' : 'ipsum',
                'd' : 456
            };

            var count = 0;

            forIn(obj, function(val, key, o){
                count++;
                if (count === 2) {
                    return false;
                }
            });

            expect( count ).toBe( 2 );

        });

    });

});
