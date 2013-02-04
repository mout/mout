define(['mout/function/shorthandIterator_'], function(shorthandIterator_){

    describe('function/shorthandIterator_', function(){

        it('should return source argument if it is already a function', function(){
            var fn = function(){};
            expect( shorthandIterator_(fn) ).toBe(fn);
        });


        it('should return a function that calls object/matches if argument is an object', function(){
            var fn =  shorthandIterator_({a:1,b:2});
            expect( fn({a:1,b:2}) ).toBe( true );
            expect( fn({a:2,b:2}) ).toBe( false );
        });


        it('should return a function that returns the property value if argument is a string', function(){
            var fn =  shorthandIterator_('a');
            expect( fn({a:1,b:2}) ).toBe( 1 );
            expect( fn({a:2,b:2}) ).toBe( 2 );
        });


        it('should return a function that returns the property value if argument is a number', function(){
            var fn =  shorthandIterator_(1);
            expect( fn([0,4,5]) ).toBe( 4 );
            expect( fn([6,7,8]) ).toBe( 7 );
        });


        it('should return return source argument if it is from an unsupported type', function(){
            expect( shorthandIterator_(null) ).toBe( null );
            expect( shorthandIterator_(void(0)) ).toBe( void(0) );
        });


    });

});
