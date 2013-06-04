define(['mout/object/underscoreKeys'], function(underscoreKeys){

    describe('object/underscoreKeys', function(){

        it('should normalize all the keys of a given object by using underscores as separators', function(){

        	var obj = {
        		'# foo bar': 0,
        		'BAR BAZ': 1,
        		'lorem ipsum': 2
        	};

        	obj = underscoreKeys(obj);
            
            expect(obj['foo_bar']).toBeDefined();
            expect(obj['bar_baz']).toBeDefined();
            expect(obj['lorem_ipsum']).toBeDefined();

        });

    });

});
