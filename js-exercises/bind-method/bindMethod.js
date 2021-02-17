// You can change the `args`
function bind(...args) {
  try {
    if (args && (typeof (args[0]) === 'function') && (typeof (args[1]) === 'object')) {
      return args[0].bind(args[1]);
    }
    throw new Error('Invalid function argument');
  } catch (error) {
    throw error.message;
  }
}

module.exports = { bind };
