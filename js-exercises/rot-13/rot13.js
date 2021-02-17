function rot13(...args) {
  try {
    if (args) {
      const Alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let NewDecodeStr = '';
      for (const CurrentChar of args[0]) {
        if (CurrentChar.match(/[A-Z]/i)) {
          const CurentIndex = Alphabets.indexOf(CurrentChar) + 1;
          NewDecodeStr += CurentIndex + 13 < 27 ? Alphabets.charAt(CurentIndex + 13 - 1)
            : Alphabets.charAt(CurentIndex + 13 - 26 - 1);
        } else {
          NewDecodeStr += CurrentChar;
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
