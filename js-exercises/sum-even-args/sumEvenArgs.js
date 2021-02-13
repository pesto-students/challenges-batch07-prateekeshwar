const sumEvenArgs = (...args) => {
  try {
    if (args) {
      const sumEvenNum = args.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);
      return sumEvenNum;
    }
    throw new Error('Function argument is null');
  } catch (error) {
    throw error.message;
  }
};

export { sumEvenArgs };
