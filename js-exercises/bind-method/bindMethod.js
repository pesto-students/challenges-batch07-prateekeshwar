// You can change the `args`
function bind(...args) {
  try {
    if (args && (typeof (args[0]) === 'function') && (typeof (args[1]) === 'object')) {
      const fn = args[0];
      const objectToBind = args[1];
      return function bindFunction(x) {
        return fn.call(objectToBind, x);
      };
    }
    throw new Error('Invalid function argument');
  } catch (error) {
    throw error.message;
  }
}

module.exports = { bind };
