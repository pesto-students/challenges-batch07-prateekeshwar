function duplicateLetters(...args) {
  try {
    if (args) {
      let maxChar = null;
      const CountChar = {};
      args[0].split('').forEach((char) => {
        CountChar[char] = (CountChar[char] || 0) + 1;
        maxChar = maxChar === null || CountChar[char] > CountChar[maxChar] ? char : maxChar;
      });
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
