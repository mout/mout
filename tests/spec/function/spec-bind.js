define(['src/function/bind'], function (bind) {

    describe('function/bind()', function(){

        var o1 = {val : 'bar'};
        var o2 = {val : 123};

        function getVal(){
            return this.val;
        }

        function doIt(a, b, c){
            var str = '';
            str += a? a : '';
            str += b? b : '';
            str += c? c : '';
            return this.val + str;
        }


        it('should change execution context', function(){
            var a = bind(getVal, o1);
            var b = bind(getVal, o2);
            expect( a() ).toEqual('bar');
            expect( b() ).toEqual(123);
        });

        it('should curry args', function(){
            var a = bind(doIt, o1, ' a', 'b', 'c');
            var b = bind(doIt, o2, '456');
            expect( a() ).toEqual('bar abc');
            expect( b() ).toEqual('123456');
        });

    });
});
