import choice from '../../../random/choice';
import mockRandom from './helper-mockRandom';

describe('random/choice()', function() {
    beforeEach(function() {
        mockRandom.start();
    });

    afterEach(function() {
        mockRandom.end();
    });

    it('should pick a random argument', function() {
        const choices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        const a = choice(...choices);
        const b = choice(...choices);

        expect(choices).toContain(a);
        expect(choices).toContain(b);
        expect(a).not.toEqual(b);
    });

    it('should work with array', function() {
        const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        const a = choice(arr);
        const b = choice(arr);

        expect(arr).toContain(a);
        expect(arr).toContain(b);
        expect(a).not.toEqual(b);
    });
});
