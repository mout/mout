define(['mout/function/memoize'], function (memoize) {

    describe('function/memoize()', function(){

        

        it('should produce identical results of a memoized version of fibonacci', function(){
            var fib = function(n) {
                return n < 2 ? n : fib(n - 1) + fib(n - 2);
            };

            expect( fib(10) ).toEqual(55);

            // Redefine `fib` for memoization
            fib = memoize(fib);

            expect( fib(10) ).toEqual(55);
        });

        it('should check hasOwnProperty', function(){
            var o = function(str) {
                return str;
            };
            var fastO = memoize(o);

            expect( o('toString') ).toEqual('toString');

            expect( fastO('toString') ).toEqual('toString');
        });

        it('should cache results', function(){
            // Expose the cache.
            var upper = memoize(function(s) {
                return s.toUpperCase();
            });
            
            expect( upper('foo') ).toEqual('FOO');
            expect( upper('bar') ).toEqual('BAR');
            expect( upper.cache ).toEqual(upper.cache, {
                foo: 'FOO',
                bar: 'BAR'
            });
            
            upper.cache = {
                foo: 'BAR',
                bar: 'FOO'
            };
            
            expect( upper('foo') ).toEqual('BAR');
            expect( upper('bar') ).toEqual('FOO');
        });

        it('should take a hasher, which doesn\'t change keys', function(){
            var hashed = memoize(function(key) {
                //https://github.com/jashkenas/underscore/pull/1679#discussion_r13736209
                
                expect( /[a-z]+/.test(key) ).toBe(true);
                return key;
            }, function(key) {
                return key.toUpperCase();
            });

            hashed('yep');

            expect( hashed.cache ).toEqual({
                'YEP': 'yep'
            });
        });

        describe('cache', function(){
            // Test that the hash function can be used to swizzle the key.
            var objCacher = memoize(function(value, key) {
                return {
                    key: key,
                    value: value
                };
            }, function(value, key) {
                return key;
            });
            var myObj = objCacher('a', 'alpha');
            var myObjAlias = objCacher('b', 'alpha');

            it('should create an object if second argument used as key', function(){
                expect( myObj ).toBeDefined();
            });

            it('should cache an object if second argument used as key', function(){
                expect( myObj ).toEqual(myObjAlias);
            });

            it('should not modify object if second argument used as key', function(){
                expect( myObj.value ).toEqual('a')
            });
        });
    });
});
