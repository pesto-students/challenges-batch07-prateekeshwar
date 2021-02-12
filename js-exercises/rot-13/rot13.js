function rot13(...args) {
  try {
    if (args) {
      const RotStr = args[0].toUpperCase();
      const Alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let NewDecodeStr = '';
      for (let i = 0; i < RotStr.length; i += 1) {
        const CurrentChar = RotStr.charAt(i);
        if (CurrentChar.match(/[A-Z]/i)) {
          const CurentIndex = Alphabets.indexOf(CurrentChar) + 1;
          if (CurentIndex + 13 < 27) {
            NewDecodeStr += Alphabets.charAt(CurentIndex + 13 - 1);
          } else {
            NewDecodeStr += Alphabets.charAt(CurentIndex + 13 - 26 - 1);
          }
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
