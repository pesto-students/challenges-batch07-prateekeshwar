const limitFunctionCallCount = (func, num) => {
  let count = 0;
  return (...args) => {
    if (count >= num) { return null; }
    count += 1;
    return func(...args);
  };
};

export {
  limitFunctionCallCount,
};
