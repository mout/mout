define(['mout/object/mapKeys'], function(mapKeys) {

	describe('object/mapKeys', function(){

		var obj = {
			foo: 0,
			bar: 1,
			baz: 2
		};

        it('should map a function over the keys of an object', function(){
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

        it('should generate a new object with the same keys as the source', function() {
        	
        	newObj = mapKeys(obj, function(key) {
        	    return key;
        	});

        	expect(newObj['foo']).toBeDefined();
        	expect(newObj['bar']).toBeDefined();
        	expect(newObj['baz']).toBeDefined();
        	expect(newObj['lorem']).not.toBeDefined();
        	expect(newObj['ipsum']).not.toBeDefined();

        });

    });

});