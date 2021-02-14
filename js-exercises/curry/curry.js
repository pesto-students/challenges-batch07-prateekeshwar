function curry(func) {
  return function curried(...initialargs) {
    if (initialargs.length >= func.length) {
      return func(...initialargs);
    }
    return function recursionCurried(...nextargs) {
      return curried(...[...initialargs, ...nextargs]);
    };
  };
}

export {
  curry,
};
