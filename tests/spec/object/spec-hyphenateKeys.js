define(['mout/object/hyphenateKeys'], function(hyphenateKeys) {

    describe('object/hyphenateKeys', function() {

        it('should normalize all the keys of a given object by using hyphens as separators', function() {

        	var obj = {
        		'# foo bar': 0,
        		'BAR BAZ': 1,
        		'lorem ipsum': 2
        	};

        	obj = hyphenateKeys(obj);
            
            expect(obj['foo-bar']).toBeDefined();
            expect(obj['bar-baz']).toBeDefined();
            expect(obj['lorem-ipsum']).toBeDefined();

        });

    });

});