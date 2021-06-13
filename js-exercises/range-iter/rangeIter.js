function rangeIter(lb, ub) {
  if (!lb || typeof (lb) !== 'number') {
    throw new TypeError(`${lb} is not a number`);
  } else if (!ub || typeof (ub) !== 'number') {
    throw new TypeError(`${lb} is not a number`);
  } else if (lb > ub) {
    return [];
  } else if (lb === ub) {
    return [lb];
  }
  const objIter = {
    [Symbol.iterator]() {
      return {
        current: lb,
        last: ub,
        next() {
          if (this.current <= this.last) {
            const value = this.current;
            this.current += 1;
            return { done: false, value };
          }
          return { done: true };
        },
      };
    },
  };
  return objIter;
}

export { rangeIter };
