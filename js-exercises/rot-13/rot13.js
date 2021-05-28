function rot13(...args) {
  try {
    if (args) {
      const Alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let NewDecodeStr = '';
      for (const char of args[0].toUpperCase()) {
        if (char.match(/[A-Z]/i)) {
          const CurentIndex = Alphabets.indexOf(char) + 1;
          NewDecodeStr += CurentIndex + 13 < 27 ? Alphabets[CurentIndex + 13 - 1]
            : Alphabets[CurentIndex + 13 - 26 - 1];
        } else {
          NewDecodeStr += char;
        }
      }
      return NewDecodeStr;
    }
    throw new Error('Null argument');
  } catch (error) {
    throw error.message;
  }
}

export {
  rot13,
};
