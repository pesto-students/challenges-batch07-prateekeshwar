function balancedBraces(...args) {
  try {
    const argString = args[0];
    if (args && typeof (args[0] === 'string')) {
      const bracketArray = [];
      for (const char of argString) {
        if (char === '{' || char === '}' || char === '[' || char === ']' || char === '(' || char === ')') {
          bracketArray.push(char);
        }
      }
      let brackString = bracketArray.join('');
      while (brackString.length !== 0 && (brackString.includes('[]')
      || brackString.includes('()') || brackString.includes('{}'))) {
        brackString = brackString.replace('[]', '');
        brackString = brackString.replace('()', '');
        brackString = brackString.replace('{}', '');
      }
      return brackString.length < 1;
    }
    throw new Error('Invalid or empty argument');
  } catch (error) {
    throw error.message;
  }
}

export {
  balancedBraces,
};
