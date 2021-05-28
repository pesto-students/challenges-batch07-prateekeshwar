function duplicateLetters(...args) {
  try {
    if (args) {
      const CountChar = {};
      let maxChar = null;
      for (const char of args[0]) {
        CountChar[char] = CountChar[char] ? CountChar[char] += 1 : 1;
        if (maxChar === null || CountChar[char] > maxChar) {
          maxChar = CountChar[char];
        }
      }
      return maxChar && maxChar > 1 ? maxChar : false;
    }
    throw new Error('Null argument');
  } catch (error) {
    throw error.message;
  }
}

export {
  duplicateLetters,
};
