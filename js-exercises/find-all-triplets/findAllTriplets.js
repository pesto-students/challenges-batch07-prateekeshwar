function getTwoSum(arr, sum, val) {
  const pairArr = [];
  const checkObject = {};
  arr.forEach((value, index) => {
    if (checkObject[value] !== undefined) {
      pairArr.push([val, arr[checkObject[value]], value]);
    } else {
      checkObject[sum - value] = index;
    }
  });
  return pairArr;
}

function findAllTriplets(arr, sum) {
  if (typeof sum !== 'number') { throw new Error('Invalid parameter sum'); }
  if (!Array.isArray(arr)) { throw new Error('Invalid parameter arr'); }
  if (arr.length < 3) { throw new Error('Invalil paramter, length of array is less than 3'); }
  // eslint-disable-next-line no-self-compare
  const checkNumberType = arr.every((element) => typeof element === 'number' && element === element);
  if (!checkNumberType) { throw new Error('array is not number type'); }
  let trippetArr = [];
  arr.forEach((value, index) => {
    const splicedArr = arr;
    splicedArr.splice(index, 1);
    const tripplet = getTwoSum(splicedArr, sum - value, value);
    trippetArr = [...trippetArr, ...tripplet];
  });
  return trippetArr;
}

export { findAllTriplets };
