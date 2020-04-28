import forEach from '../../../collection/forEach';

describe('collection/forEach', function() {
    it('should loop arrays', function() {
        const result = [];
        forEach([1, 2, 3, 4], function(val, i) {
            result[i] = val;
        });
        expect(result).toEqual([1, 2, 3, 4]);
    });

    it('should loop over object own properties', function() {
        const result = {};
        const Foo = function() {
            this.a = 'lorem';
            this.b = 123;
            this.c = 'bar';
        };
        Foo.prototype.d = 'ipsum';

        const src = new Foo();
        forEach(src, function(val, i) {
            result[i] = val;
        });
        expect(result).toEqual({ a: 'lorem', b: 123, c: 'bar' });
    });
});
