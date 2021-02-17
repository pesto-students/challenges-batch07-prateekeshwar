function rot13(...args) {
  try {
    if (args) {
      return args[0].replace(/[A-Z]/g, (char) => String.fromCharCode(((char.charCodeAt(0) - 65 + 13) % 26) + 65));
    }
    throw new Error('Null argument');
  } catch (error) {
    throw error.message;
  }
}

export {
  rot13,
};
