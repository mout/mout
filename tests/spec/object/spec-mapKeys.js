define(['mout/object/mapKeys'], function(mapKeys) {

	describe('object/mapKeys', function() {

        var obj = {
            foo: 0,
            bar: 1,
            baz: 2
        };

		it('should map a function over the keys of an object', function() {
            var strings = [];

        	mapKeys(obj, function(key) {
        		strings.push(key);
        	});

            expect(strings).toContain('foo');
            expect(strings).toContain('bar');
            expect(strings).toContain('baz');
            expect(strings).not.toContain('lorem');
            expect(strings).not.toContain('ipsum');
        });

        it('should check if returning a new value will replace object keys.', function() {
        	
        	var thisObj = {},
                newObj;

            newObj = mapKeys(obj, function(key, val, o) {
               
               // Make sure it receives all arguments.
               expect(o).toBe(obj);
               expect(this).toBe(thisObj);

               return key + '-' + val;

            }, thisObj);

            expect(newObj).toEqual({
               'foo-0': 0,
               'bar-1': 1,
               'baz-2': 2 
            });

            // Make sure it returns a new object.
            expect(newObj).not.toBe(obj);

        });

    });

});