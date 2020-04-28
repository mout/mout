import get from '../../../object/get';

describe('object/get()', function() {
    it('should get nested property', function() {
        const foo = {
            bar: {
                lorem: {
                    ipsum: 'dolor'
                }
            }
        };
        expect(get(foo, 'bar.lorem.ipsum')).toBe('dolor');
    });

    it('should get nested property when encountering non-primitive', function() {
        const foo = {
            bar: {
                lorem: function() {}
            }
        };

        foo.bar.lorem.ipsum = 'dolor';

        expect(get(foo, 'bar.lorem.ipsum')).toBe('dolor');
    });

    it('should get nested property when encountering primitive', function() {
        const foo = {
            bar: {
                lorem: 'ipsum'
            }
        };

        expect(get(foo, 'bar.lorem.toString')).toBe(foo.bar.lorem.toString);
    });

    it('should return undefined if non existent', function() {
        const foo = {
            bar: {
                lorem: 'ipsum'
            }
        };
        let undef;
        expect(get(foo, 'bar.dolor')).toBe(undef);
    });

    it('should return undefined when encountering null', function() {
        const foo = {
            bar: null
        };

        let undef;
        expect(get(foo, 'foo.bar.baz')).toBe(undef);
    });

    it('should return undefined for undefined input objects', function() {
        const foo = undefined;

        let undef;
        expect(get(foo, 'bar.baz')).toBe(undef);
    });

    it('should return undefined for null input objects', function() {
        const foo = null;

        let undef;
        expect(get(foo, 'bar.baz')).toBe(undef);
    });
});
