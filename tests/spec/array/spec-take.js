import take from '../../../array/take';

describe('array/take', function() {
    it('should iterate a given amount of times passing the index and total', function() {
        const amount = 5;
        let count = 0;

        take(amount, function(i, total) {
            count += i;
            expect(total).toBe(amount);
            return count;
        });

        expect(count).toBe(10);
    });

    it('should collect the results of the callback', function() {
        const amount = 5;

        const vals = take(amount, function(i, total) {
            return i / total;
        });

        expect(vals.length).toBe(amount);

        for (let i = 0; i < amount; i++) {
            expect(vals[i]).toBe(i / amount);
        }
    });

    it('should execute callback in context', function() {
        const object = {
            phrase: 'hello world'
        };

        const vals = take(
            object.phrase.length,
            function(i) {
                return this.phrase[i];
            },
            object
        );

        expect(vals.length).toBe(object.phrase.length);

        for (let i = 0; i < object.phrase.length; i++) {
            expect(vals[i]).toBe(object.phrase[i]);
        }
    });
});
