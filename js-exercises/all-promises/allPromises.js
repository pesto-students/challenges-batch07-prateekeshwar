/**
 * Resolve all promise in arra sequentially and return promise of array if
 * all resolved else return reject promise of first rejected promise.
 * @param {Array} inputPromiseArr input array of promises that need to be resolved
 * @param {Array} outputArr default []
 * @returns {Promise}
 */
const recursiveResolvePromise = (inputPromiseArr, outputArr) => {
  const resolvedArr = new Promise((resolve, reject) => {
    const recursivePromise = (
      shiftInputPromiseArr,
      appendOutputArr,
      value = null,
    ) => {
      shiftInputPromiseArr[0](value)
        .then((indvidualResponse) => {
          appendOutputArr.push(indvidualResponse);
          shiftInputPromiseArr.shift();
          if (shiftInputPromiseArr.length > 0) {
            recursivePromise(
              shiftInputPromiseArr,
              appendOutputArr,
              indvidualResponse,
            );
          } else {
            resolve(appendOutputArr);
          }
        })
        .catch((error) => {
          reject(error);
        });
    };
    recursivePromise(inputPromiseArr, outputArr);
  });
  return resolvedArr;
};

/**
 * Resolve all values in input array or reject the first
 * exception catched.
 * @param {Array} args array of promises
 * @returns {Promise} promise containing resolve or reject
 */
const allPromises = (args) => {
  if (!args) {
    return Promise.resolve('');
  }
  if (!Array.isArray(args)) {
    throw new Error('Argument is not array');
  }
  if (!args.length) {
    return Promise.resolve([]);
  }
  const onlyPromiseFns = args.map((element) => {
    if (typeof element === 'function') {
      return element;
    }
    return () => Promise.resolve(element);
  });
  const outputArr = recursiveResolvePromise(onlyPromiseFns, []);
  return outputArr;
};

export { allPromises };
