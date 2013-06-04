define(['mout/object/camelCaseKeys'], function(camelCaseKeys) {

    describe('object/camelCaseKeys', function() {

        it('should normalize keys of a given object to camel case', function() {

        	var obj = {
        		'# foo bar': 0,
        		'bar_baz': 1,
        		'lorem ipsum': 2
        	};

        	obj = camelCaseKeys(obj);
            
            expect(obj['fooBar']).toBeDefined();
            expect(obj['barBaz']).toBeDefined();
            expect(obj['loremIpsum']).toBeDefined();

        });

    });

});