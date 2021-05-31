const sumEvenArgs = (...args) => {
  try {
    if (args) {
      const sumEvenNum = args.reduce((sum, num) => {
        if (num % 2 === 0) {
          return sum + num;
        }
        return sum;
      }, 0);
      return sumEvenNum;
    }
    throw new Error('Function argument is null');
  } catch (error) {
    throw error.message;
  }
};

export { sumEvenArgs };
