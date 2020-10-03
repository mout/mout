const bind = Function.prototype.bind;

/**
 * Do fn.apply on a constructor.
 */
function ctorApply(ctor, args) {
    const Bound = bind.bind(ctor, undefined)(...args);
    return new Bound();
}

export default ctorApply;
