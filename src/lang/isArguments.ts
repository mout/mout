import isKind from './isKind';

/**
 */
// eslint-disable-next-line no-undef
const isArgs = isKind(arguments, 'Arguments')
    ? function(val) {
          return isKind(val, 'Arguments');
      }
    : function(val) {
          // Arguments is an Object on IE7
          return !!(val && Object.prototype.hasOwnProperty.call(val, 'callee'));
      };

export default isArgs;
