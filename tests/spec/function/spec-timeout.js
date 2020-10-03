import timeout from '../../../function/timeout';

describe('function/timeout', function() {
    function doIt() {
        this.a++;
    }

    function manipulate(value) {
        this.a = value;
    }

    beforeEach(function() {
        jasmine.clock.install();
    });

    afterEach(function() {
        jasmine.clock.uninstall();
    });

    it('should delay the execution', function() {
        const callback = jasmine.createSpy();
        timeout(callback, 300);

        jasmine.clock.tick(100);
        expect(callback).not.toHaveBeenCalled();

        jasmine.clock.tick(250);
        expect(callback).toHaveBeenCalled();
    });

    it('should call function in given context', function() {
        const context = { a: 0 };
        timeout(doIt, 300, context);

        jasmine.clock.tick(350);
        expect(context.a).toBe(1);
    });

    it('should curry arguments', function() {
        const context = { a: 0 };
        timeout(manipulate, 300, context, 5);

        jasmine.clock.tick(350);
        expect(context.a).toBe(5);
    });

    it('should cancel a timemout', function() {
        const callback = jasmine.createSpy();
        const id = timeout(callback, 200);

        jasmine.clock.tick(100);
        clearTimeout(id);

        jasmine.clock.tick(200);
        expect(callback).not.toHaveBeenCalled();
    });
});
