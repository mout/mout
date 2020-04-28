import pluck from '../../../object/pluck';

describe('object/pluck', function() {
    it('should extract properties from items', function() {
        const users = {
            first: {
                name: 'John',
                age: 21
            },
            second: {
                name: 'Mary',
                age: 25
            },
            third: {
                name: 'Jane',
                age: 27
            }
        };

        expect(pluck(users, 'name')).toEqual({
            first: 'John',
            second: 'Mary',
            third: 'Jane'
        });
        expect(pluck(users, 'age')).toEqual({
            first: 21,
            second: 25,
            third: 27
        });
    });
});
