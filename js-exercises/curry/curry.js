function curry(func) {
  return function curried(...initialargs) {
    if (initialargs.length >= func.length) {
      return func.apply(this, initialargs);
    }
    return function recursionCurried(...nextargs) {
      return curried.apply(this, [...initialargs, ...nextargs]);
    };
  };
}

export {
  curry,
};
