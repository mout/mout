define(['mout/collection/make_'], function(make){

    describe('collection/make_', function(){


        it('should return a function', function(){
            var fn = make();
            expect( typeof fn ).toBe('function');
        });


        it('should call method based on first argument and return value', function () {
            var fn = make(function(){
                return 'array';
            }, function(){
                return 'object';
            });

            expect( fn([]) ).toBe( 'array' );
            expect( fn({}) ).toBe( 'object' );
        });


        it('should forward all arguments', function () {
            var calledArr;
            var calledObj;

            var fn = make(function(){
                calledArr = [].slice.call(arguments);
            }, function(){
                calledObj = [].slice.call(arguments);
            });

            fn([], 'lorem', 123, true);

            expect( calledArr ).toEqual( [[], 'lorem', 123, true] );
            expect( calledObj ).toEqual( null );

            fn({}, 'dolor', 567, true);

            expect( calledObj ).toEqual( [{}, 'dolor', 567, true] );
        });


        it('should threat array-like objects as arrays', function () {
            var obj = {
                '0' : '1',
                '1' : 'b',
                '2' : 'c',
                length : 3
            };

            var fn = make(function(){
                return 'array';
            }, function(){
                return 'object';
            });

            expect( fn(obj) ).toBe( 'array' );
        });


        it('`null` and `undefined` should return default value', function () {
            var fn = make(function(){
                return 'array';
            }, function(){
                return 'object';
            }, 'default');

            // this is important for cases like forEach(string.match(regexp), callback)
            // String#match might return `null` or an array
            expect( fn(null) ).toBe( 'default' );
            expect( fn() ).toBe( 'default' );
        });

    });

});
