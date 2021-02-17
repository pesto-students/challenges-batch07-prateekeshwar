function abbreviateString(str) {
  try {
    if (str && typeof (str) === 'string') {
      const StrArray = str.trim().split(' ');
      if (StrArray.length > 1) {
        return (`${StrArray[0]} ${StrArray[StrArray.length - 1].charAt(0).toUpperCase()}.`);
      }
      return StrArray[0];
    }
    throw new Error('Value of parameter is either empty or not of string data type');
  } catch (error) {
    throw error.message;
  }
}

export { abbreviateString };
