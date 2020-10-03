import parse from '../../../queryString/parse';

describe('queryString/parse()', function() {
    it('should extract query string from url and parse it', function() {
        const q = parse('http://example.com/?foo=bar&a=123&b=false&c=null');
        expect(q.foo).toBe('bar');
        expect(q.a).toBe(123);
        expect(q.b).toBe(false);
        expect(q.c).toBe(null);
    });

    it('should allow toggling typecase', function() {
        const q = parse('http://example.com/?foo=bar&a=123&b=false&c=null', false);
        expect(q.foo).toBe('bar');
        expect(q.a).toBe('123');
        expect(q.b).toBe('false');
        expect(q.c).toBe('null');
    });
});
