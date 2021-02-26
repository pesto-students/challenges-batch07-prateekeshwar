const settleIndividualPromise = (promise) => {
  const indPromise = new Promise((resolve, reject) => {
    if (typeof (promise) === 'string' || typeof (promise) === 'number' || promise === null || promise === undefined) {
      resolve(promise);
    } else {
      promise.then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    }
  });
  return indPromise;
};

const recursiveSettlePromise = (inputPromiseArr, outputArr) => {
  const settledArr = new Promise((resolve, reject) => {
    const recursivePromise = (shiftInputPromiseArr, appendOutputArr) => {
      settleIndividualPromise(shiftInputPromiseArr[0]).then(indvidualResponse => {
        appendOutputArr.push({ status: 'fulfilled', value: indvidualResponse });
        shiftInputPromiseArr.shift();
        if (shiftInputPromiseArr.length > 0) {
          recursivePromise(shiftInputPromiseArr, appendOutputArr);
        } else {
          resolve(appendOutputArr);
        }
      }).catch((error) => {
        appendOutputArr.push({ status: 'rejected', value: `${error}` });
        shiftInputPromiseArr.shift();
        if (shiftInputPromiseArr.length > 0) {
          recursivePromise(shiftInputPromiseArr, appendOutputArr);
        } else {
          reject(appendOutputArr);
        }
      });
    };
    recursivePromise(inputPromiseArr, outputArr);
  });
  return settledArr;
};

const allSettled = args => {
  const outputArr = recursiveSettlePromise(args, []);
  return outputArr;
};

export { allSettled };
