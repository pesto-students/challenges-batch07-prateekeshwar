function chunkArrayInGroups(array, chunkSize) {
  const chunkArrays = [];
  let index = 0;
  while (index < array.length) {
    chunkArrays.push(array.slice(index, index += chunkSize));
  }
  return chunkArrays;
}

export {
  chunkArrayInGroups,
};
