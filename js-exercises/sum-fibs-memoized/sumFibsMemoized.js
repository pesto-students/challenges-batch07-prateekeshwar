function sumFibs(num) {
  try {
    if (num) {
      let FibboSum = 2;
      if (num === 0) {
        throw new Error('Number is 0');
      } else if (num === 1) {
        return 1;
      } else if (num === 2 || num === 3) {
        return 2;
      }
      const FibboArray = [1, 1];
      for (let i = 2; FibboArray[i - 2] + FibboArray[i - 1] <= num; i += 1) {
        const CurrentFibbo = FibboArray[i - 2] + FibboArray[i - 1];
        FibboArray.push(CurrentFibbo);
        if (CurrentFibbo % 2 !== 0) {
          FibboSum += CurrentFibbo;
        }
      }
      return FibboSum;
    }
    throw new Error('Number is null');
  } catch (error) {
    throw error.message;
  }
}

function cacheFunction(fn) {
  const StoreCache = new Map();
  return function memoizedFun(...args) {
    const key = JSON.stringify(args);
    if (StoreCache.has(key)) {
      return StoreCache.get(key);
    }
    const result = fn(...args);
    StoreCache.set(key, result);
    return result;
  };
}

export { sumFibs, cacheFunction };
