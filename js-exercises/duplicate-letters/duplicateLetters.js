function duplicateLetters(...args) {
  try {
    if (args) {
      const ArgStr = args[0];
      const CountChar = {};
      let maxChar = null;
      for (let i = 0; i < ArgStr.length; i += 1) {
        CountChar[ArgStr[i]] = CountChar[ArgStr[i]] ? CountChar[ArgStr[i]] += 1 : 1;
        if (maxChar === null || CountChar[ArgStr[i]] > CountChar[maxChar]) {
          maxChar = ArgStr[i];
        }
      }
      return CountChar[maxChar] > 1 ? CountChar[maxChar] : false;
    }
    throw new Error('Null argument');
  } catch (error) {
    throw error.message;
  }
}

export {
  duplicateLetters,
};
