const bind = Function.prototype.bind;

/**
 * Do fn.apply on a constructor.
 */
function ctorApply(ctor, args) {
    // eslint-disable-next-line prefer-spread
    const Bound = bind.bind(ctor, undefined).apply(undefined, args);
    return new Bound();
}

export default ctorApply;
