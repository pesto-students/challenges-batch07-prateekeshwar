function removeFalsyValues(array) {
  return array.filter((arrValue) => { if (arrValue) { return arrValue; } return ''; });
}

export {
  removeFalsyValues,
};
