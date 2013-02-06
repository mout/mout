define(['mout/object/reject', 'mout/object/size'], function(reject, size) {

    describe('object/reject', function(){

        it('should reject items', function() {
            var obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
            var thisObj = {};

            var result = reject(obj, function(val, key, list) {
                expect(val).toBe(obj[key]);
                expect(list).toBe(obj);
                expect(this).toBe(thisObj);
                return (val % 2) !== 0;
            }, thisObj);

            expect(size(obj)).toEqual(5);
            expect(result).toEqual({b: 2, d: 4});
        });

        it('should return empty object if all items rejected', function() {
            var obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
            var result = reject(obj, function() { return true; });
            expect(result).toEqual({});
        });


        it('should support shorthand syntax', function () {
            var obj = {
                a : {foo:'bar', lorem:'ipsum', id:1},
                b : {foo:'bar', lorem:'ipsum', id:2},
                c : {foo:'bar', lorem:'ipsum', id:4}
            };
            expect( reject(obj, {foo:'bar', lorem:'ipsum'}) ).toEqual( {} );
            expect( reject(obj, {lorem:'ipsum', id:1}) ).toEqual( {b:obj.b, c:obj.c} );
            expect( reject(obj, {amet:123}) ).toEqual( obj );
        });


        it('should allow string shorthand syntax', function () {
            var obj = {
                a : {foo:'bar', lorem:'ipsum', id:1},
                b : {foo:'bar', lorem:'ipsum', id:2},
                c : {foo:'bar', lorem:'ipsum', id:0}
            };
            expect( reject(obj, 'foo') ).toEqual( {} );
            expect( reject(obj, 'id') ).toEqual( {c:obj.c} );
            expect( reject(obj, 'amet') ).toEqual( obj );
        });


    });
});
