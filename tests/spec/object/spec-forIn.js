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


        it('grab all enumerable properties, including inherited ones', function () {

            function Foo(){
                this.bar = true;
            }

            Foo.prototype = {
                dolor : 'amet',
                toString : function(){
                    return '[Foo bar:'+ this.bar +']';
                }
            };

            var obj = new Foo();
            var keys = [],
                vals = [];

            forIn(obj, function(val, key, o){
                keys.push(key);
                vals.push(val);
                expect(o).toBe(obj);
            });

            // loop order isn't guaranteed to be always the same
            var haystack = ['bar', 'dolor', 'toString'];
            expect( keys[0] !== keys[1] && keys[0] !== keys[2] ).toBe(true);
            expect( haystack ).toContain( keys[0] );
            expect( haystack ).toContain( keys[1] );
            expect( haystack ).toContain( keys[2] );

            haystack = [true, 'amet', Foo.prototype.toString];
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
