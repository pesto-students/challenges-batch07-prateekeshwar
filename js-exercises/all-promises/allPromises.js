const resolveIndividualPromise = (promise) => {
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

const recursiveResolvePromise = (inputPromiseArr, outputArr) => {
  const resolvedArr = new Promise((resolve, reject) => {
    const recursivePromise = (shiftInputPromiseArr, appendOutputArr) => {
      resolveIndividualPromise(shiftInputPromiseArr[0]).then(indvidualResponse => {
        appendOutputArr.push(indvidualResponse);
        shiftInputPromiseArr.shift();
        if (shiftInputPromiseArr.length > 0) {
          recursivePromise(shiftInputPromiseArr, appendOutputArr);
        } else {
          resolve(appendOutputArr);
        }
      }).catch((error) => {
        reject(error);
      });
    };
    recursivePromise(inputPromiseArr, outputArr);
  });
  return resolvedArr;
};

const allPromises = args => {
  const outputArr = recursiveResolvePromise(args, []);
  return outputArr;
};

export { allPromises };
