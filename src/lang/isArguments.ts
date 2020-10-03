import isKind from './isKind';

function getArguments() {
    return arguments;
}

const isArgs = isKind(getArguments(), 'Arguments')
    ? function(val) {
          return isKind(val, 'Arguments');
      }
    : function(val) {
          // Arguments is an Object on IE7
          return !!(val && Object.prototype.hasOwnProperty.call(val, 'callee'));
      };

export default isArgs;
