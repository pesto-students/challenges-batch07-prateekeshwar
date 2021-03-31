function rangeIter(lb, ub) {
  if (!lb || typeof (lb) !== 'number') {
    throw new TypeError(`${lb} is not a number`);
  } else if (!ub || typeof (ub) !== 'number') {
    throw new TypeError(`${lb} is not a number`);
  } else if (lb > ub) {
    return [];
  } else if (lb === ub) {
    return [lb];
  } else if (lb < ub) {
    const iterableArr = [];
    for (let num = lb; num <= ub; num += 1) {
      iterableArr.push(num);
    }
    return iterableArr;
  } else {
    throw new Error('Invalid parameter');
  }
}

export { rangeIter };
