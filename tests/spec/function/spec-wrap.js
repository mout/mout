define(['mout/function/wrap'], function(wrap){

    var add = function(a, b){
        return a + b;
    };


    describe('function/wrap', function(){

        it('should create a wrapped function', function(){
            var wrapped = wrap(add, function(func, a, b){
                return func(a + 2, b);
            });

            expect(wrapped(1, 2)).toBe(5);
        });

        it('should pass the correct `wrapper` arguments', function(){
            var args;
            var noop = function(){};

            var wrapped = wrap(noop, function() {
                args || (args = Array.prototype.slice.call(arguments));
            });

            wrapped(1, 2, 3);
            expect(args).toEqual([noop, 1, 2, 3]);
        });

        it('should not set a `this` binding', 1, function(){
            var wrapped = wrap(add, function(func){
                return func(this.a + this.b);
            });

            var object = {
                'wrapped': wrapped,
                'a': 1,
                'b': 2
            };

            expect(object.wrapped()).toBe(3);
        });

    });

});
