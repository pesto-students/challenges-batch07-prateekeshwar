function balancedBraces(...args) {
  try {
    const argString = args[0];
    if (args && typeof (args[0] === 'string')) {
      const bracesMap = {
        '(': ')',
        '{': '}',
        '[': ']',
      };
      const openingBraces = Object.keys(bracesMap);
      const closingBraces = Object.values(bracesMap);
      const isOpeningBrace = (char) => openingBraces.includes(char);
      const isClosingBrace = (char) => closingBraces.includes(char);
      const stack = [];
      for (const char of argString) {
        if (isOpeningBrace(char) || isClosingBrace(char)) {
          if (isOpeningBrace(char)) {
            stack.push(char);
          } else {
            const topItem = stack.pop();
            if (bracesMap[topItem] !== char) {
              return false;
            }
          }
        }
      }
      if (stack.length) {
        return false;
      }
      return true;

      // const bracketArray = [];
      // for (let index = 0; index < argString.length; index += 1) {
      //   const char = argString.charAt(index);
      //   if (char === '{' || char === '}' || char === '[' ||
      // char === ']' || char === '(' || char === ')'){
      //     bracketArray.push(char);
      //   }
      // }
      // let brackString = bracketArray.join('');
      // while (brackString.length !== 0 && (brackString.includes('[]')
      // || brackString.includes('()') || brackString.includes('{}'))) {
      //   brackString = brackString.replace('[]', '');
      //   brackString = brackString.replace('()', '');
      //   brackString = brackString.replace('{}', '');
      // }
      // return brackString.length < 1;
    }
    throw new Error('Invalid or empty argument');
  } catch (error) {
    throw error.message;
  }
}

export { balancedBraces };
